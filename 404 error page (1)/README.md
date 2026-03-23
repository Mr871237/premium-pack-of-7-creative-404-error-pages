# Custom 404 Error Page

This project provides a modern, responsive, and visually engaging 404 error page using only HTML, CSS, and JavaScript.

## Features
- **Animated background**: Subtle moving stars with a smooth animated gradient.
- **Floating astronaut**: SVG astronaut gently floating and moving across the screen.
- **Modern design**: Vibrant color palette, glassmorphism effect, and professional animations.
- **Responsive**: Looks great on all devices (desktop, tablet, mobile).
- **Easy to customize**: All code is separated and well-commented.

## Usage
1. **Files**:
   - `index.html`: The main HTML file for the error page.
   - `style.css`: All styles for layout, colors, and animations.
   - `script.js`: Handles the animated background and astronaut movement.

2. **How to use**:
   - Place all three files (`index.html`, `style.css`, `script.js`) in your web server's public directory.
   - Configure your web server to use `index.html` as the error page for 404 errors.
     - **Apache**: Add `ErrorDocument 404 /index.html` to your `.htaccess` file.
     - **Nginx**: Use `error_page 404 /index.html;` in your server block.
     - **Other hosts**: Refer to your host's documentation for custom error pages.

3. **Customization**:
   - Change the astronaut SVG or use your own illustration.
   - Adjust colors and gradients in `style.css` for your brand.
   - Edit the error message in `index.html` as needed.
   - Tweak the movement or animation parameters in `script.js` for a unique effect.

## Demo
Open `index.html` in your browser to see the animated error page in action.
