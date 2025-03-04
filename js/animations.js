// Scroll Animation for Sections
function initScrollAnimation() {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, options);
    
    sections.forEach(section => {
      observer.observe(section);
    });
  }
  
  // Navigation Bar Animation on Scroll
  function initNavbarAnimation() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }
  
  // Progress Bar Animation
  function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar');
    
    progressBars.forEach(bar => {
      const targetWidth = bar.getAttribute('data-width');
      setTimeout(() => {
        bar.style.width = `${targetWidth}%`;
      }, 500);
    });
  }
  
  // Dark Mode Toggle
  function initDarkModeToggle() {
    const darkModeToggle = document.querySelector('.dark-mode-toggle');
    const body = document.body;
    const icon = darkModeToggle.querySelector('i');
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    }
    
    darkModeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      
      // Update icon
      if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
      } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'disabled');
      }
    });
  }