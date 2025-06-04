fetch('/assets/public-notes-graph.json')
  .then(res => res.json())
  .then(graph => {
    const normalize = url => url.replace(/\/$/, '');

    // Extraer todas las primeras categorías únicas
    const categoriesSet = new Set();
    graph.nodes.forEach(n => {
      if (Array.isArray(n.categories) && n.categories.length > 0) {
        categoriesSet.add(n.categories[0].toLowerCase());
      } else {
        categoriesSet.add('uncategorized');
      }
    });

    // Función para generar un color pastel random basado en string (categoría)
    // function stringToColor(str) {
    //   let hash = 0;
    //   for (let i = 0; i < str.length; i++) {
    //     hash = str.charCodeAt(i) + ((hash << 5) - hash);
    //   }
    //   const h = hash % 360;
    //   return `hsl(${h}, 70%, 50%)`; // Saturación 70%, luminosidad 50%
    // }
// Paleta estilo "Panda" (pasteles fríos y suaves)
const pandaPalette = [
    'hsl(220, 25%, 60%)', // azul grisáceo
    'hsl(280, 30%, 65%)', // lavanda apagado
    'hsl(340, 40%, 70%)', // rosa pastel
    'hsl(170, 35%, 65%)', // verde menta
    'hsl(40, 30%, 70%)',  // beige suave
    'hsl(200, 20%, 60%)', // azul pálido
    'hsl(310, 25%, 60%)', // malva
    'hsl(180, 20%, 60%)', // cian grisáceo
    'hsl(50, 20%, 65%)',  // amarillo cremoso
    'hsl(260, 25%, 68%)', // violeta apagado
    'hsl(100, 30%, 60%)', // verde grisáceo
    'hsl(0, 20%, 65%)',   // rojo desaturado
    'hsl(30, 25%, 68%)',  // salmón claro
    'hsl(150, 25%, 60%)', // turquesa suave
    'hsl(190, 30%, 65%)', // azul verdoso claro
    'hsl(70, 25%, 68%)',  // lima pastel
  ];
  
  
  // Asigna un color fijo de la paleta a cada categoría
  function stringToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % pandaPalette.length;
    return pandaPalette[index];
  }
  


    // Crear mapa dinámico categoría => color
    const categoryColors = {};
    categoriesSet.forEach(cat => {
      categoryColors[cat] = stringToColor(cat);
    });

    // Mapa para contar grados
    const degreeMap = {};
    const nodeIds = new Set(graph.nodes.map(n => normalize(n.url)));

    const validLinks = graph.links.filter(l => {
      const from = normalize(l.source);
      const to = normalize(l.target);
      if (nodeIds.has(from) && nodeIds.has(to)) {
        degreeMap[from] = (degreeMap[from] || 0) + 1;
        degreeMap[to] = (degreeMap[to] || 0) + 1;
        return true;
      }
      return false;
    });

    const getCategoryColor = (categories) => {
      if (!Array.isArray(categories) || categories.length === 0) {
        return categoryColors['uncategorized'] || '#555555';
      }
      const cat = categories[0].toLowerCase();
      return categoryColors[cat] || '#888888';
    };

    const legend = document.getElementById('legend');
    if (legend) {
      legend.innerHTML = '';
      Object.entries(categoryColors).forEach(([cat, color]) => {
        const item = document.createElement('div');
        item.style.display = 'flex';
        item.style.alignItems = 'center';
        item.style.gap = '6px';
    
        const swatch = document.createElement('div');
        swatch.style.width = '16px';
        swatch.style.height = '16px';
        swatch.style.borderRadius = '50%';
        swatch.style.backgroundColor = color;
    
        const label = document.createElement('span');
        label.textContent = cat;
    
        item.appendChild(swatch);
        item.appendChild(label);
        legend.appendChild(item);
      });
    }


    const nodes = graph.nodes.map(n => {
      const id = normalize(n.url);
      const degree = degreeMap[id] || 1;
      const bgColor = getCategoryColor(n.categories);

      return {
        id,
        label: n.title,
        value: degree,
        font: { color: '#ffffff' },
        color: {
          background: bgColor,
          border: '#ffffff',
          highlight: {
            background: '#b1e1f4',
            border: '#ffffff'
          }
        }
      };
    });

    const data = {
      nodes: new vis.DataSet(nodes),
      edges: new vis.DataSet(
        validLinks.map(l => {
          const fromColor = '#6ab0f3'; // azul (desde)
          const toColor = '#f368e0';   // rosa (hacia)
      
          return {
            from: normalize(l.source),
            to: normalize(l.target),
            color: {
              color: fromColor,
              highlight: toColor,
              inherit: false
            }
          };
        })
      ),
    };

    const container = document.getElementById('note-graph');
    if (!container) {
      console.error('No se encontró el contenedor #note-graph');
      return;
    }

    const network = new vis.Network(container, data, {
        nodes: {
          shape: 'dot',
          scaling: {
            min: 10,
            max: 40,
          },
          font: {
            color: '#ffffff',
            size: 14,
            face: 'sans-serif',
          },
        },
        edges: {
          arrows: {
            to: { enabled: true, scaleFactor: 0.5 }, // más grandes
          },
          color: {
            color: '#888',
            highlight: '#fff',
          },
          smooth: {
            enabled: true,
            type: 'dynamic', // tipo de línea más clara
          },
          length: 250, // ← mayor distancia entre nodos conectados
        },
        interaction: { navigationButtons: false, hover: true },
        layout: { improvedLayout: true },
        physics: {
          enabled: true,
          barnesHut: {
            gravitationalConstant: -8000,
            springLength: 250, // ← espacio entre nodos conectados
            springConstant: 0.04,
            damping: 0.09,
          },
          stabilization: {
            iterations: 200,
          },
        },
      });

    network.on("doubleClick", function (params) {
        if (params.nodes.length > 0) {
          const nodeId = params.nodes[0];
          window.location.href = nodeId;
        }
      });

      let orphanNodesBackup = [];
      let orphansVisible = false;


      // Restaurar color original
// function resetNodeStyles() {
//     nodes.forEach(n => {
//       data.nodes.update({
//         id: n.id,
//         color: n.color,
//       });
//     });
//   }
  
  // Hover para resaltar nodos conectados
//   network.on("hoverNode", function (params) {
//     const nodeId = params.node;
  
//     const connectedNodeIds = network.getConnectedNodes(nodeId);
//     const allConnected = [...connectedNodeIds, nodeId];
  
//     data.nodes.forEach(n => {
//       const isConnected = allConnected.includes(n.id);
//       data.nodes.update({
//         id: n.id,
//         color: isConnected
//           ? {
//               background: '#f7d794',
//               border: '#ffffff',
//               highlight: {
//                 background: '#ffeaa7',
//                 border: '#ffffff'
//               },
//             }
//           : {
//               background: '#ccc',
//               border: '#eee',
//             },
//       });
//     });
//   });
  
//   network.on("blurNode", function () {
//     resetNodeStyles();
//   });
  


    const hideOrphansOnLoad = () => {
      orphanNodesBackup = nodes
        .filter(n => (degreeMap[n.id] || 0) === 0)
        .map(n => data.nodes.get(n.id));
      
      const orphanIds = orphanNodesBackup.map(n => n.id);
      data.nodes.remove(orphanIds);
    };

    hideOrphansOnLoad();

    document.getElementById('remove-orphans')?.addEventListener('click', () => {
        const button = document.getElementById('remove-orphans');
        if (!button) return;
      
        if (orphansVisible) {
          // Hide orphans
          orphanNodesBackup = nodes
            .filter(n => (degreeMap[n.id] || 0) === 0)
            .map(n => data.nodes.get(n.id));
      
          const orphanIds = orphanNodesBackup.map(n => n.id);
          data.nodes.remove(orphanIds);
          button.textContent = 'Mostrar huérfanos';
          orphansVisible = false;
        } else {
          // Show orphans
          const restored = orphanNodesBackup.map(n => {
            const originalNode = graph.nodes.find(gn => normalize(gn.url) === n.id);
            const bgColor = getCategoryColor(originalNode?.categories);
            return {
              ...n,
              color: {
                background: bgColor,
                border: '#ffffff',
                highlight: {
                  background: '#b1e1f4',
                  border: '#ffffff'
                }
              }
            };
          });
          data.nodes.add(restored);
          button.textContent = 'Quitar huérfanos';
          orphansVisible = true;
        }
      });
      
    // Crear un elemento tooltip
const tooltip = document.createElement('div');
tooltip.style.position = 'absolute';
tooltip.style.padding = '8px';
tooltip.style.background = 'rgba(0, 0, 0, 0.75)';
tooltip.style.color = '#fff';
tooltip.style.borderRadius = '6px';
tooltip.style.pointerEvents = 'none';
tooltip.style.fontSize = '13px';
tooltip.style.display = 'none';
tooltip.style.zIndex = 1000;
document.body.appendChild(tooltip);

// Mostrar tooltip al hacer hover sobre nodo
network.on("hoverNode", function (params) {
    const nodeId = params.node;
    const node = data.nodes.get(nodeId);
  
    const originalNode = graph.nodes.find(n => normalize(n.url) === nodeId);
    const category = (originalNode?.categories?.[0] || 'Uncategorized');
  
    // Colores del nodo
    const nodeBg = node.color?.background || '#333';
  
    tooltip.innerHTML = `
      <strong>${node.label}</strong><br>
      Categoría: ${category}<br>
      Conexiones: ${node.value}
    `;
  
    tooltip.style.background = nodeBg;
    tooltip.style.border = `2px solid ${nodeBg}`;
    tooltip.style.color = '#fff';
    tooltip.style.display = 'block';
  });
  

// Mover el tooltip con el mouse
container.addEventListener('mousemove', function (e) {
  tooltip.style.left = (e.pageX + 10) + 'px';
  tooltip.style.top = (e.pageY + 10) + 'px';
});

// Ocultar tooltip al salir del nodo
network.on("blurNode", function () {
  tooltip.style.display = 'none';
});

  });