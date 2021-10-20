function scrolling() {
    let links = document.querySelectorAll('[href^="#"]'),
        speed;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let heightTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;
                console.log(toBlock);

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                if (toBlock > 1500 || toBlock < 0) {
                    speed = 0.2;
                } else {
                    speed = 0.4;
                }
                
                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(heightTop - progress/speed, heightTop + toBlock) : Math.min(heightTop + progress/speed, heightTop + toBlock));
                
                    document.documentElement.scrollTo(0, r);

                if (r != heightTop + toBlock) {
                    requestAnimationFrame(step);
                } else {
                    location.hash = hash;
                }
            }
        });
    });
}

export default scrolling;