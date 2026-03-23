// Animation du fond étoilé
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars(count) {
  stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.2 + 0.2,
      speed: Math.random() * 0.2 + 0.05,
      alpha: Math.random() * 0.5 + 0.5
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const star of stars) {
    ctx.save();
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.shadowColor = '#48bfe3';
    ctx.shadowBlur = 8;
    ctx.fill();
    ctx.restore();
    // Animation
    star.y += star.speed;
    if (star.y > canvas.height) {
      star.y = 0;
      star.x = Math.random() * canvas.width;
    }
  }
}

function animate() {
  drawStars();
  requestAnimationFrame(animate);
}

function initStars() {
  resizeCanvas();
  createStars(Math.floor(window.innerWidth / 2));
}

window.addEventListener('resize', () => {
  initStars();
});

initStars();
animate();

// Spaceman movement (subtle and professional)
const astronaut = document.querySelector('.astronaut');
let t = 0;
let direction = 1;

function moveAstronaut() {
  // Subtle, slow elliptical movement
  t += 0.0035 * direction; // slower
  if (t > 1 || t < 0) direction *= -1;
  // Smaller ellipse
  const x = 0.7 + 0.07 * Math.cos(2 * Math.PI * t);
  const y = 0.7 + 0.03 * Math.sin(2 * Math.PI * t);
  astronaut.style.right = (x * 100) + 'vw';
  astronaut.style.bottom = (y * 100) + 'vh';
  requestAnimationFrame(moveAstronaut);
}
moveAstronaut();

// Home button
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', () => {
  window.location.href = '/';
}); 