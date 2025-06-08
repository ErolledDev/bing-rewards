// User testimonials data
const testimonials = [
    { name: "Cedrick from Manila", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning points today!" },
    { name: "Maria from Cebu", message: "redeemed SM Gift Card", emoji: "🎁", subtitle: "11,110 points earned!" },
    { name: "Juan from Davao", message: "earned 5,000 points", emoji: "⭐", subtitle: "Level 2 achieved!" },
    { name: "Ana from Quezon City", message: "got Zalora voucher", emoji: "🛍️", subtitle: "6,665 points redeemed!" },
    { name: "Carlos from Makati", message: "reached Level 2", emoji: "🏆", subtitle: "Unlock higher rewards!" },
    { name: "Lisa from Iloilo", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome to the program!" },
    { name: "Jessica from Fairview", message: "Redeem 3 months Spotify premium", emoji: "🎧", subtitle: "Enjoy your listening!" },
    { name: "Miguel from Baguio", message: "redeemed Puregold voucher", emoji: "💳", subtitle: "2,395 points spent!" },
    { name: "Sofia from Taguig", message: "earned daily maximum", emoji: "💯", subtitle: "150 points in one day!" },
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
    { name: "Liza from Bulacan", message: "earned daily max", emoji: "💯", subtitle: "150 points today!" },
    { name: "Dave from Pampanga", message: "redeemed Zalora voucher", emoji: "👕", subtitle: "6,665 points used!" },
    { name: "Amy from Zambales", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning now!" },
    { name: "Roy from Tarlac", message: "got Puregold voucher", emoji: "🛒", subtitle: "2,395 points redeemed!" },
    { name: "Jen from Nueva Ecija", message: "reached 5,000 points", emoji: "⭐", subtitle: "Halfway to Level 2!" },
    { name: "Luis from Pangasinan", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome aboard!" },
    { name: "Kate from Baguio", message: "earned bonus points", emoji: "✨", subtitle: "Daily streak bonus!" },
    { name: "Mike from Ilocos Norte", message: "redeemed Max's GC", emoji: "🍽️", subtitle: "6,665 points earned!" },
    { name: "Gina from Ilocos Sur", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start your journey!" },
    { name: "Alfred from Tondo", message: "Redeem 3 months Spotify premium", emoji: "🎧", subtitle: "Enjoy your listening!" },
    { name: "Paul from La Union", message: "got Robinson's voucher", emoji: "🏬", subtitle: "11,110 points used!" },
    { name: "Rose from Cagayan", message: "earned daily maximum", emoji: "💯", subtitle: "150 points achieved!" },
    { name: "Dan from Isabela", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome to rewards!" },
    { name: "Ivy from Quirino", message: "redeemed first reward", emoji: "🎉", subtitle: "2,395 points spent!" },
    { name: "Rex from Bataan", message: "reached Level 2", emoji: "🏆", subtitle: "Higher rewards unlocked!" },
    { name: "Tina from Olongapo", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning today!" },
    { name: "Joel from Angeles", message: "got Krispy Kreme GC", emoji: "🍩", subtitle: "6,665 points redeemed!" },
    { name: "Mae from Cabanatuan", message: "earned 8,000 points", emoji: "🌟", subtitle: "Great progress!" },
    { name: "Ron from San Fernando", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome to the program!" },
    { name: "Lyn from Malolos", message: "redeemed Zalora voucher", emoji: "👗", subtitle: "6,665 points well spent!" },
    { name: "Art from Meycauayan", message: "earned daily max", emoji: "💯", subtitle: "150 points today!" },
    { name: "Joy from Bacoor", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Begin your journey!" },
    { name: "Sam from Imus", message: "got SM Gift Card", emoji: "🎁", subtitle: "11,110 points earned!" },
    { name: "Lea from Dasmarinas", message: "reached milestone", emoji: "🎯", subtitle: "Keep earning more!" },
    { name: "Ben from General Trias", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning now!" },
    { name: "Kim from Trece Martires", message: "redeemed Puregold voucher", emoji: "🛒", subtitle: "2,395 points used!" },
    { name: "Jay from Tagaytay", message: "earned bonus points", emoji: "✨", subtitle: "Weekend bonus!" },
    { name: "Sue from Binan", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome aboard!" }
];

let currentTestimonialIndex = 0;
let toastTimeout;
let confettiAnimationId;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize confetti
    initializeConfetti();
    
    // Start confetti effect
    startConfettiEffect();
    
    // Show welcome modal after 3 seconds
    setTimeout(showWelcomeModal, 3000);
    
    // Start toast notifications
    showToastNotification();
    
    // Add button interactions
    addButtonInteractions();
    
    // Add accessibility improvements
    addAccessibilityFeatures();
    
    // Add smooth scrolling for internal links
    addSmoothScrolling();
    
    // Initialize countdown timer
    initializeCountdownTimer();
}

// Confetti System
function initializeConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Confetti particles
    const confettiParticles = [];
    const colors = ['#ff6b35', '#0066cc', '#00c896', '#ffb020', '#28a745', '#dc3545'];
    
    // Create confetti particle
    function createConfettiParticle() {
        return {
            x: Math.random() * canvas.width,
            y: -10,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 8 + 4,
            gravity: 0.1,
            life: 1,
            decay: Math.random() * 0.02 + 0.005
        };
    }
    
    // Update confetti particles
    function updateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let i = confettiParticles.length - 1; i >= 0; i--) {
            const particle = confettiParticles[i];
            
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.vy += particle.gravity;
            particle.rotation += particle.rotationSpeed;
            particle.life -= particle.decay;
            
            // Remove dead particles
            if (particle.life <= 0 || particle.y > canvas.height + 10) {
                confettiParticles.splice(i, 1);
                continue;
            }
            
            // Draw particle
            ctx.save();
            ctx.globalAlpha = particle.life;
            ctx.translate(particle.x, particle.y);
            ctx.rotate(particle.rotation * Math.PI / 180);
            ctx.fillStyle = particle.color;
            ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
            ctx.restore();
        }
        
        confettiAnimationId = requestAnimationFrame(updateConfetti);
    }
    
    // Start confetti burst
    function createConfettiBurst() {
        for (let i = 0; i < 50; i++) {
            confettiParticles.push(createConfettiParticle());
        }
    }
    
    // Public methods
    window.confettiSystem = {
        start: function() {
            createConfettiBurst();
            updateConfetti();
        },
        stop: function() {
            if (confettiAnimationId) {
                cancelAnimationFrame(confettiAnimationId);
            }
        },
        burst: createConfettiBurst
    };
}

function startConfettiEffect() {
    // Start confetti immediately
    window.confettiSystem.start();
    
    // Add more bursts during the first 5 seconds
    setTimeout(() => window.confettiSystem.burst(), 1000);
    setTimeout(() => window.confettiSystem.burst(), 2000);
    setTimeout(() => window.confettiSystem.burst(), 3000);
    
    // Stop confetti after 5 seconds
    setTimeout(() => {
        window.confettiSystem.stop();
    }, 5000);
}

// Welcome Modal System
function showWelcomeModal() {
    const modal = document.getElementById('welcome-modal');
    modal.classList.add('show');
    
    // Trigger confetti burst when modal shows
    if (window.confettiSystem) {
        window.confettiSystem.burst();
    }
}

function closeModal() {
    const modal = document.getElementById('welcome-modal');
    modal.classList.remove('show');
}

// Countdown Timer
function initializeCountdownTimer() {
    const hoursElement = document.getElementById('timer-hours');
    const minutesElement = document.getElementById('timer-minutes');
    const secondsElement = document.getElementById('timer-seconds');
    
    if (!hoursElement || !minutesElement || !secondsElement) return;
    
    function updateTimer() {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const timeLeft = tomorrow - now;
        
        const hours = Math.floor(timeLeft / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        
        hoursElement.textContent = hours.toString().padStart(2, '0');
        minutesElement.textContent = minutes.toString().padStart(2, '0');
        secondsElement.textContent = seconds.toString().padStart(2, '0');
    }
    
    updateTimer();
    setInterval(updateTimer, 1000);
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
    const buttons = document.querySelectorAll('.primary-button, .secondary-button, .modal-primary-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Simple scale animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Trigger confetti burst on primary buttons
            if (this.classList.contains('primary-button') || this.classList.contains('modal-primary-btn')) {
                if (window.confettiSystem) {
                    window.confettiSystem.burst();
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
    document.getElementById('welcome-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });
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
    const touchElements = document.querySelectorAll('.store-card, .step-card, .gallery-card');
    
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
    if (window.confettiSystem) {
        window.confettiSystem.stop();
    }
    clearTimeout(toastTimeout);
});

// Expose functions globally for HTML onclick handlers
window.hideToast = hideToast;
window.copyToClipboard = copyToClipboard;
window.closeModal = closeModal;