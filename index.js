const darkBtn = document.getElementById('theme-button');
darkBtn.addEventListener('click', () => {
  // Переключаем класс (если был — удалит, если не было — добавит)
  document.body.classList.toggle('dark-theme');
  
  // Проверяем, какой класс сейчас активен, и сохраняем значение
  if (document.body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});


const burgerBtn = document.getElementById('burger');
const navList = document.getElementById('header-nav');
const menuBtn = document.getElementById('header-menu');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active');
  navList.classList.toggle('is-open');
  menuBtn.classList.toggle('is-open');
});





document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider__track');
    const slides = document.querySelectorAll('.slider__content');
    const nextBtn = document.querySelector('.slider__button--next');
    const prevBtn = document.querySelector('.slider__button--prev');
    const indicators = document.querySelectorAll('.control__line');

    let currentIndex = 0;
    const maxIndex = slides.length - 1;

    // Функция обновления позиции слайдера
    function updateSlider() {
        // Узнаем точную текущую ширину одного слайда
        const slideWidth = slides[0].getBoundingClientRect().width;
        
        // Сдвигаем ленту на нужный шаг
        track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

        // Обновляем активный индикатор-полоску
        indicators.forEach((line, index) => {
            if (index === currentIndex) {
                line.classList.add('active');
            } else {
                line.classList.remove('active');
            }
        });
    }

    // Кнопка Вперед (с цикличностью)
    nextBtn.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0; // Переход с последнего на первый
        }
        updateSlider();
    });

    // Кнопка Назад (с цикличностью)
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex; // Переход с первого на последний
        }
        updateSlider();
    });

    // Корректный перерасчет при изменении ширины экрана (resize)
    window.addEventListener('resize', () => {
        // Отключаем на мгновение анимацию, чтобы не было "скачка" при ресайзе
        track.style.transition = 'none';
        updateSlider();
        // Возвращаем анимацию обратно в очередь событий
        setTimeout(() => {
            track.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
    });
});
