export async function initSlideshow() {
    const res = await fetch("/data/top/slideshow-list.json");
    const imageList = await res.json();

    let slideIndex = 1;
    let autoPlay;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("slide");
        const dots = document.getElementsByClassName("dot");

        if (n > slides.length) slideIndex = 1;
        if (n < 1) slideIndex = slides.length;

        for (let slide of slides) slide.style.display = "none";
        for (let dot of dots) dot.classList.remove("active");

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    }

    function startAutoPlay() {
        autoPlay = setInterval(() => plusSlides(1), 3000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlay);
    }

    const slideshow = document.getElementById("slideshow");
    const dotsContainer = document.getElementById("dots");

    if (!slideshow || !dotsContainer) return;

    imageList.forEach((file, index) => {
        const slide = document.createElement("div");
        slide.className = "slide fade";
        slide.innerHTML = `<img src="/assets/img/gallery/${file}" alt="作品${index + 1}">`;
        slideshow.appendChild(slide);

        const dot = document.createElement("span");
        dot.className = "dot";
        dot.addEventListener("click", () => currentSlide(index + 1));
        dotsContainer.appendChild(dot);
    });

    const prev = document.createElement("a");
    prev.className = "prev";
    prev.innerHTML = "&#10094;";
    prev.onclick = () => plusSlides(-1);

    const next = document.createElement("a");
    next.className = "next";
    next.innerHTML = "&#10095;";
    next.onclick = () => plusSlides(1);

    slideshow.appendChild(prev);
    slideshow.appendChild(next);

    showSlides(slideIndex);
    startAutoPlay();

    const container = document.querySelector(".slideshow-container");
    if (container) {
        container.addEventListener("mouseenter", stopAutoPlay);
        container.addEventListener("mouseleave", startAutoPlay);

        /* スワイプ用 */
        let startX = 0;
        let endX = 0;

        container.addEventListener("touchstart", (e) => {
            startX = e.touches[0].clientX;
        });

        container.addEventListener("touchmove", (e) => {
            endX = e.touches[0].clientX;
        });

        container.addEventListener("touchend", () => {
            const diff = startX - endX;
            if (Math.abs(diff) > 20) {
                diff > 0 ? plusSlides(1) : plusSlides(-1);
            }
        });
    }
}
