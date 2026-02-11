document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    const navLinks = document.querySelectorAll('.mobile-menu ul li a');

    // Open Mobile Menu
    mobileMenuIcon.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    // Close Mobile Menu
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Sticky Header Effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Scroll Animations
    // Moving this OUTSIDE the scroll event listener so it initializes on load!
    const observerOptions = {
        threshold: 0.1, /* Trigger when 10% visible */
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate, .section-title, .class-card, .review-card, .about-text, .about-image');
    animatedElements.forEach(el => {
        el.classList.add('animate');
        observer.observe(el);
    });
});
