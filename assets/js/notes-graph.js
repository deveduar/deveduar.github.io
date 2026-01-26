(function () {
  let network = null;
  let dataNodes = null;
  let dataEdges = null;
  let animationFrameId = null;

  window.initNotesGraph = function () {
    const container = document.getElementById('note-graph');
    if (!container) return;

    // Si ya existe una instancia, destruirla
    if (network) {
      network.destroy();
      network = null;
    }
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }

    const loader = document.getElementById('graph-loader');
    const loaderText = loader ? loader.querySelector('p') : null;
    if (loader) loader.style.display = 'flex';
    if (loaderText) loaderText.textContent = 'Cargando datos...';

    fetch('/assets/public-notes-graph.json')
      .then(res => res.json())
      .then(graph => {
        // Usar requestAnimationFrame para no bloquear inmediatamente
        animationFrameId = requestAnimationFrame(() => processGraphData(graph, container, loader, loaderText));
      })
      .catch(err => {
        console.error('Error loading graph data:', err);
        if (loader) loader.style.display = 'none';
      });
  };

  function processGraphData(graph, container, loader, loaderText) {
    if (loaderText) loaderText.textContent = 'Procesando nodos...';

    const normalize = url => url.replace(/\/$/, '');
    const nodesMap = new Map();
    const degreeMap = {};

    graph.nodes.forEach(n => nodesMap.set(normalize(n.url), n));

    graph.links.forEach(l => {
      const from = normalize(l.source);
      const to = normalize(l.target);
      if (nodesMap.has(from) && nodesMap.has(to)) {
        degreeMap[from] = (degreeMap[from] || 0) + 1;
        degreeMap[to] = (degreeMap[to] || 0) + 1;
      }
    });

    const categoriesSet = new Set();
    nodesMap.forEach((n, id) => {
      if (degreeMap[id] > 0 && Array.isArray(n.categories) && n.categories.length > 0) {
        categoriesSet.add(n.categories[0].toLowerCase());
      }
    });
    if (!categoriesSet.has('uncategorized')) categoriesSet.add('uncategorized');

    const pandaPalette = [
      'hsl(220, 25%, 60%)', 'hsl(280, 30%, 65%)', 'hsl(340, 40%, 70%)',
      'hsl(170, 35%, 65%)', 'hsl(40, 30%, 70%)', 'hsl(200, 20%, 60%)',
      'hsl(310, 25%, 60%)', 'hsl(180, 20%, 60%)', 'hsl(50, 20%, 65%)',
      'hsl(260, 25%, 68%)', 'hsl(100, 30%, 60%)', 'hsl(0, 20%, 65%)',
    ];
    const stringToColor = str => {
      let hash = 0;
      for (let i = 0; i < str.length; i++) hash = str.charCodeAt(i) + ((hash << 5) - hash);
      return pandaPalette[Math.abs(hash) % pandaPalette.length];
    };
    const categoryColors = {};
    categoriesSet.forEach(cat => categoryColors[cat] = stringToColor(cat));

    const getCategoryColor = cats => {
      if (!Array.isArray(cats) || cats.length === 0) return categoryColors['uncategorized'];
      return categoryColors[cats[0].toLowerCase()] || categoryColors['uncategorized'];
    };

    // Generar leyenda (rápido, no bloquea)
    const legend = document.getElementById('legend');
    if (legend) {
      legend.innerHTML = '';
      Object.entries(categoryColors).forEach(([cat, color]) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `<div class="legend-swatch" style="background-color: ${color}"></div><span>${cat}</span>`;
        legend.appendChild(item);
      });
    }

    const allNodesArray = [];
    nodesMap.forEach((n, id) => {
      const degree = degreeMap[id] || 0;
      allNodesArray.push({
        id, label: n.title, value: Math.max(degree, 1),
        font: { color: '#ffffff' },
        color: { background: getCategoryColor(n.categories), border: '#ffffff', highlight: { background: '#b1e1f4', border: '#ffffff' } },
        isOrphan: degree === 0
      });
    });

    const initialNodes = allNodesArray.filter(n => !n.isOrphan);
    const orphanNodes = allNodesArray.filter(n => n.isOrphan);

    const edgesArray = graph.links
      .filter(l => nodesMap.has(normalize(l.source)) && nodesMap.has(normalize(l.target)))
      .map(l => ({ from: normalize(l.source), to: normalize(l.target), color: { color: '#4c5761ff', highlight: '#f368e0', inherit: false } }));

    // Usar requestAnimationFrame para ceder el control antes de crear la red
    animationFrameId = requestAnimationFrame(() => {
      createNetwork(container, loader, loaderText, initialNodes, edgesArray, orphanNodes, nodesMap, degreeMap);
    });
  }

  function createNetwork(container, loader, loaderText, initialNodes, edgesArray, orphanNodes, nodesMap, degreeMap) {
    if (loaderText) loaderText.textContent = 'Creando gráfico...';

    dataNodes = new vis.DataSet(initialNodes);
    dataEdges = new vis.DataSet(edgesArray);

    const options = {
      nodes: { shape: 'dot', scaling: { min: 8, max: 30 }, font: { color: '#ffffff', size: 12, face: 'sans-serif' } },
      edges: { arrows: { to: { enabled: true, scaleFactor: 0.4 } }, color: { color: '#555', highlight: '#fff' }, smooth: { enabled: true, type: 'continuous' }, width: 0.5 },
      interaction: { navigationButtons: false, hover: true, hideEdgesOnDrag: true, hideEdgesOnZoom: true },
      layout: { improvedLayout: false },
      physics: {
        enabled: true,
        solver: 'forceAtlas2Based',
        forceAtlas2Based: { gravitationalConstant: -50, centralGravity: 0.005, springLength: 150, springConstant: 0.05, damping: 0.5, avoidOverlap: 0.5 },
        stabilization: { enabled: true, iterations: 300, updateInterval: 25, fit: true },
        maxVelocity: 50, minVelocity: 0.75
      }
    };

    network = new vis.Network(container, { nodes: dataNodes, edges: dataEdges }, options);

    network.on("stabilizationProgress", function (params) {
      const progress = Math.round((params.iterations / params.total) * 100);
      if (loaderText) loaderText.textContent = `Estabilizando: ${progress}%`;
    });

    network.once("stabilizationFinished", function () {
      network.setOptions({ physics: { enabled: false } });
      if (loader) loader.style.display = 'none';
    });

    // Fallback por si la estabilización se atasca
    setTimeout(() => {
      if (loader && loader.style.display !== 'none') {
        network.stopSimulation();
        network.setOptions({ physics: { enabled: false } });
        loader.style.display = 'none';
      }
    }, 10000);

    network.on("doubleClick", params => {
      if (params.nodes.length > 0) window.location.href = params.nodes[0];
    });

    // Huérfanos
    let orphansVisible = false;
    const orphanBtn = document.getElementById('remove-orphans');
    if (orphanBtn) {
      orphanBtn.onclick = () => {
        if (orphansVisible) {
          dataNodes.remove(orphanNodes.map(n => n.id));
          orphanBtn.textContent = 'Mostrar huérfanos';
        } else {
          dataNodes.add(orphanNodes);
          orphanBtn.textContent = 'Quitar huérfanos';
        }
        orphansVisible = !orphansVisible;
      };
    }

    // Tooltip
    const tooltip = document.getElementById('graph-tooltip') || document.createElement('div');
    tooltip.id = 'graph-tooltip';
    Object.assign(tooltip.style, { position: 'absolute', padding: '6px 10px', background: 'rgba(0, 0, 0, 0.8)', color: '#fff', borderRadius: '4px', pointerEvents: 'none', fontSize: '12px', display: 'none', zIndex: 1000 });
    if (!tooltip.parentElement) document.body.appendChild(tooltip);

    network.on("hoverNode", params => {
      const node = dataNodes.get(params.node);
      const originalNode = nodesMap.get(params.node);
      if (!originalNode) return;
      tooltip.innerHTML = `<strong>${node.label}</strong><br>Conexiones: ${degreeMap[params.node] || 0}`;
      tooltip.style.background = node.color?.background || '#333';
      tooltip.style.display = 'block';
    });
    container.addEventListener('mousemove', e => { tooltip.style.left = (e.pageX + 15) + 'px'; tooltip.style.top = (e.pageY + 15) + 'px'; });
    network.on("blurNode", () => tooltip.style.display = 'none');
  }

  // Auto-init
  if (document.readyState === 'complete') {
    window.initNotesGraph();
  } else {
    window.addEventListener('load', window.initNotesGraph);
  }
})();