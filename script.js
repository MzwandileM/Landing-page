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