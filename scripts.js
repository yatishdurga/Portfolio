// JavaScript for Responsive Portfolio

// Toggle mobile menu
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbar = document.querySelector('.navbar');
const navLinksContainer = document.querySelector('.nav-links');

mobileMenuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close mobile menu after clicking a link
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active');
        }
    });
});

// Show menu button for mobile navigation
const showMenuButton = () => {
    if (window.innerWidth <= 768) {
        navbar.style.transform = "translateY(-100%)";
        mobileMenuIcon.style.display = "flex";
    } else {
        navbar.style.transform = "translateY(0)";
        mobileMenuIcon.style.display = "none";
    }
};

window.addEventListener('resize', showMenuButton);
window.addEventListener('load', showMenuButton);

// Add animations on scroll
const cards = document.querySelectorAll('.card');

const revealCardsOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', revealCardsOnScroll);

// Initial animation trigger
revealCardsOnScroll();
/*nav bar java script  */
// JavaScript for Responsive Portfolio

// Toggle mobile menu
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navbar = document.querySelector('.navbar');

mobileMenuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Close mobile menu after clicking a link
        if (window.innerWidth <= 768) {
            navbar.classList.remove('active');
        }
    });
});

// Show menu button for mobile navigation
const showMenuButton = () => {
    if (window.innerWidth <= 768) {
        navbar.style.transform = "translateY(-100%)";
        mobileMenuIcon.style.display = "flex";
    } else {
        navbar.style.transform = "translateY(0)";
        mobileMenuIcon.style.display = "none";
    }
};

window.addEventListener('resize', showMenuButton);
window.addEventListener('load', showMenuButton);

// Add animations on scroll
const cards = document.querySelectorAll('.card');

const revealCardsOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('visible');
        } else {
            card.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', revealCardsOnScroll);

// Initial animation trigger
revealCardsOnScroll();


// project section 
function filterProjects(category) {
    // Get all project cards and category buttons
    const projects = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.category-button');

    // Update active button styling
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.category-button[onclick="filterProjects('${category}')"]`).classList.add('active');

    // Filter projects
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block'; // Show matching projects
        } else {
            project.style.display = 'none'; // Hide non-matching projects
        }
    });
}
