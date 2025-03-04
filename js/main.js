// Typing Animation for Title
function initTypingAnimation() {
    const typingText = document.querySelector('.typing-text');
    
    if (!typingText) return;
    
    const text = typingText.textContent;
    typingText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, Math.random() * 50 + 50);
      }
    };
    
    setTimeout(typeWriter, 1000);
  }
  
  // Profile Image Animation
  function initProfileImageAnimation() {
    const profileImg = document.querySelector('.profile-img');
    
    if (!profileImg) return;
    
    profileImg.addEventListener('mouseover', () => {
      profileImg.style.transform = 'scale(1.1)';
    });
    
    profileImg.addEventListener('mouseout', () => {
      profileImg.style.transform = 'scale(1)';
    });
  }
  
  // Contact Form Validation (if you add a form later)
  function initContactFormValidation() {
    const contactForm = document.getElementById('contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic validation
      const nameInput = contactForm.querySelector('input[name="name"]');
      const emailInput = contactForm.querySelector('input[name="email"]');
      const messageInput = contactForm.querySelector('textarea[name="message"]');
      
      if (!nameInput.value || !emailInput.value || !messageInput.value) {
        alert('Please fill out all fields');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert('Please enter a valid email address');
        return;
      }
      
      // You would typically send the form data to a server here
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Initialize everything when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    // Particle animation
    createParticles();
    
    // Section animations
    initScrollAnimation();
    
    // Navbar animation
    initNavbarAnimation();
    
    // Progress bar animation
    animateProgressBars();
    
    // Dark mode toggle
    initDarkModeToggle();
    
    // Typing animation
    initTypingAnimation();
    
    // Profile image animation
    initProfileImageAnimation();
    
    // Contact form validation (if needed)
    initContactFormValidation();
    
    // Recreate particles on window resize
    window.addEventListener('resize', () => {
      // Remove existing particles
      document.querySelectorAll('.particle').forEach(p => p.remove());
      // Create new ones
      createParticles();
    });
  });