// Hover and keyboard readouts for the inline SVG charts in blog posts.
(function () {
  'use strict';

  function tipFor(fig) {
    let tip = fig.querySelector('.viz-tip');
    if (!tip) {
      tip = document.createElement('div');
      tip.className = 'viz-tip';
      tip.setAttribute('role', 'status');
      fig.appendChild(tip);
    }
    return tip;
  }

  function place(tip, fig, px, py) {
    const fr = fig.getBoundingClientRect();
    tip.style.display = 'block';
    const w = tip.offsetWidth;
    let left = px - fr.left + 14;
    if (left + w > fr.width) left = px - fr.left - w - 14;
    tip.style.left = Math.max(0, left) + 'px';
    tip.style.top = Math.max(0, py - fr.top - tip.offsetHeight - 10) + 'px';
  }

  function fmtHz(f) {
    return f >= 1000 ? (f / 1000).toFixed(f % 1000 ? 1 : 0) + ' kHz' : f + ' Hz';
  }

  function fmtDb(d) {
    return (d > 0 ? '+' : d < 0 ? '−' : '') + Math.abs(d).toFixed(1) + ' dB';
  }

  function fmtUnit(d, unit) {
    return (d < 0 ? '−' : '') + Math.abs(d).toFixed(1) + ' ' + unit;
  }

  function lineChart(svg) {
    const data = JSON.parse(svg.dataset.viz);
    const fmtVal = data.unit ? (d) => fmtUnit(d, data.unit) : fmtDb;
    const fig = svg.closest('.viz-figure');
    const tip = tipFor(fig);
    const cross = svg.querySelector('.viz-cross');
    const dots = svg.querySelectorAll('.viz-dot');
    const hit = svg.querySelector('.viz-hit');
    let idx = Math.floor(data.x.length / 2);

    function show(i) {
      idx = Math.max(0, Math.min(data.x.length - 1, i));
      const x = data.x[idx];
      cross.setAttribute('x1', x);
      cross.setAttribute('x2', x);
      cross.setAttribute('visibility', 'visible');
      dots.forEach((d, s) => {
        d.setAttribute('cx', x);
        d.setAttribute('cy', data.y[s][idx]);
        d.setAttribute('visibility', 'visible');
      });
      tip.replaceChildren();
      const head = document.createElement('div');
      head.className = 'viz-tip-head';
      head.textContent = data.labels ? data.labels[idx] : fmtHz(data.f[idx]);
      tip.appendChild(head);
      data.series.forEach((s) => {
        const row = document.createElement('div');
        const key = document.createElement('span');
        key.className = 'viz-tip-key';
        key.style.background = 'var(' + s.color + ')';
        const val = document.createElement('b');
        val.textContent = fmtVal(s.values[idx]);
        row.append(key, val, document.createTextNode(' ' + s.name));
        tip.appendChild(row);
      });
      const r = svg.getBoundingClientRect();
      const scale = r.width / svg.viewBox.baseVal.width;
      const top = Math.min.apply(null, data.y.map((ys) => ys[idx]));
      place(tip, fig, r.left + x * scale, r.top + top * scale);
    }

    function hide() {
      cross.setAttribute('visibility', 'hidden');
      dots.forEach((d) => d.setAttribute('visibility', 'hidden'));
      tip.style.display = 'none';
    }

    const fromPointer = (e) => {
      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const p = pt.matrixTransform(svg.getScreenCTM().inverse());
      let best = 0;
      data.x.forEach((x, i) => { if (Math.abs(x - p.x) < Math.abs(data.x[best] - p.x)) best = i; });
      show(best);
    };
    hit.addEventListener('pointermove', fromPointer);
    hit.addEventListener('pointerdown', fromPointer);
    hit.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') hide(); });
    hiders.push(hide);
    svg.addEventListener('focus', () => show(idx));
    svg.addEventListener('blur', hide);
    svg.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') { show(idx + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { show(idx - 1); e.preventDefault(); }
    });
  }

  function segments(svg) {
    const fig = svg.closest('.viz-figure');
    const tip = tipFor(fig);
    svg.querySelectorAll('[data-tip]').forEach((el) => {
      const show = () => {
        tip.replaceChildren(document.createTextNode(el.dataset.tip));
        const r = el.getBoundingClientRect();
        place(tip, fig, r.left + r.width / 2, r.top);
      };
      const hide = () => { tip.style.display = 'none'; };
      el.addEventListener('pointerenter', show);
      el.addEventListener('pointerdown', show);
      el.addEventListener('pointerleave', (e) => { if (e.pointerType !== 'touch') hide(); });
      hiders.push(hide);
      el.addEventListener('focus', show);
      el.addEventListener('blur', hide);
    });
  }

  const hiders = [];
  document.addEventListener('pointerdown', (e) => {
    if (!e.target.closest || !e.target.closest('.viz')) hiders.forEach((h) => h());
  });

  document.querySelectorAll('.viz-figure svg').forEach((svg) => {
    if (svg.hasAttribute('data-viz-line')) lineChart(svg);
    else segments(svg);
  });
})();
