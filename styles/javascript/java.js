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

// FAQ INTERATIVO
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const question = faq.querySelector('.faq-question');
    question.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});
