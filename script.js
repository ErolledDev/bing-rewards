// User testimonials data
const testimonials = [
    { name: "Cedrick from Manila", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning points today!" },
    { name: "Maria from Cebu", message: "redeemed SM Gift Card", emoji: "🎁", subtitle: "5,000 points earned!" },
    { name: "Juan from Davao", message: "earned 5,000 points", emoji: "⭐", subtitle: "Level 2 achieved!" },
    { name: "Ana from Quezon City", message: "got Shopee voucher", emoji: "🛍️", subtitle: "Shopping made rewarding!" },
    { name: "Carlos from Makati", message: "reached Level 2", emoji: "🏆", subtitle: "Unlock higher rewards!" },
    { name: "Lisa from Iloilo", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome to the program!" },
    { name: "Miguel from Baguio", message: "redeemed Lazada credits", emoji: "💳", subtitle: "Online shopping rewards!" },
    { name: "Sofia from Taguig", message: "earned daily maximum", emoji: "💯", subtitle: "150 points in one day!" },
    { name: "Rico from Antipolo", message: "got Puregold voucher", emoji: "🛒", subtitle: "Grocery shopping rewards!" },
    { name: "Grace from Pasig", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start your journey!" },
    { name: "Paolo from Muntinlupa", message: "redeemed Robinson's GC", emoji: "🎫", subtitle: "Mall shopping made better!" },
    { name: "Nina from Paranaque", message: "earned 10,000 points", emoji: "🌟", subtitle: "Amazing milestone!" },
    { name: "Alex from Las Pinas", message: "reached milestone", emoji: "🎯", subtitle: "Keep earning more!" },
    { name: "Mia from Marikina", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Welcome aboard!" },
    { name: "Ryan from Caloocan", message: "got Ayala Mall GC", emoji: "🏬", subtitle: "Premium shopping rewards!" },
    { name: "Kris from Valenzuela", message: "earned bonus points", emoji: "✨", subtitle: "Extra rewards unlocked!" },
    { name: "Lea from Malabon", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Start earning now!" },
    { name: "Ben from Navotas", message: "redeemed first reward", emoji: "🎉", subtitle: "First of many!" },
    { name: "Joy from San Juan", message: "completed daily tasks", emoji: "✅", subtitle: "Consistency pays off!" },
    { name: "Mark from Mandaluyong", message: "joined Bing Rewards", emoji: "🎊", subtitle: "Begin your rewards journey!" }
];

let currentTestimonialIndex = 0;
let toastTimeout;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Start toast notifications
    showToastNotification();
    
    // Add button interactions
    addButtonInteractions();
    
    // Add accessibility improvements
    addAccessibilityFeatures();
    
    // Add smooth scrolling for internal links
    addSmoothScrolling();
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
    
    // Show first toast after a short delay
    setTimeout(createToast, 1000);
    
    // Show new toast every 6 seconds
    setInterval(createToast, 6000);
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
    const buttons = document.querySelectorAll('.primary-button, .secondary-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Simple scale animation
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
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

// Expose functions globally for HTML onclick handlers
window.hideToast = hideToast;
window.copyToClipboard = copyToClipboard;