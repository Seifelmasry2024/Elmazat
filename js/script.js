
// Navigation Menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    // Toggle Menu
    menuToggle.addEventListener('click', () => {
        const isActive = navMenu.classList.toggle('active');
        // Change Button Icon
        const icon = menuToggle.querySelector('i');
        if (isActive) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
            menuToggle.setAttribute('aria-expanded', 'true');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close Menu When Clicking on Link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // Close Menu When Clicking Outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('nav')) {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Close Menu When Pressing ESC Key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
}

// Fade-in Effects on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in', 'slide-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Monitor elements
document.querySelectorAll('.card, .auction-item, .service-box').forEach(el => {
    observer.observe(el);
});

// Loading Screen Handler
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.remove();
            }, 800);
        }, 1500); // Show loading screen for 1.5 seconds
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
});

// Animated Statistics Counter

function getRandomStats() {
    return {
        users: Math.floor(Math.random() * (15000 - 5000 + 1)) + 5000, 
        products: Math.floor(Math.random() * (100000 - 30000 + 1)) + 30000, 
        sales: Math.floor(Math.random() * (200000 - 50000 + 1)) + 50000, 
        satisfaction: Math.floor(Math.random() * (100 - 85 + 1)) + 85 
    };
}

const randomStats = getRandomStats();

document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats section') || document.querySelector('.stats');
    
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                    const statNumbers = entry.target.querySelectorAll('.stat-number');
                    
                    statNumbers.forEach((element, index) => {
                        let target;
                                                
                        if (index === 0) {
                            target = randomStats.users;
                        } else if (index === 1) {
                            target = randomStats.products;
                        } else if (index === 2) {
                            target = randomStats.sales;
                        } else {
                            target = randomStats.satisfaction;
                        }
                        
                        const suffix = element.getAttribute('data-suffix') || '';
                        const duration = 2000;
                        const increment = target / (duration / 16);
                        
                        let current = 0;
                        
                        const counter = setInterval(() => {
                            current += increment;
                            
                            if (current >= target) {
                                current = target;
                                clearInterval(counter);
                            }
                            
                            let displayValue;
                            if (suffix === 'K+') {
                                displayValue = (current / 1000).toFixed(0) + suffix;
                            } else if (suffix === '%') {
                                displayValue = Math.floor(current) + suffix;
                            } else {
                                displayValue = Math.floor(current).toLocaleString() + suffix;
                            }
                            
                            element.textContent = displayValue;
                        }, 16);
                    });
                    
                    entry.target.classList.add('animated');
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(statsSection);
    }
});

// Form Validation and Registration

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]{10,}$/;
    return re.test(phone);
}

// Update copyright year

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    // Add animation to social icons

    document.querySelectorAll('.social-icon').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'spin 0.6s ease-in-out';
            }, 10);
        });
    });
});

// Smooth scrolling for internal links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Button effects
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Back to Top Button

const backToTopButton = document.getElementById('backToTop');

// Show/Hide Button on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Back to Top on Click
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
