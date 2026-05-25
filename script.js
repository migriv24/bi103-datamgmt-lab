import 'chartjs-adapter-date-fns';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATA
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const weightData = [
  { x: '2024-06-29', y: 260.0 }, { x: '2024-07-01', y: 255.6 },
  { x: '2024-07-03', y: 252.9 }, { x: '2024-07-05', y: 250.3 },
  { x: '2024-07-23', y: 248.0 }, { x: '2024-07-30', y: 246.9 },
  { x: '2024-08-03', y: 243.6 }, { x: '2024-08-05', y: 246.1 },
  { x: '2024-08-10', y: 245.4 }, { x: '2024-09-04', y: 240.3 },
  { x: '2024-09-16', y: 239.6 }, { x: '2024-09-18', y: 238.4 },
  { x: '2024-10-19', y: 232.8 }, { x: '2024-11-03', y: 234.0 },
  { x: '2024-11-15', y: 232.1 }, { x: '2024-11-18', y: 233.0 },
  { x: '2024-12-11', y: 231.4 },
  // --- 3-month gap ---
  { x: '2025-03-10', y: 230.0 }, { x: '2025-03-31', y: 222.0 },
  { x: '2025-04-02', y: 224.1 }, { x: '2025-04-03', y: 221.6 },
  { x: '2025-04-10', y: 221.4 }, { x: '2025-04-11', y: 218.9 },
  { x: '2025-04-16', y: 219.2 }, { x: '2025-04-18', y: 225.6 },
  { x: '2025-04-20', y: 230.6 }, // spike - likely water retention
  { x: '2025-05-01', y: 221.3 }, { x: '2025-05-05', y: 218.8 },
  { x: '2025-05-24', y: 217.0 }, { x: '2025-05-25', y: 217.0 },
  { x: '2025-05-26', y: 216.3 }, { x: '2025-05-27', y: 217.0 },
  { x: '2025-05-28', y: 216.4 }, { x: '2025-05-29', y: 216.0 },
  { x: '2025-06-01', y: 213.8 }, { x: '2025-06-02', y: 213.8 },
  { x: '2025-06-03', y: 213.8 }, { x: '2025-06-08', y: 210.8 },
  { x: '2025-06-18', y: 213.7 }, { x: '2025-06-24', y: 215.2 },
  { x: '2025-06-30', y: 208.5 }, { x: '2025-07-01', y: 210.7 },
  { x: '2025-07-02', y: 208.5 }, { x: '2025-07-03', y: 208.7 },
  { x: '2025-07-06', y: 212.7 }, { x: '2025-07-07', y: 210.9 },
  { x: '2025-07-11', y: 215.0 }, { x: '2025-07-13', y: 211.8 },
  { x: '2025-07-15', y: 208.0 }, { x: '2025-07-18', y: 209.7 },
  { x: '2025-07-26', y: 208.0 }, { x: '2025-07-27', y: 208.7 },
  { x: '2025-08-05', y: 211.4 }, { x: '2025-08-13', y: 211.4 },
  { x: '2025-08-15', y: 211.4 }, { x: '2025-08-22', y: 211.4 },
  { x: '2025-09-02', y: 212.8 }, { x: '2025-09-15', y: 216.0 },
  { x: '2025-09-25', y: 208.2 }, { x: '2025-09-27', y: 207.9 },
  { x: '2025-10-12', y: 209.6 }, { x: '2025-10-29', y: 203.4 }, // all-time low
  { x: '2025-12-12', y: 203.0 }, { x: '2025-12-13', y: 205.0 },
  { x: '2025-12-14', y: 203.8 }, { x: '2025-12-19', y: 206.4 },
  { x: '2025-12-28', y: 208.2 }, { x: '2026-01-02', y: 209.0 },
  { x: '2026-01-03', y: 208.8 }, { x: '2026-01-10', y: 207.6 },
  { x: '2026-01-14', y: 204.5 }, { x: '2026-01-18', y: 207.2 },
  { x: '2026-01-25', y: 205.6 }, { x: '2026-02-12', y: 209.4 },
  { x: '2026-02-15', y: 210.8 }, { x: '2026-03-21', y: 212.8 },
  { x: '2026-04-03', y: 215.6 }, { x: '2026-04-22', y: 220.0 },
  { x: '2026-04-29', y: 219.6 }, { x: '2026-05-06', y: 220.4 },
  { x: '2026-05-08', y: 218.2 }, { x: '2026-05-24', y: 218.0 },
];

const weeklyExercise = [
  { week: 'Mar 29–Apr 4',  minutes: 131, label: 'Mar 29–Apr 4' },
  { week: 'Apr 5–11',      minutes: 283, label: 'Apr 5–11' },
  { week: 'Apr 12–18',     minutes: 214, label: 'Apr 12–18' },
  { week: 'Apr 19–25',     minutes: 245, label: 'Apr 19–25' },
  { week: 'Apr 26–May 2',  minutes: 129, label: 'Apr 26–May 2' },
  { week: 'May 3–9',       minutes: 209, label: 'May 3–9' },
  { week: 'May 10–16',     minutes:  85, label: 'May 10–16' },
  { week: 'May 17–23',     minutes: 159, label: 'May 17–23' },
];


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   WEIGHT CHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const gapPlugin = {
  id: 'gapZone',
  beforeDraw(chart) {
    const { ctx, chartArea: { top, bottom }, scales: { x } } = chart;
    const x1 = x.getPixelForValue(new Date('2024-12-11').getTime());
    const x2 = x.getPixelForValue(new Date('2025-03-10').getTime());
    ctx.save();
    ctx.fillStyle = 'rgba(148,163,184,0.12)';
    ctx.fillRect(x1, top, x2 - x1, bottom - top);
    ctx.fillStyle = 'rgba(100,116,139,0.45)';
    ctx.font = '600 11px Nunito, system-ui';
    ctx.textAlign = 'center';
    ctx.fillText('3-month gap', (x1 + x2) / 2, top + 16);
    ctx.restore();
  },
};

const lowPointPlugin = {
  id: 'lowPoint',
  afterDraw(chart) {
    const { ctx, scales: { x, y } } = chart;
    const px = x.getPixelForValue(new Date('2025-10-29').getTime());
    const py = y.getPixelForValue(203.4);
    ctx.save();
    ctx.beginPath();
    ctx.arc(px, py, 7, 0, Math.PI * 2);
    ctx.fillStyle = '#0d9488';
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = '#134e4a';
    ctx.font = 'bold 11px Nunito, system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('all-time low: 203.4 lbs', px + 11, py + 4);
    ctx.restore();
  },
};

new Chart(document.getElementById('weightChart'), {
  type: 'line',
  plugins: [gapPlugin, lowPointPlugin],
  data: {
    datasets: [{
      label: 'Weight (lbs)',
      data: weightData,
      borderColor: '#0d9488',
      borderWidth: 2,
      tension: 0.35,
      fill: {
        target: 'origin',
        above: 'rgba(13,148,136,0.07)',
      },
      pointRadius: ctx => {
        const val = ctx.raw?.y;
        if (val === 203.4) return 0; // handled by plugin
        return 2.5;
      },
      pointBackgroundColor: '#0d9488',
      pointBorderColor: '#fff',
      pointBorderWidth: 1.5,
      pointHoverRadius: 5,
    }],
  },
  options: {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          title: items => {
            const d = new Date(items[0].parsed.x);
            return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
          },
          label: item => ` ${item.parsed.y} lbs`,
        },
        backgroundColor: 'rgba(19,78,74,0.9)',
        titleColor: '#99f6e4',
        bodyColor: '#fff',
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        type: 'time',
        time: { unit: 'month', displayFormats: { month: 'MMM yyyy' } },
        grid: { color: 'rgba(13,148,136,0.07)' },
        ticks: { color: '#4d8c88', font: { family: 'Nunito', size: 11 }, maxRotation: 30 },
      },
      y: {
        reverse: false,
        min: 195,
        max: 265,
        grid: { color: 'rgba(13,148,136,0.07)' },
        ticks: {
          color: '#4d8c88',
          font: { family: 'Nunito', size: 11 },
          callback: v => `${v} lbs`,
        },
      },
    },
  },
});


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EXERCISE CHART
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
new Chart(document.getElementById('exerciseChart'), {
  type: 'bar',
  data: {
    labels: weeklyExercise.map(w => w.label),
    datasets: [{
      label: 'Exercise minutes',
      data: weeklyExercise.map(w => w.minutes),
      backgroundColor: ctx => {
        const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, 'rgba(13,148,136,0.85)');
        gradient.addColorStop(1, 'rgba(94,234,212,0.45)');
        return gradient;
      },
      borderColor: '#0d9488',
      borderWidth: 1,
      borderRadius: 6,
      borderSkipped: false,
    }],
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: item => ` ${item.parsed.y} min (${Math.round(item.parsed.y / 60 * 10) / 10} hrs)`,
        },
        backgroundColor: 'rgba(19,78,74,0.9)',
        titleColor: '#99f6e4',
        bodyColor: '#fff',
        padding: 10,
        cornerRadius: 8,
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#4d8c88', font: { family: 'Nunito', size: 11 } },
      },
      y: {
        grid: { color: 'rgba(13,148,136,0.07)' },
        ticks: {
          color: '#4d8c88',
          font: { family: 'Nunito', size: 11 },
          callback: v => `${v} min`,
        },
      },
    },
  },
});


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BUBBLE FIELD
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
(function initCellField() {
  const field = document.createElement('div');
  field.id = 'cell-field';
  document.body.prepend(field);

  const cells = [
    { s: 480, x:  5, y: 10, d: 13, del:  0, c: '13,148,136' },
    { s: 300, x: 72, y: 55, d:  9, del: -4, c: '94,234,212' },
    { s: 370, x: 42, y: 78, d: 16, del: -7, c: '153,246,228' },
    { s: 195, x: 88, y:  8, d:  8, del: -2, c: '13,148,136' },
    { s: 540, x: 26, y: 42, d: 18, del: -5, c: '204,251,241' },
    { s: 240, x: 62, y: 22, d: 11, del: -9, c: '94,234,212' },
    { s: 155, x: 14, y: 87, d:  7, del: -1, c: '13,148,136' },
  ];

  cells.forEach(c => {
    const el = document.createElement('div');
    el.className = 'bg-cell';
    el.style.cssText = `left:${c.x}%;top:${c.y}%;width:${c.s}px;height:${c.s}px;--d:${c.d}s;--del:${c.del}s;`;
    field.appendChild(el);
  });

  let exciteTimer = null;
  window.addEventListener('keydown', e => {
    if (e.code !== 'Space') return;
    if (['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT'].includes(document.activeElement.tagName)) return;
    e.preventDefault();
    field.classList.add('excited');
    clearTimeout(exciteTimer);
    exciteTimer = setTimeout(() => field.classList.remove('excited'), 3000);
  });
})();


/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ACTIVE NAV ON SCROLL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('#main-nav a');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`#main-nav a[href="#${entry.target.id}"]`);
      if (active) { active.classList.add('active'); active.scrollIntoView({ inline: 'nearest', block: 'nearest' }); }
    }
  });
}, { rootMargin: '-30% 0px -60% 0px' });

sections.forEach(s => observer.observe(s));
