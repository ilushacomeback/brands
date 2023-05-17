const mySwiper = new Swiper(".brands", {
  slidesPerView: "auto",
  refresh: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const button = document.querySelector(".btn");
const next = document.querySelector(".brands2-next-list");
button.addEventListener("click", function () {
  next.classList.toggle("brands2-next-list_toggle");
});

button.addEventListener("click", function () {
  button.classList.toggle("btn_toggle");
});

const btn = document.querySelector(".btn > span");
btn.addEventListener("click", function () {
  btn.innerHTML =
    btn.innerHTML === "Показать всё"
      ? (btn.innerHTML = "Скрыть")
      : (btn.innerHTML = "Показать всё");
});

const next_1120px = document.querySelector(".brands2-next-list_1120px");
button.addEventListener("click", function () {
  next_1120px.classList.toggle("brands2-next-list_1120px_toggle");
});
