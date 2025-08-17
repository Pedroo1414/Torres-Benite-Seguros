// MENU MOBILE
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    mobileMenu.classList.toggle('active');
});

// FECHAR MENU AO CLICAR EM UM LINK
document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('open');
        mobileMenu.classList.remove('active');
    });
});

// Fechar menu ao clicar fora
document.addEventListener('click', (e) => {
  if (mobileMenu.classList.contains('active')) {
    // verifica se o clique foi fora do menu e do botão
    if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      mobileMenu.classList.remove('active');
      menuToggle.classList.remove('open');
    }
  }
});


// Parceiros

const track = document.querySelector('.slide-track');
const images = Array.from(track.children);
const speed = 0.5; // pixels por frame

// Clona todas as imagens e adiciona no final para efeito contínuo
images.forEach(img => {
    const clone = img.cloneNode(true);
    track.appendChild(clone);
});

let position = 0;

function animate() {
    position -= speed;

    // Quando metade do track passar, reinicia a posição
    if (Math.abs(position) >= track.scrollWidth / 2) {
        position = 0;
    }

    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
}

animate();


// FAQ INTERATIVO
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const question = faq.querySelector('.faq-question');
    question.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});
