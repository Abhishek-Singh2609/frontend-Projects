$(".review_slider_area").owlCarousel({
    autoplay: false,
    slideSpeed: 1000,
    items: 2,
    loop: true,
    nav: false,
    margin: 30,
    dots: true,
    responsive: {
        575: {
            items: 1
        },
        767: {
            items: 2
        },
        991: {
            items: 3
        }
    }
});


$(".review_slider_area").css("overflow-x", "hidden")
