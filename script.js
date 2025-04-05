// Mobile Menu Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .service-card, .project-card, .testimonial-card').forEach(element => {
    element.classList.add('fade-in');
    observer.observe(element);
});

// Add alternating slide animations to service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    if (index % 2 === 0) {
        card.classList.remove('fade-in');
        card.classList.add('slide-in-left');
    } else {
        card.classList.remove('fade-in');
        card.classList.add('slide-in-right');
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Récupération des données du formulaire
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const sujet = document.getElementById('sujet').value;
    const message = document.getElementById('message').value;
    
    // Création du lien mailto
    const mailtoLink = `mailto:ikigaibkm@gmail.com?subject=${encodeURIComponent(sujet)}&body=${encodeURIComponent(`${message}\n\n--\n${nom}\n${email}`)}`;
    
    // Ouverture du client de messagerie
    window.location.href = mailtoLink;
    
    // Réinitialisation du formulaire
    contactForm.reset();
    
    // Affichage du message de succès
    showNotification('Votre message a été préparé. Veuillez l\'envoyer depuis votre client de messagerie.', 'success');
});

// Fonction pour afficher les notifications
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animation d'apparition
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Disparition après 3 secondes
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add scroll-based navbar background
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'var(--white)';
        navbar.style.boxShadow = 'none';
    }
}); 