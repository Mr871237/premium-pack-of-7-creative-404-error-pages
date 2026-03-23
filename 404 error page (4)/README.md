# Interactive 404 Error Page

A modern and interactive 404 error page with smooth animations and attractive visual effects.

## Features

- Modern design with glassmorphism effect
- Smooth and interactive animations
- Particle effects in the background
- Animated floating ghosts
- Parallax effect on mouse movement
- Responsive design
- Ripple effect on the button
- Compatible with all modern browsers

## File Structure

```
/
├── 404.html          # Main page
├── css/
│   └── style.css     # Styles and animations
└── js/
    └── script.js     # Logic and interactive effects
```

## How to Customize

### 1. Edit the Text

In the `404.html` file, you can modify:
- The page title: `<title>404 - Page Not Found</title>`
- The error message: `<h1 class="error-message">Oops! Page Not Found</h1>`
- The description: `<p class="error-description">...</p>`
- The button text: `<a href="/" class="home-button">Back to Home</a>`

### 2. Customize Colors

In the `css/style.css` file, you can change:

```css
/* Background color */
body {
    background: linear-gradient(135deg, #1a1a1a, #2c3e50);
}

/* 404 text color */
.error-code {
    background: linear-gradient(45deg, #e74c3c, #c0392b);
}

/* Button color */
.home-button {
    background: linear-gradient(45deg, #3498db, #2980b9);
}
```

### 3. Customize Animations

In the `js/script.js` file, you can modify:

```javascript
// Number of ghosts
const ghostCount = 8;

// Ghost colors
const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'];

// Number of particles
for (let i = 0; i < 50; i++) {
    // ...
}
```

### 4. Customize Effects

- Parallax effect: Change the division value in `addParallaxEffect()`
- Animation speed: Change the values in `@keyframes`
- Element sizes: Change the `width`, `height`, `font-size`, etc.

## Installation

1. Copy all files into your project
2. Make sure the folder structure is correct
3. Edit the "Back to Home" button link in `404.html` to point to your homepage
4. Customize colors, texts, and animations as needed

## Compatibility

- Chrome (latest version)
- Firefox (latest version)
- Safari (latest version)
- Edge (latest version)
- Mobile browsers

## Advanced Customization

### Add a New Animation

In `css/style.css`:
```css
@keyframes newAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
}
```

### Add a New Effect

In `js/script.js`:
```javascript
function newEffect() {
    // Your code here
}

// Add to initialization
window.addEventListener('load', () => {
    // ... other effects
    newEffect();
});
``` 