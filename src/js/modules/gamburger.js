function gamburger() {
    const menu = document.querySelector('.header__link'),
        menuLink = document.querySelectorAll('.header__link li a'),
        close = document.querySelector('.header__close'),
        gamburger = document.querySelector('.header__gamburger');

    gamburger.addEventListener('click', (e) => {
        gamburger.classList.toggle('header__active');
        if (gamburger.classList.contains('header__active')) {
            menu.style.transform = 'translateX(0)';
        } else {
            menu.style.transform = 'translateX(-100%)';
        }
    })

    close.addEventListener('click', () => {
        menu.style.transform = 'translateX(-100%)';
        gamburger.classList.remove('header__active');
    })

    menu.addEventListener('click', (e) => {
        menuLink.forEach(link => {
            if (e.target == link) {
                menu.style.transform = 'translateX(-100%)';
                gamburger.classList.remove('header__active');
            }
        })
    })
}

export default gamburger;