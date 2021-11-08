function up() {
    const up = document.querySelector('.up');

    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1500) {
            up.style.opacity = '1';
        } else {
            up.style.opacity = '0';
        }
    })
}

export default up;