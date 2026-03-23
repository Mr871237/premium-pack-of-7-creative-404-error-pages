/**
 * Crée des éléments fantômes flottants avec des animations améliorées
 * Les fantômes sont des cercles semi-transparents qui flottent dans l'arrière-plan
 */
function createGhosts() {
    // Définition des couleurs possibles pour les fantômes
    const colors = ['#3498db', '#e74c3c', '#2ecc71', '#f1c40f'];
    const ghostCount = 8; // Nombre de fantômes à créer
    
    for (let i = 0; i < ghostCount; i++) {
        const ghost = document.createElement('div');
        ghost.className = 'ghost';
        // Position aléatoire sur l'écran
        ghost.style.left = Math.random() * window.innerWidth + 'px';
        ghost.style.top = Math.random() * window.innerHeight + 'px';
        // Couleur aléatoire parmi les couleurs définies
        ghost.style.background = colors[Math.floor(Math.random() * colors.length)];
        // Délai d'animation aléatoire pour un effet plus naturel
        ghost.style.animationDelay = Math.random() * 2 + 's';
        // Taille aléatoire entre 50% et 100%
        ghost.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
        document.body.appendChild(ghost);
    }
}

/**
 * Crée un effet de particules en arrière-plan
 * Les particules sont de petits points blancs qui flottent doucement
 */
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    // Création de 50 particules
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        // Taille aléatoire entre 1px et 5px
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 255, 255, 0.5)';
        particle.style.borderRadius = '50%';
        // Position aléatoire sur l'écran
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        // Animation de flottement avec durée aléatoire
        particle.style.animation = `float ${Math.random() * 3 + 2}s infinite ease-in-out`;
        particlesContainer.appendChild(particle);
    }
}

/**
 * Ajoute des effets interactifs au bouton de retour
 * Inclut un effet de survol et un effet de ripple au clic
 */
function addButtonEffects() {
    const homeButton = document.querySelector('.home-button');
    
    // Effet de survol : le bouton s'agrandit légèrement et se soulève
    homeButton.addEventListener('mouseover', () => {
        homeButton.style.transform = 'scale(1.05) translateY(-3px)';
    });
    
    // Retour à l'état normal quand la souris quitte le bouton
    homeButton.addEventListener('mouseout', () => {
        homeButton.style.transform = 'scale(1) translateY(0)';
    });
    
    // Effet de ripple au clic
    homeButton.addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        homeButton.appendChild(ripple);
        
        // Calcul de la position et de la taille du ripple
        const rect = homeButton.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = e.clientX - rect.left - size/2 + 'px';
        ripple.style.top = e.clientY - rect.top - size/2 + 'px';
        
        ripple.classList.add('active');
        
        // Suppression du ripple après l'animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
}

/**
 * Ajoute un effet de parallaxe au conteneur d'erreur
 * Le conteneur se déplace légèrement en fonction de la position de la souris
 */
function addParallaxEffect() {
    const container = document.querySelector('.error-container');
    
    document.addEventListener('mousemove', (e) => {
        // Calcul du déplacement en fonction de la position de la souris
        const x = (window.innerWidth / 2 - e.clientX) / 30;
        const y = (window.innerHeight / 2 - e.clientY) / 30;
        
        // Application du déplacement
        container.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}

// Initialisation de tous les effets au chargement de la page
window.addEventListener('load', () => {
    createGhosts();
    createParticles();
    addButtonEffects();
    addParallaxEffect();
}); 