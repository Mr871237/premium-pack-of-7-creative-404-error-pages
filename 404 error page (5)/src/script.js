// Apparition douce des icônes au scroll
// (ici, on fait apparaître les icônes au chargement)
document.addEventListener('DOMContentLoaded', () => {
  const icons = document.querySelectorAll('.icon-appear');
  icons.forEach((icon, i) => {
    setTimeout(() => {
      icon.classList.add('visible');
    }, 400 + i * 200);
  });
});

// Effet "torchlight" sur clic
document.addEventListener('click', function(e) {
  const torch = document.createElement('div');
  torch.style.position = 'fixed';
  torch.style.left = `${e.clientX - 100}px`;
  torch.style.top = `${e.clientY - 100}px`;
  torch.style.width = '200px';
  torch.style.height = '200px';
  torch.style.pointerEvents = 'none';
  torch.style.borderRadius = '50%';
  torch.style.background = 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.0) 80%)';
  torch.style.zIndex = 9999;
  document.body.appendChild(torch);
  setTimeout(() => torch.remove(), 400);
});

// (Optionnel) Animation de fond étoilé
function createStars() {
  const stars = document.getElementById('stars');
  for (let i = 0; i < 60; i++) {
    const star = document.createElement('div');
    star.style.position = 'absolute';
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 2 + 1}px`;
    star.style.height = star.style.width;
    star.style.background = 'white';
    star.style.opacity = Math.random() * 0.7 + 0.3;
    star.style.borderRadius = '50%';
    star.style.boxShadow = `0 0 8px 2px #fff`;
    stars.appendChild(star);
  }
}
createStars(); 