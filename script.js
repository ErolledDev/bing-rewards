// Base testimonials data - will be shuffled dynamically on each page load
const baseTestimonials = [
  { name: "Cedrick from Manila", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning points today!" },
  { name: "Maria from Cebu", message: "redeemed SM Gift Card", emoji: "🎁", subtitle: "11,110 points earned!" },
  { name: "Juan from Davao", message: "earned 5,000 points", emoji: "⭐", subtitle: "Level 2 achieved!" },
  { name: "Ana from Quezon City", message: "got Zalora voucher", emoji: "🛍️", subtitle: "6,665 points redeemed!" },
  { name: "Carlos from Makati", message: "reached Level 2", emoji: "🏆", subtitle: "Unlock higher rewards!" },
  { name: "Lisa from Iloilo", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome to the program!" },
  { name: "Jessica from Fairview", message: "redeemed 3 months Spotify premium", emoji: "🎧", subtitle: "Enjoy your listening!" },
  { name: "Miguel from Baguio", message: "redeemed Puregold voucher", emoji: "💳", subtitle: "2,395 points spent!" },
  { name: "Sofia from Taguig", message: "earned unlimited points", emoji: "💯", subtitle: "No daily limit!" },
  { name: "Rico from Antipolo", message: "got Puregold voucher", emoji: "🛒", subtitle: "2,395 points redeemed!" },
  { name: "Grace from Pasig", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start your journey!" },
  { name: "Paolo from Muntinlupa", message: "redeemed Robinson's GC", emoji: "🎫", subtitle: "11,110 points earned!" },
  { name: "Nina from Paranaque", message: "earned 10,000 points", emoji: "🌟", subtitle: "Amazing milestone!" },
  { name: "Alex from Las Pinas", message: "reached milestone", emoji: "🎯", subtitle: "Keep earning more!" },
  { name: "Mia from Marikina", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome aboard!" },
  { name: "Ryan from Caloocan", message: "got Max's Restaurant GC", emoji: "🏬", subtitle: "6,665 points redeemed!" },
  { name: "Kris from Valenzuela", message: "earned bonus points", emoji: "✨", subtitle: "Extra rewards unlocked!" },
  { name: "Lea from Malabon", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning now!" },
  { name: "Ben from Navotas", message: "redeemed first reward", emoji: "🎉", subtitle: "First of many!" },
  { name: "Joy from San Juan", message: "completed daily tasks", emoji: "✅", subtitle: "Consistency pays off!" },
  { name: "Mark from Mandaluyong", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Begin your rewards journey!" },
  { name: "Sarah from Batangas", message: "redeemed Krispy Kreme GC", emoji: "🍩", subtitle: "6,665 points well spent!" },
  { name: "Jake from Laguna", message: "earned Level 2 status", emoji: "🏅", subtitle: "500+ points monthly!" },
  { name: "Rina from Cavite", message: "got SM Gift Card", emoji: "🎁", subtitle: "11,110 points earned!" },
  { name: "Tony from Rizal", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome to rewards!" },
  { name: "Liza from Bulacan", message: "earned massive points", emoji: "💯", subtitle: "Unlimited potential!" },
  { name: "Dave from Pampanga", message: "redeemed Zalora voucher", emoji: "👕", subtitle: "6,665 points used!" },
  { name: "Amy from Zambales", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning now!" },
  { name: "Roy from Tarlac", message: "got Puregold voucher", emoji: "🛒", subtitle: "2,395 points redeemed!" },
  { name: "Jen from Nueva Ecija", message: "reached 5,000 points", emoji: "⭐", subtitle: "Halfway to Level 2!" },
  { name: "Luis from Pangasinan", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome aboard!" },
  { name: "Kate from Baguio", message: "earned bonus points", emoji: "✨", subtitle: "Daily streak bonus!" },
  { name: "Mike from Ilocos Norte", message: "redeemed Max's GC", emoji: "🍽️", subtitle: "6,665 points earned!" },
  { name: "Gina from Ilocos Sur", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start your journey!" },
  { name: "Alfred from Tondo", message: "redeemed 3 months Spotify premium", emoji: "🎧", subtitle: "Enjoy your listening!" },
  { name: "Paul from La Union", message: "got Robinson's voucher", emoji: "🏬", subtitle: "11,110 points used!" },
  { name: "Rose from Cagayan", message: "earned unlimited points", emoji: "💯", subtitle: "No earning limits!" },
  { name: "Dan from Isabela", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome to rewards!" },
  { name: "Ivy from Quirino", message: "redeemed first reward", emoji: "🎉", subtitle: "2,395 points spent!" },
  { name: "Rex from Bataan", message: "reached Level 2", emoji: "🏆", subtitle: "Higher rewards unlocked!" },
  { name: "Tina from Olongapo", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning today!" },
  { name: "Joel from Angeles", message: "got Krispy Kreme GC", emoji: "🍩", subtitle: "6,665 points redeemed!" },
  { name: "Mae from Cabanatuan", message: "earned 8,000 points", emoji: "🌟", subtitle: "Great progress!" },
  { name: "Ron from San Fernando", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome to the program!" },
  { name: "Lyn from Malolos", message: "redeemed Zalora voucher", emoji: "👗", subtitle: "6,665 points well spent!" },
  { name: "Art from Meycauayan", message: "earned unlimited points", emoji: "💯", subtitle: "No daily cap!" },
  { name: "Joy from Bacoor", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Begin your journey!" },
  { name: "Sam from Imus", message: "got SM Gift Card", emoji: "🎁", subtitle: "11,110 points earned!" },
  { name: "Lea from Dasmarinas", message: "reached milestone", emoji: "🎯", subtitle: "Keep earning more!" },
  { name: "Ben from General Trias", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning now!" },
  { name: "Kim from Trece Martires", message: "redeemed Puregold voucher", emoji: "🛒", subtitle: "2,395 points used!" },
  { name: "Jay from Tagaytay", message: "earned bonus points", emoji: "✨", subtitle: "Weekend bonus!" },
  { name: "Sue from Binan", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome aboard!" }
];

// Fisher-Yates shuffle algorithm for true randomization
function shuffleArray(array) {
  const shuffled = [...array]; // Create a copy to avoid mutating original
  for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Dynamically shuffled testimonials - different order each page load
const testimonials = shuffleArray(baseTestimonials);

// Modal Configuration - Easy to modify
const MODAL_CONFIG = {
  enabled: true,           // Set to false to disable modal completely
  showDelay: 8000,        // Delay before showing modal (in milliseconds) - Changed to 5 seconds as requested
  autoHideDelay: 0,       // Auto-hide after X milliseconds (0 = no auto-hide)
  showOnce: false,        // Set to true to show only once per session
  storageKey: 'bingRewardsModalShown' // Local storage key for tracking
};

let currentTestimonialIndex = 0;
let toastTimeout;
let confettiAnimationId;
let confettiSystem = null;
let confettiActive = false;
let modalTimeout;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Initialize confetti
  initializeConfetti();
  
  // Start confetti effect
  startConfettiEffect();
  
  // Show welcome modal based on configuration
  scheduleWelcomeModal();
  
  // Start toast notifications
  showToastNotification();
  
  // Add button interactions
  addButtonInteractions();
  
  // Add accessibility improvements
  addAccessibilityFeatures();
  
  // Add smooth scrolling for internal links
  addSmoothScrolling();
  
  // Initialize hero visual effects
  initializeHeroEffects();
  
  // Log shuffle info for debugging
  console.log(`Testimonials shuffled! First testimonial: ${testimonials[0].name}`);
}

// Modal Control Functions
function scheduleWelcomeModal() {
  if (!MODAL_CONFIG.enabled) {
      console.log('Modal is disabled in configuration');
      return;
  }
  
  // Check if modal should show only once
  if (MODAL_CONFIG.showOnce) {
      const hasShown = localStorage.getItem(MODAL_CONFIG.storageKey);
      if (hasShown) {
          console.log('Modal already shown this session');
          return;
      }
  }
  
  // Schedule modal to show
  modalTimeout = setTimeout(() => {
      showWelcomeModal();
      
      // Mark as shown if configured to show once
      if (MODAL_CONFIG.showOnce) {
          localStorage.setItem(MODAL_CONFIG.storageKey, 'true');
      }
      
      // Auto-hide if configured
      if (MODAL_CONFIG.autoHideDelay > 0) {
          setTimeout(() => {
              closeModal();
          }, MODAL_CONFIG.autoHideDelay);
      }
  }, MODAL_CONFIG.showDelay);
}

// Function to enable/disable modal (for developer use)
function toggleModal(enabled) {
  MODAL_CONFIG.enabled = enabled;
  console.log(`Modal ${enabled ? 'enabled' : 'disabled'}`);
  
  if (!enabled && modalTimeout) {
      clearTimeout(modalTimeout);
      closeModal();
  } else if (enabled) {
      scheduleWelcomeModal();
  }
}

// Function to reset modal session (for developer use)
function resetModalSession() {
  localStorage.removeItem(MODAL_CONFIG.storageKey);
  console.log('Modal session reset');
}

// Function to update modal timing (for developer use)
function updateModalTiming(showDelay, autoHideDelay = 0) {
  MODAL_CONFIG.showDelay = showDelay;
  MODAL_CONFIG.autoHideDelay = autoHideDelay;
  console.log(`Modal timing updated: show after ${showDelay}ms, auto-hide after ${autoHideDelay}ms`);
}

// Function to reshuffle testimonials (for developer use or periodic refresh)
function reshuffleTestimonials() {
  const newOrder = shuffleArray(baseTestimonials);
  testimonials.length = 0; // Clear existing array
  testimonials.push(...newOrder); // Add shuffled items
  currentTestimonialIndex = 0; // Reset index
  console.log(`Testimonials reshuffled! New first testimonial: ${testimonials[0].name}`);
}

// Optimized Confetti System with reduced particle count and simplified effects
function initializeConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Confetti particles array
  let confettiParticles = [];
  const colors = ['#ff6b35', '#0066cc', '#00c896', '#ffb020', '#28a745', '#dc3545'];
  
  // Create confetti particle with optimized properties
  function createConfettiParticle() {
      return {
          x: Math.random() * canvas.width,
          y: -10,
          vx: (Math.random() - 0.5) * 3, // Reduced velocity range
          vy: Math.random() * 2 + 1.5,   // Reduced velocity range
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 8, // Reduced rotation speed
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 6 + 3,   // Slightly smaller particles
          gravity: 0.08,                 // Reduced gravity
          life: 1,
          decay: Math.random() * 0.015 + 0.008 // Faster decay for shorter life
      };
  }
  
  // Update and render confetti particles
  function updateConfetti() {
      // Clear the entire canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // If confetti is not active and no particles remain, stop the animation
      if (!confettiActive && confettiParticles.length === 0) {
          if (confettiAnimationId) {
              cancelAnimationFrame(confettiAnimationId);
              confettiAnimationId = null;
          }
          return;
      }
      
      // Update particles in reverse order for safe removal
      for (let i = confettiParticles.length - 1; i >= 0; i--) {
          const particle = confettiParticles[i];
          
          // Update position and physics
          particle.x += particle.vx;
          particle.y += particle.vy;
          particle.vy += particle.gravity;
          particle.rotation += particle.rotationSpeed;
          particle.life -= particle.decay;
          
          // Remove particles that are dead or off-screen
          if (particle.life <= 0 || particle.y > canvas.height + 50 || particle.x < -50 || particle.x > canvas.width + 50) {
              confettiParticles.splice(i, 1);
              continue;
          }
          
          // Draw particle
          ctx.save();
          ctx.globalAlpha = Math.max(0, particle.life);
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          ctx.restore();
      }
      
      // Continue animation
      confettiAnimationId = requestAnimationFrame(updateConfetti);
  }
  
  // Create confetti burst with reduced particle count
  function createConfettiBurst(particleCount = 25) { // Reduced from 50 to 25
      for (let i = 0; i < particleCount; i++) {
          confettiParticles.push(createConfettiParticle());
      }
  }
  
  // Clear all confetti immediately
  function clearConfetti() {
      confettiParticles = [];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confettiActive = false;
      
      if (confettiAnimationId) {
          cancelAnimationFrame(confettiAnimationId);
          confettiAnimationId = null;
      }
  }
  
  // Start confetti animation
  function startConfetti() {
      confettiActive = true;
      if (!confettiAnimationId) {
          updateConfetti();
      }
  }
  
  // Stop confetti (let existing particles finish)
  function stopConfetti() {
      confettiActive = false;
      // Animation will stop automatically when all particles are gone
  }
  
  // Public API
  confettiSystem = {
      start: function() {
          startConfetti();
          createConfettiBurst(30); // Reduced from 50 to 30
      },
      stop: function() {
          stopConfetti();
      },
      clear: function() {
          clearConfetti();
      },
      burst: function(count = 15) { // Reduced from 30 to 15
          if (!confettiActive) {
              startConfetti();
          }
          createConfettiBurst(count);
      },
      isActive: function() {
          return confettiActive || confettiParticles.length > 0;
      }
  };
  
  // Expose globally
  window.confettiSystem = confettiSystem;
}

// Optimized confetti effect - reduced from 5 bursts to 2 bursts
function startConfettiEffect() {
  if (!confettiSystem) return;
  
  // Start initial confetti burst
  confettiSystem.start();
  
  // Add only one additional burst after 1.5 seconds (reduced from 4 bursts)
  const burstTimeout = setTimeout(() => confettiSystem.burst(20), 1500); // Reduced particle count
  
  // Stop creating new confetti after 3 seconds (reduced from 4 seconds)
  setTimeout(() => {
      confettiSystem.stop();
  }, 3000);
  
  // Force clear everything after 6 seconds (reduced from 8 seconds)
  setTimeout(() => {
      confettiSystem.clear();
      // Clear any remaining timeouts
      clearTimeout(burstTimeout);
  }, 6000);
}

// Initialize Hero Visual Effects
function initializeHeroEffects() {
  // Add interactive hover effects to stats
  const statItems = document.querySelectorAll('.stat-item');
  statItems.forEach((item, index) => {
      item.addEventListener('mouseenter', function() {
          // Trigger a small confetti burst on hover (reduced chance and particle count)
          if (confettiSystem && Math.random() > 0.8) { // Reduced from 30% to 20% chance
              confettiSystem.burst(3); // Reduced from 5 to 3 particles
          }
      });
  });
  
  // Add click effects to avatar
  const avatar = document.querySelector('.avatar-image');
  if (avatar) {
      avatar.addEventListener('click', function() {
          // Trigger confetti burst when avatar is clicked (reduced particle count)
          if (confettiSystem) {
              confettiSystem.burst(10); // Reduced from 20 to 10
          }
          
          // Add a temporary scale effect
          this.style.transform = 'scale(1.1)';
          setTimeout(() => {
              this.style.transform = '';
          }, 200);
      });
  }
  
  // Add parallax effect to floating elements on scroll (subtle)
  let ticking = false;
  function updateParallax() {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.floating-gift, .floating-coin, .floating-star, .floating-bag, .floating-badge');
      
      parallaxElements.forEach((element, index) => {
          const speed = 0.3 + (index * 0.05); // Reduced parallax speed for better performance
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
      });
      
      ticking = false;
  }
  
  function requestTick() {
      if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
      }
  }
  
  window.addEventListener('scroll', requestTick);
  
  // Add mouse movement parallax effect (reduced intensity)
  document.addEventListener('mousemove', function(e) {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const orbs = document.querySelectorAll('.orb');
      orbs.forEach((orb, index) => {
          const speed = 5 + (index * 2); // Reduced from 10 + (index * 5)
          const x = (mouseX - 0.5) * speed;
          const y = (mouseY - 0.5) * speed;
          orb.style.transform = `translate(${x}px, ${y}px)`;
      });
      
      const shapes = document.querySelectorAll('.shape');
      shapes.forEach((shape, index) => {
          const speed = 3 + (index * 1); // Reduced from 5 + (index * 2)
          const x = (mouseX - 0.5) * speed;
          const y = (mouseY - 0.5) * speed;
          shape.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
      });
  });
}

// Welcome Modal System
function showWelcomeModal() {
  const modal = document.getElementById('welcome-modal');
  if (modal) {
      modal.classList.add('show');
      
      // Trigger confetti burst when modal shows (reduced particle count)
      if (confettiSystem) {
          confettiSystem.burst(15); // Reduced from 25 to 15
      }
      
      console.log('Welcome modal shown');
  }
}

function closeModal() {
  const modal = document.getElementById('welcome-modal');
  if (modal) {
      modal.classList.remove('show');
      console.log('Welcome modal closed');
  }
  
  // Clear modal timeout if it exists
  if (modalTimeout) {
      clearTimeout(modalTimeout);
      modalTimeout = null;
  }
}

// Toast notification system
function showToastNotification() {
  function createToast() {
      const testimonial = testimonials[currentTestimonialIndex];
      
      // Remove existing toast if any
      const existingToast = document.querySelector('.toast-notification');
      if (existingToast) {
          existingToast.remove();
      }
      
      // Create new toast
      const toast = document.createElement('div');
      toast.className = 'toast-notification';
      toast.innerHTML = `
          <div class="toast-content">
              <div class="toast-icon">${testimonial.emoji}</div>
              <div class="toast-text">
                  <div class="toast-message">${testimonial.name} ${testimonial.message}</div>
                  <div class="toast-subtitle">${testimonial.subtitle}</div>
              </div>
              <button class="toast-close" onclick="hideToast(this)" aria-label="Close notification">&times;</button>
          </div>
      `;
      
      document.body.appendChild(toast);
      
      // Show toast with animation
      setTimeout(() => {
          toast.classList.add('show');
      }, 100);
      
      // Auto hide after 4 seconds
      toastTimeout = setTimeout(() => {
          hideToast(toast.querySelector('.toast-close'));
      }, 4000);
      
      currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  }
  
  // Show first toast after a short delay (after confetti starts)
  setTimeout(createToast, 6000);
  
  // Show new toast every 8 seconds
  setInterval(createToast, 8000);
}

// Hide toast function
function hideToast(closeButton) {
  const toast = closeButton.closest('.toast-notification');
  if (toast) {
      clearTimeout(toastTimeout);
      toast.classList.add('hide');
      setTimeout(() => {
          toast.remove();
      }, 400);
  }
}

// Add button interactions
function addButtonInteractions() {
  const buttons = document.querySelectorAll('.primary-button, .secondary-button, .card-cta');
  
  buttons.forEach(button => {
      button.addEventListener('click', function(e) {
          // Simple scale animation
          this.style.transform = 'scale(0.98)';
          setTimeout(() => {
              this.style.transform = '';
          }, 150);
          
          // Trigger confetti burst on primary buttons and CTA buttons (reduced particle count)
          if (this.classList.contains('primary-button') || this.classList.contains('card-cta')) {
              if (confettiSystem) {
                  confettiSystem.burst(8); // Reduced from 20 to 8
              }
          }
      });
  });
}

// Add accessibility features
function addAccessibilityFeatures() {
  // Keyboard navigation detection
  document.addEventListener('keydown', function(e) {
      if (e.key === 'Tab') {
          document.body.classList.add('keyboard-navigation');
      }
      
      // Close modal with Escape key
      if (e.key === 'Escape') {
          closeModal();
      }
  });

  document.addEventListener('mousedown', function() {
      document.body.classList.remove('keyboard-navigation');
  });

  // Add keyboard navigation styles
  const keyboardStyle = document.createElement('style');
  keyboardStyle.textContent = `
      .keyboard-navigation *:focus {
          outline: 3px solid var(--color-warning) !important;
          outline-offset: 2px !important;
      }
  `;
  document.head.appendChild(keyboardStyle);
  
  // Close modal when clicking outside
  const modal = document.getElementById('welcome-modal');
  if (modal) {
      modal.addEventListener('click', function(e) {
          if (e.target === this) {
              closeModal();
          }
      });
  }
}

// Add smooth scrolling for internal links
function addSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
              target.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }
      });
  });
}

// Enhanced mobile touch interactions
if ('ontouchstart' in window) {
  const touchElements = document.querySelectorAll('.store-card, .step-card, .gallery-card, .stat-item');
  
  touchElements.forEach(item => {
      item.addEventListener('touchstart', function() {
          this.style.transform = 'scale(0.98)';
      });
      
      item.addEventListener('touchend', function() {
          setTimeout(() => {
              this.style.transform = '';
          }, 150);
      });
  });
}

// Copy functionality for sharing
function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(() => {
          showSimpleToast('Link copied to clipboard!');
      });
  } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      try {
          document.execCommand('copy');
          showSimpleToast('Link copied to clipboard!');
      } catch (err) {
          console.error('Failed to copy text: ', err);
      }
      
      textArea.remove();
  }
}

// Simple toast notification for utility functions
function showSimpleToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.cssText = `
      position: fixed;
      bottom: var(--space-5);
      left: 50%;
      transform: translateX(-50%);
      background: var(--color-gray-800);
      color: var(--color-white);
      padding: var(--space-3) var(--space-6);
      border-radius: var(--radius-lg);
      font-size: var(--font-size-sm);
      z-index: 1000;
      opacity: 0;
      transition: opacity var(--transition-normal);
      box-shadow: var(--shadow-lg);
  `;
  
  document.body.appendChild(toast);
  
  setTimeout(() => {
      toast.style.opacity = '1';
  }, 100);
  
  setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
          toast.remove();
      }, 250);
  }, 3000);
}

// Performance optimization: Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
      }
  });
}, observerOptions);

// Observe sections for scroll animations (optional)
document.querySelectorAll('.stores-section, .steps-section, .gallery-section').forEach(section => {
  section.style.opacity = '0.8';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Error handling for images
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('error', function() {
      this.style.display = 'none';
      console.warn('Failed to load image:', this.src);
  });
});

// Cleanup function for when page is unloaded
window.addEventListener('beforeunload', function() {
  if (confettiSystem) {
      confettiSystem.clear();
  }
  clearTimeout(toastTimeout);
  clearTimeout(modalTimeout);
});

// Page visibility change handler (cleanup when tab is hidden)
document.addEventListener('visibilitychange', function() {
  if (document.hidden && confettiSystem) {
      confettiSystem.clear();
  }
});

// Developer Console Helper Functions
console.log(`
🎁 Microsoft Bing Rewards - Optimized Performance & Dynamic Testimonials:

• toggleModal(true/false) - Enable/disable modal
• resetModalSession() - Reset modal session storage
• updateModalTiming(showDelay, autoHideDelay) - Update timing
• reshuffleTestimonials() - Reshuffle testimonials order
• MODAL_CONFIG - View current configuration

Current config:
- Enabled: ${MODAL_CONFIG.enabled}
- Show delay: ${MODAL_CONFIG.showDelay}ms (8 seconds)
- Auto-hide: ${MODAL_CONFIG.autoHideDelay}ms
- Show once: ${MODAL_CONFIG.showOnce}

🎨 Optimized Performance:
- Confetti bursts reduced from 5 to 2
- Particle counts reduced by ~50%
- Faster particle decay for shorter lifespan
- Reduced parallax and animation intensity
- Better cleanup and memory management

🔀 Dynamic Features:
- Testimonials are shuffled on each page load
- Updated messaging reflects unlimited earning potential
- No fixed daily limits mentioned in testimonials
`);

// Expose functions globally for HTML onclick handlers and developer use
window.hideToast = hideToast;
window.copyToClipboard = copyToClipboard;
window.closeModal = closeModal;
window.toggleModal = toggleModal;
window.resetModalSession = resetModalSession;
window.updateModalTiming = updateModalTiming;
window.reshuffleTestimonials = reshuffleTestimonials;
window.MODAL_CONFIG = MODAL_CONFIG;
