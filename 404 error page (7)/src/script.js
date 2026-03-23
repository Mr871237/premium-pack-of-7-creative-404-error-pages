// Create animated circles for the 404 animation
window.onload = function() {
  const animation = document.getElementById('animation');
  for (let i = 0; i < 3; i++) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.zIndex = 0;
    animation.insertBefore(circle, animation.firstChild); // Place circles behind SVG
  }
}; 