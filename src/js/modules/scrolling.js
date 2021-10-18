function scrolling() {
    let links = document.querySelectorAll('[href^="#"]'),
        speed = 0.2;
    
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            let heightTop = document.documentElement.scrollTop,
                hash = this.hash,
                toBlock = document.querySelector(hash).getBoundingClientRect().top,
                start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }
                // console.log(`${time`);

                // console.log(`${start}start`);

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(heightTop - progress/speed, heightTop + toBlock) : Math.min(heightTop + progress/speed, heightTop + toBlock));
                console.log(r);
                // console.log(progress);

                // const r = toBlock - heightTop;
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