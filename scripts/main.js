document.addEventListener("DOMContentLoaded", () => {
  new Splide(".hero-carousel", {
    direction: "rtl",
    breakpoints: { 767: { arrows: !1 } },
  }).mount();

  new Splide(".our-activities__slider", {
    direction: "rtl",
    perPage: 3,
    drag: "free",
    gap: "1rem",
    arrows: false,
    pagination: false,
    breakpoints: { 767: { perPage: 1, gap: "0.5rem" }, 992: { perPage: 2 } },
  }).mount();

  const statsSection = document.querySelector(".stats-section");
  const statsNumber = document.querySelectorAll(".stats__number");

  new IntersectionObserver((entries) => {
    entries.forEach((el) => {
      el.isIntersecting &&
        statsNumber.forEach((number) => {
          const animate = () => {
            const value = +number.dataset.value;
            const data = +number.textContent;
            const speed = value / 500;

            data < value
              ? ((number.textContent = Math.ceil(data + speed)),
                setTimeout(animate, 1))
              : (number.textContent = value);
          };
          animate();
        });
    });
  }).observe(statsSection);
});
