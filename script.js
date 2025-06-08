// Enhanced animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Smooth fade-in animation for sections
    const sections = document.querySelectorAll('section, header, footer');
    
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 150);
    });
});

// Enhanced button interactions
document.querySelectorAll('.main-cta, .secondary-cta').forEach(button => {
    button.addEventListener('click', function(e) {
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Scale animation
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Gallery hover effects
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.zIndex = '10';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.zIndex = '1';
    });
});

// Enhanced mobile touch interactions
if ('ontouchstart' in window) {
    document.querySelectorAll('.store-item, .step-item, .gallery-item').forEach(item => {
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

// Intersection Observer for scroll-triggered animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            
            // Stagger child animations
            const children = entry.target.querySelectorAll('.store-item, .step-item, .gallery-item, .stat-card');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.classList.add('animate-in');
                }, index * 100);
            });
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.querySelectorAll('.stores-section, .steps-section, .gallery-section, .profile-section').forEach(section => {
    observer.observe(section);
});

// Add animation classes
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    .store-item, .step-item, .gallery-item, .stat-card {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
    
    .gallery-item {
        transition: opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease;
    }
    
    .step-item {
        transition: opacity 0.6s ease, transform 0.6s ease, background-color 0.3s ease, border-color 0.3s ease;
    }
    
    .store-item {
        transition: opacity 0.6s ease, transform 0.6s ease, background-color 0.3s ease, border-color 0.3s ease;
    }
`;
document.head.appendChild(animationStyle);

// Smooth scrolling for internal links
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

// Performance optimization: Throttled scroll handler
let ticking = false;

function updateScrollEffects() {
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3;
    
    // Subtle parallax for profile section
    const profileSection = document.querySelector('.profile-section');
    if (profileSection) {
        profileSection.style.transform = `translateY(${rate}px)`;
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Enhanced focus visibility for keyboard navigation
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
        outline: 3px solid #ffcc00 !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(keyboardStyle);

// Copy functionality for sharing
function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text).then(() => {
            showToast('Link copied to clipboard!');
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
            showToast('Link copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
        
        textArea.remove();
    }
}

// Toast notification system
function showToast(message) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #1a1a1a;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 100);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
        }, 0);
    });
}