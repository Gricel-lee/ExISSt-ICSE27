// Star-field animation for hero banner
(function () {
  const canvases = document.querySelectorAll('.hero-canvas');
  canvases.forEach(function (canvas) {
    const ctx = canvas.getContext('2d');
    let stars = [];
    let lines = [];
    let W, H;

    function resize() {
      W = canvas.width  = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      init();
    }

    function rand(a, b) { return Math.random() * (b - a) + a; }

    function init() {
      stars = [];
      lines = [];
      const n = Math.floor(W * H / 7000);
      for (let i = 0; i < n; i++) {
        stars.push({ x: rand(0, W), y: rand(0, H), r: rand(0.5, 1.6) });
      }
      // Build random connecting lines between nearby stars
      for (let i = 0; i < stars.length; i++) {
        for (let j = i + 1; j < stars.length; j++) {
          const dx = stars[i].x - stars[j].x;
          const dy = stars[i].y - stars[j].y;
          const d  = Math.sqrt(dx * dx + dy * dy);
          if (d < 120 && Math.random() < 0.3) {
            lines.push([i, j, d]);
          }
        }
      }
      draw();
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      // Lines
      lines.forEach(function (l) {
        const a = stars[l[0]], b = stars[l[1]];
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = 'rgba(255,255,255,' + (0.12 * (1 - l[2] / 120)) + ')';
        ctx.lineWidth = 0.7;
        ctx.stroke();
      });
      // Stars
      stars.forEach(function (s) {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.75)';
        ctx.fill();
      });
    }

    window.addEventListener('resize', function () {
      clearTimeout(canvas._rt);
      canvas._rt = setTimeout(resize, 150);
    });

    resize();
  });
})();
