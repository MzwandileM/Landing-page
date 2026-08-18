const toggle = document.querySelector('.toggle');
const navLinks = document.querySelector('.nav_links');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when a nav link is tapped (mobile)
document.querySelectorAll('.nav_links a').forEach(link => {
    link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

/* =========================
   SCROLL ANIMATIONS
========================= */

const animatedElements = document.querySelectorAll(
    '.scroll-fade-up, ' +
    '.scroll-left, ' +
    '.scroll-right, ' +
    '.scroll-scale, ' +
    '.scroll-fade, ' +
    '.scroll-stagger'
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('show');

        // Stagger children
        if (entry.target.classList.contains('scroll-stagger')) {
            [...entry.target.children].forEach((child, index) => {
                child.style.transitionDelay = `${index * 100}ms`;
                child.classList.add('show');
            });
        }

        observer.unobserve(entry.target);
    });
}, {
    threshold: 0.15
});

animatedElements.forEach(element => {
    observer.observe(element);
});