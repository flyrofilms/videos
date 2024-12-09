const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

// Função para atualizar a posição do carrossel
function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

// Botão próximo
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length; // Circular
  updateCarousel();
});

// Botão anterior
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length; // Circular
  updateCarousel();
});

// Atualizar posição ao redimensionar
window.addEventListener('resize', updateCarousel);
