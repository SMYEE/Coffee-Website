

function orderCoffee(name, price, image,desc) {
    const url = `order.html?name=${encodeURIComponent(name)}&price=${price}&image=${encodeURIComponent(image)}&desc=${encodeURIComponent(desc) }`;
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
    // for food slide show
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.getElementById("next");
    const prevBtn = document.getElementById("prev");
    let index = 0;

    function showSlide(i) {
        slides.forEach((slide, idx) => {
            slide.classList.toggle("active", idx === i);
        });
    }
    // next slide
    nextBtn.addEventListener("click", () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    });
    //previous slide
    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });
    //interval
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 5000);
});