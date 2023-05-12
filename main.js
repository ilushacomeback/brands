const mySwiper = new Swiper ('.brands', {
    slidesPerView: 'auto',
    refresh: true, 
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    } 
});

const brands = document.querySelector('.brands')
console.log(brands)
window.addEventListener('resize', function(e) {
    const width = window.innerWidth
    console.log(width)
    if (width > 767) {
        brands.remove()
    }
})

