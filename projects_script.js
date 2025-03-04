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

document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation for Sections
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
    
    // Navigation Bar Animation on Scroll
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Dark Mode Toggle
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
   
    
    // Project filtering functionality
    const projectTags = document.querySelectorAll('.project-tag');
    const projectCards = document.querySelectorAll('.project-card');
    let activeFilter = 'all';
    
    // Create filter buttons dynamically if needed
    function createFilterButtons() {
        // Get all unique tags
        const tags = new Set();
        projectTags.forEach(tag => {
            tags.add(tag.textContent.trim());
        });
        
        // Create filter section if it doesn't exist yet
        if (!document.querySelector('.project-filters')) {
            const filtersContainer = document.createElement('div');
            filtersContainer.className = 'project-filters';
            filtersContainer.style.display = 'flex';
            filtersContainer.style.flexWrap = 'wrap';
            filtersContainer.style.gap = '10px';
            filtersContainer.style.marginBottom = '20px';
            
            // Add "All" filter button
            const allButton = document.createElement('button');
            allButton.textContent = 'All';
            allButton.className = 'filter-btn active';
            allButton.dataset.filter = 'all';
            allButton.style.padding = '8px 15px';
            allButton.style.borderRadius = '20px';
            allButton.style.border = 'none';
            allButton.style.backgroundColor = '#3498db';
            allButton.style.color = 'white';
            allButton.style.cursor = 'pointer';
            allButton.style.transition = 'all 0.3s';
            filtersContainer.appendChild(allButton);
            
            // Add filter button for each tag
            tags.forEach(tag => {
                const button = document.createElement('button');
                button.textContent = tag;
                button.className = 'filter-btn';
                button.dataset.filter = tag;
                button.style.padding = '8px 15px';
                button.style.borderRadius = '20px';
                button.style.border = 'none';
                button.style.backgroundColor = '#f0f0f0';
                button.style.color = '#666';
                button.style.cursor = 'pointer';
                button.style.transition = 'all 0.3s';
                filtersContainer.appendChild(button);
            });
            
            // Insert filters before project grid
            const projectsGrid = document.querySelector('.projects-grid');
            projectsGrid.parentNode.insertBefore(filtersContainer, projectsGrid);
            
            // Add event listeners to filter buttons
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    // Update active filter
                    activeFilter = button.dataset.filter;
                    
                    // Update active button styles
                    filterButtons.forEach(btn => {
                        btn.classList.remove('active');
                        btn.style.backgroundColor = '#f0f0f0';
                        btn.style.color = '#666';
                    });
                    button.classList.add('active');
                    button.style.backgroundColor = '#3498db';
                    button.style.color = 'white';
                    
                    // Filter projects
                    filterProjects();
                });
            });
        }
    }
    
    function filterProjects() {
        projectCards.forEach(card => {
            if (activeFilter === 'all') {
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                const cardTags = Array.from(card.querySelectorAll('.project-tag'))
                    .map(tag => tag.textContent.trim());
                
                if (cardTags.includes(activeFilter)) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            }
        });
    }
    
    // Initialize project filters
    createFilterButtons();
    
    // Initialize particles
    createParticles();
    
    // Initialize project screenshots gallery
    const projectScreenshots = document.querySelectorAll('.project-screenshot img');
    projectScreenshots.forEach(screenshot => {
        screenshot.addEventListener('click', () => {
            // Create lightbox for clicked image
            const lightbox = document.createElement('div');
            lightbox.className = 'lightbox';
            lightbox.style.position = 'fixed';
            lightbox.style.top = '0';
            lightbox.style.left = '0';
            lightbox.style.width = '100%';
            lightbox.style.height = '100%';
            lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            lightbox.style.display = 'flex';
            lightbox.style.alignItems = 'center';
            lightbox.style.justifyContent = 'center';
            lightbox.style.zIndex = '1000';
            lightbox.style.opacity = '0';
            lightbox.style.transition = 'opacity 0.3s';
            
            // Create image element
            const img = document.createElement('img');
            img.src = screenshot.src;
            img.style.maxWidth = '90%';
            img.style.maxHeight = '90%';
            img.style.border = '2px solid white';
            img.style.borderRadius = '5px';
            img.style.boxShadow = '0 5px 25px rgba(0, 0, 0, 0.5)';
            lightbox.appendChild(img);
            
            // Add close button
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '&times;';
            closeBtn.style.position = 'absolute';
            closeBtn.style.top = '20px';
            closeBtn.style.right = '20px';
            closeBtn.style.backgroundColor = 'transparent';
            closeBtn.style.border = 'none';
            closeBtn.style.color = 'white';
            closeBtn.style.fontSize = '30px';
            closeBtn.style.cursor = 'pointer';
            lightbox.appendChild(closeBtn);
            
            // Add to body and animate in
            document.body.appendChild(lightbox);
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
            
            // Close lightbox on button click or outside click
            closeBtn.addEventListener('click', () => {
                lightbox.style.opacity = '0';
                setTimeout(() => {
                    document.body.removeChild(lightbox);
                }, 300);
            });
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) {
                    lightbox.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(lightbox);
                    }, 300);
                }
            });
        });
    });
}); 