// Particle Animation System
function createParticles() {
    const body = document.querySelector('body');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      
      // Random position
      const posX = Math.floor(Math.random() * window.innerWidth);
      const posY = Math.floor(Math.random() * window.innerHeight);
      
      // Random size
      const size = Math.floor(Math.random() * 6) + 2;
      
      // Random opacity
      const opacity = Math.random() * 0.5 + 0.1;
      
      // Set styles
      particle.style.left = `${posX}px`;
      particle.style.top = `${posY}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.opacity = opacity;
      
      // Append to body
      body.appendChild(particle);
      
      // Animate particles
      animateParticle(particle);
    }
  }
  
  function animateParticle(particle) {
    const animationDuration = Math.random() * 10 + 10; // 10-20s
    const xMovement = Math.random() * 50 - 25; // -25px to 25px
    const yMovement = Math.random() * 50 - 25; // -25px to 25px
    
    particle.style.transition = `transform ${animationDuration}s linear`;
    particle.style.transform = `translate(${xMovement}px, ${yMovement}px)`;
    
    // Reset animation after it's complete
    setTimeout(() => {
      // Remove transition to instantly reset position
      particle.style.transition = 'none';
      particle.style.transform = 'translate(0px, 0px)';
      
      // Trigger reflow
      void particle.offsetWidth;
      
      // Start new animation
      setTimeout(() => {
        animateParticle(particle);
      }, 50);
    }, animationDuration * 1000);
  }