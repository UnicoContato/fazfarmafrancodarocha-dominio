// Atualiza o ano no Footer
document.getElementById('year').textContent = new Date().getFullYear();

// Lógica refinada do Header Navbar
const navbar = document.getElementById('navbar');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    // Adiciona sombra e encolhe levemente o header ao descer
    if (window.scrollY > 20) {
        navbar.classList.add('shadow-md', 'bg-white/95');
        navbar.classList.remove('bg-white/80');
    } else {
        navbar.classList.remove('shadow-md', 'bg-white/95');
        navbar.classList.add('bg-white/80');
    }

    // Esconde ao descer muito, revela ao subir
    if (window.scrollY > lastScrollY && window.scrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    lastScrollY = window.scrollY;
});

// Menu Mobile
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle('hidden');
});

// Fechar menu mobile ao clicar num link ou fora dele
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
    }
});

const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Scroll Reveal Profissional
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Remove o observer depois de animar para melhorar a performance
            observer.unobserve(entry.target);
        }
    });
};

const revealOptions = {
    threshold: 0.1, // Mostra um pouco mais cedo
    rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver(revealCallback, revealOptions);

revealElements.forEach(el => {
    revealObserver.observe(el);
});

// Modal de Privacidade
const modal = document.getElementById('privacy-modal');
const openModalBtn = document.getElementById('open-modal');
const closeModalBtn = document.getElementById('close-modal');

openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    // Pequeno delay para a animação de opacidade funcionar bem
    setTimeout(() => {
        modal.firstElementChild.nextElementSibling.classList.add('scale-100', 'opacity-100');
        modal.firstElementChild.nextElementSibling.classList.remove('scale-95', 'opacity-0');
    }, 10);
    document.body.style.overflow = 'hidden';
});

const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
};

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal.firstElementChild || e.target === modal) {
        closeModal();
    }
});