class ParticleSystem {
    constructor() {
        this.container = document.getElementById('particles-container');
        this.particles = [];
        this.particleCount = 100;
        this.init();
    }

    init() {
        this.createParticles();
        this.animate();
    }

    createParticles() {
        for (let i = 0; i < this.particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random properties
            const size = Math.random() * 3 + 1;
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const duration = Math.random() * 20 + 20;
            const delay = Math.random() * 5;
            
            // Apply styles
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.left = `${x}px`;
            particle.style.top = `${y}px`;
            particle.style.animation = `float ${duration}s ease-in-out infinite`;
            particle.style.animationDelay = `${delay}s`;
            
            // Add to DOM and store reference
            this.container.appendChild(particle);
            this.particles.push({
                element: particle,
                x,
                y,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5
            });
        }
    }

    animate() {
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Bounce off edges
            if (particle.x < 0 || particle.x > window.innerWidth) {
                particle.speedX *= -1;
            }
            if (particle.y < 0 || particle.y > window.innerHeight) {
                particle.speedY *= -1;
            }
            
            // Apply new position
            particle.element.style.left = `${particle.x}px`;
            particle.element.style.top = `${particle.y}px`;
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialize particle system when the page loads
window.addEventListener('load', () => {
    new ParticleSystem();
}); 