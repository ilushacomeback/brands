const mySwiper = new Swiper ('.brands', {
    slidesPerView: 'auto',
    refresh: true, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    } 
});

const brands = document.querySelector('.brands')
window.addEventListener('resize', function(e) {
    const width = window.innerWidth
    if (width > 767) {
        brands.remove()
    }
})

window.addEventListener('DOMContentLoaded', function(e) {
    const width = window.innerWidth
    if (width > 767) {
        brands.remove()
    }
})

const button = document.querySelector('.button')
const next = document.querySelector('.brands-next-list')
button.addEventListener('click', function () {
    console.log(button)
    next.classList.toggle('brands-next-list1')
} )

const btn = document.querySelector('.button > span');
btn.addEventListener('click', function() {
  btn.innerHTML =
    (btn.innerHTML === 'Показать всё') ? btn.innerHTML = 'Скрыть' : btn.innerHTML = 'Показать всё';
})

