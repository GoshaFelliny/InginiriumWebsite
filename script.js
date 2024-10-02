let currentSlide = 0;
const slides = document.querySelectorAll('.baner-slide');
const slidesCount = slides.length;
const indicators = document.querySelectorAll('.indicator');

function nextSlide(event) {
  event.preventDefault();
  currentSlide = (currentSlide + 1) % slidesCount;
  updateSlides();
}

function prevSlide(event) {
  event.preventDefault();
  currentSlide = (currentSlide - 1 + slidesCount) % slidesCount;
  updateSlides();
}

function goToSlide(index) {
  currentSlide = index;
  updateSlides();
}

function updateSlides() {
  const slideWidth = slides[0].offsetWidth;
  const slidePosition = -currentSlide * slideWidth;
  document.querySelector('.baner-content').style.transform = `translateX(${slidePosition}px)`;
  
  // Обновление индикаторов
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlide);
  });
}
setInterval(nextSlide, 5000); 