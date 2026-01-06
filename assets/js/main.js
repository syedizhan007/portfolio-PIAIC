document.addEventListener('DOMContentLoaded', () => {
    // Select Elements
    const themeToggle = document.getElementById('theme-toggle');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    const body = document.body;

    /**
     * Theme Toggle Logic
     */
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    } else if (savedTheme === 'light') {
        body.classList.remove('dark-theme');
    } else {
        // Fallback to system preference
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            body.classList.add('dark-theme');
        }
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');

        // Save preference
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            localStorage.setItem('portfolio-theme', 'light');
        }
    });

    /**
     * Mobile Menu Logic
     */
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');

        // Update aria-expanded
        const isExpanded = navMenu.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    /**
     * Form Validation
     */
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                e.preventDefault();
                alert('Please fill in all fields.');
                return;
            }

            // Simple email regex
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                alert('Please enter a valid email address.');
                return;
            }

            // If valid, you can handle the submission here (e.g., fetch API)
            console.log('Form submitted successfully:', { name, email, message });
            // For now, let it submit or prevent it if you want to handle it purely via JS
            // e.preventDefault();
            // alert('Message sent!');
            // contactForm.reset();
        });
    }

    /**
     * Scroll Animations (Reveal on Scroll)
     */
    const revealElements = document.querySelectorAll('.section, .project-card, .testimonial-card, .hero-title, .hero-subtitle');

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        el.classList.add('reveal-on-scroll');
        revealObserver.observe(el);
    });
});
