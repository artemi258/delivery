 const slider = () => {

     const next = document.querySelector('.next'),
         prev = document.querySelector('.prev'),
         wrapper = document.querySelector('.slider__wrapper'),
         inner = document.querySelector('.slider__inner');


     function slidesActive() {
         const sliders = document.querySelectorAll('.slider__slide');

         sliders.forEach(item => {
             item.classList.remove('slider__active', 'wow', 'animate__animated', 'animate__fadeIn');
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

         sliders[1].classList.add('slider__active', 'wow', 'animate__animated', 'animate__fadeIn');
         sliders[1].querySelector('.slider__img').style.cssText = `
         width: 114px;
         height: 114px;
     `
         sliders[1].querySelector('.slider__name').style.cssText = `
         font-size: 18px;
         line-height: 22px;
         margin: 19px 0 0 0;
     `
         sliders[1].querySelector('.slider__text').style.cssText = `
         font-size: 14px;
         margin: 15px 0 0 0;
         line-height: 22px;
         `
     };

     slidesActive();

     function nextSlider() {
         const sliders = document.querySelectorAll('.slider__slide');
         inner.append(sliders[0]);
         slidesActive();
     };

     next.addEventListener('click', () => {
         nextSlider();
     });
     prev.addEventListener('click', () => {
         const sliders = document.querySelectorAll('.slider__slide');

         inner.prepend(sliders[sliders.length - 1]);
         slidesActive();
     });

     let sliderInterval = setInterval(nextSlider, 3000); // убрать обратный  отсчет слайдера после отвода мышки

     function autoSlider() {
         sliderInterval = setInterval(nextSlider, 3000);
     };
     wrapper.addEventListener('mouseenter', () => {
         clearInterval(sliderInterval);
     });
     wrapper.addEventListener('mouseleave', () => {
         autoSlider();
     });

 }

 export default slider;