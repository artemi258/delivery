window.addEventListener('DOMContentLoaded', () => {
    'use strick';

    const sliders = document.querySelectorAll('.slider__slide'),
          next = document.querySelector('.next'),
          prev = document.querySelector('.prev'),
          wrapper = document.querySelector('.slider__wrapper'),
          inner = document.querySelector('.slider__inner');
    
    let index = 1;

    function slides(i) {
        sliders.forEach(item => {
            item.classList.remove('slider__active');
            item.querySelector('.slider__img').style.cssText = `
            width: 72px;
            height: 72px;
            `
            item.querySelector('.slider__name').style.cssText = `
            font-size: 13px;
            line-height: 16px; 
            margin: 5px 0 0 0;
            `
            item.querySelector('.slider__text').style.cssText = `
            font-size: 10px;
            margin: 5px 0 0 0;
            line-height: 13px;
            `
        });

        sliders[i].classList.add('slider__active');
        sliders[i].querySelector('.slider__img').style.cssText = `
            width: 114px;
            height: 114px;
        `
        sliders[i].querySelector('.slider__name').style.cssText = `
            font-size: 18px;
            line-height: 22px;
            margin: 19px 0 0 0;
        `
        sliders[i].querySelector('.slider__text').style.cssText = `
            font-size: 14px;
            margin: 15px 0 0 0;
            line-height: 22px;
        `
    }

    slides(1);

    function nextSlider() {
        if (index === sliders.length - 1) {
            index = 0;
            inner.append(sliders[index + 1]);
        } else if (index === 0) {
            index = 1;
            inner.append(sliders[index + 1]);
        } else {
            inner.append(sliders[index - 1]);
                ++index;
        }

        slides(index);
    }

    next.addEventListener('click', () => {
        nextSlider();
    });
    prev.addEventListener('click', () => {
        if (index === 0) {
            index = sliders.length - 1;
            inner.prepend(sliders[index - 1]);
        } else if (index === sliders.length - 1) {
            index = 1;
            inner.prepend(sliders[index - 1]);
        } else {
            inner.prepend(sliders[index + 1]);
                --index
             }
        slides(index);
    });

    let sliderInterval = setInterval(() => nextSlider(), 3000); //первый запуск слайдера

    function autoSlider() {
        sliderInterval = setInterval(() => nextSlider(), 3000); //повторный запуск слайдера
    }
    wrapper.addEventListener('mouseenter', () => {
        clearInterval(sliderInterval);
       });
       wrapper.addEventListener('mouseleave', () => {
           autoSlider();
       });
});