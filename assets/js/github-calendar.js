document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('github-calendar').getAttribute('data-username');
    if (!username) return;
  
    // Implementación de caché para reducir llamadas a la API
    const cacheKey = `github-contributions-${username}`;
    const cacheExpiration = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
    
    // Intentar obtener datos del caché
    const cachedData = localStorage.getItem(cacheKey);
    let cachedObject = null;
    
    if (cachedData) {
      try {
        cachedObject = JSON.parse(cachedData);
        const cacheAge = Date.now() - cachedObject.timestamp;
        
        // Si el caché es válido (menos de 24 horas), usar los datos en caché
        if (cacheAge < cacheExpiration) {
          console.log('Using cached GitHub contributions data');
          renderCalendar(cachedObject.data);
          return;
        }
      } catch (e) {
        console.error('Error parsing cached data:', e);
      }
    }
    
    // Si no hay caché válido, hacer la petición a la API
    console.log('Fetching fresh GitHub contributions data');
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then(response => response.json())
      .then(data => {
        // Modificar para mostrar solo los últimos 6 meses
        const halfYearData = {
          ...data,
          contributions: data.contributions.slice(-182) // Aproximadamente 6 meses (26 semanas * 7 días)
        };
        
        // Guardar en caché con timestamp
        const cacheObject = {
          timestamp: Date.now(),
          data: halfYearData
        };
        localStorage.setItem(cacheKey, JSON.stringify(cacheObject));
        
        renderCalendar(halfYearData);
      })
      .catch(error => {
        console.error('Error fetching GitHub contributions:', error);
        document.getElementById('github-calendar').innerHTML = 
          '<p>Could not load GitHub contributions. Please check back later.</p>';
          
        // Si hay un error pero tenemos datos en caché (incluso expirados), usarlos como fallback
        if (cachedObject && cachedObject.data) {
          console.log('Using expired cache as fallback');
          renderCalendar(cachedObject.data);
        }
      });
  
    function renderCalendar(data) {
      const calendar = document.getElementById('github-calendar');
      calendar.innerHTML = '';
      
      // Calculate total contributions
      const totalContributions = data.contributions.reduce((total, day) => total + day.count, 0);
      
      // Create header - Modificado para mostrar "últimos 6 meses" en lugar de "último año"
      const header = document.createElement('div');
      header.className = 'gh-calendar-header';
      header.innerHTML = `<span class="total-contributions">${totalContributions} contributions in the last 6 months</span>`;
      calendar.appendChild(header);
      
      // Create grid container
      const grid = document.createElement('div');
      grid.className = 'gh-calendar-grid';
      
      // Add months
      const monthLabels = document.createElement('div');
      monthLabels.className = 'gh-calendar-months';
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      
      // Calculate month positions
      const firstDate = new Date(data.contributions[0].date);
      const lastDate = new Date(data.contributions[data.contributions.length - 1].date);
      const totalDays = Math.floor((lastDate - firstDate) / (24 * 60 * 60 * 1000));
      const cellWidth = 100 / (totalDays / 7);
      
      let currentMonth = -1;
      for (let i = 0; i < data.contributions.length; i += 7) {
        const date = new Date(data.contributions[i].date);
        const month = date.getMonth();
        if (month !== currentMonth) {
          currentMonth = month;
          const monthLabel = document.createElement('span');
          monthLabel.textContent = months[month];
          monthLabel.style.left = `${(i / 7) * cellWidth}%`;
          monthLabels.appendChild(monthLabel);
        }
      }
      
      grid.appendChild(monthLabels);
      
      // Create days of week labels
      const weekdays = document.createElement('div');
      weekdays.className = 'gh-calendar-weekdays';
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      days.forEach((day, i) => {
        if (i % 2 === 0) { // Only show every other day to save space
          const dayLabel = document.createElement('span');
          dayLabel.textContent = day;
          weekdays.appendChild(dayLabel);
        } else {
          weekdays.appendChild(document.createElement('span'));
        }
      });
      
      // Create contribution cells
      const cells = document.createElement('div');
      cells.className = 'gh-calendar-cells';
      
      data.contributions.forEach(day => {
        const cell = document.createElement('div');
        cell.className = 'gh-calendar-cell';
        
        // Determine level based on contribution count
        let level = 0;
        if (day.count > 0) {
          if (day.count >= 16) {
            level = 5;
          } else if (day.count >= 8) {
            level = 4;
          } else if (day.count >= 4) {
            level = 3;
          } else if (day.count >= 2) {
            level = 2;
          } else {
            level = 1;
          }
        }
        
        cell.classList.add(`level-${level}`);
        
        // Add tooltip
        const date = new Date(day.date);
        const formattedDate = date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });
        cell.setAttribute('title', `${day.count} contributions on ${formattedDate}`);
        
        cells.appendChild(cell);
      });
      
      grid.appendChild(weekdays);
      grid.appendChild(cells);
      calendar.appendChild(grid);
    }
  });