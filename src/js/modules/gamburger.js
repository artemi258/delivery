function gamburger() {
    const menu = document.querySelector('.header__link'),
        menuLink = document.querySelectorAll('.header__link li a'),
        close = document.querySelector('.header__close'),
        gamburger = document.querySelector('.header__gamburger');

    gamburger.addEventListener('click', () => {
        gamburger.classList.toggle('header__active');
        if (gamburger.classList.contains('header__active')) {
            menu.classList.add('header__link-active');
        } else {
            menu.classList.remove('header__link-active');
        }
    })

    close.addEventListener('click', () => {
        menu.classList.remove('header__link-active');
        gamburger.classList.remove('header__active');
    })

    menu.addEventListener('click', (e) => {
        menuLink.forEach(link => {
            if (e.target == link) {
                menu.classList.remove('header__link-active');
                gamburger.classList.remove('header__active');
            }
        })
    })
}

export default gamburger;