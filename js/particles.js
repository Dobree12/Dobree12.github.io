 // Particle animation functions
 function createParticles() {
  // Create a container for particles to improve performance
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  particlesContainer.style.position = 'fixed';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '-1';
  document.body.appendChild(particlesContainer);
  
  const particleCount = 1000;
  
  for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random initial position
      const posX = Math.floor(Math.random() * window.innerWidth);
      const posY = Math.floor(Math.random() * window.innerHeight);
      
      // Random size between 2px and 7px
      const size = Math.floor(Math.random() * 6) + 2;
      
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.1;
      
      // Set initial styles
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity;
      
      // Add to container instead of body directly
      particlesContainer.appendChild(particle);
      
      // Start animation with slight delay to prevent all particles moving at once
      setTimeout(() => {
          animateParticle(particle);
      }, i * 10);
  }
}

function animateParticle(particle) {
  // Use animation instead of transition for smoother continuous movement
  const animationDuration = Math.random() * 15 + 15; // 15-30s for smoother movement
  
  // Randomize movement values
  const speedX = Math.random() * 0.5 + 0.5; // px per second
  const speedY = Math.random() * 0.5 + 0.5; // px per second
  const directionX = Math.random() > 0.5 ? 1 : -1;
  const directionY = Math.random() > 0.5 ? 1 : -1;
  
  // Current position
  let posX = parseFloat(particle.style.left);
  let posY = parseFloat(particle.style.top);
  
  // Animation function
  function moveParticle() {
      // Update position
      posX += speedX * directionX;
      posY += speedY * directionY;
      
    
    
      // Apply new position
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      
      // Continue animation
      requestAnimationFrame(moveParticle);
  }
  
  // Start the animation
  moveParticle();
}
