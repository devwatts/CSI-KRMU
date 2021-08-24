$('.owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:1,
    autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true
})

$('.owl-2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
autoplayTimeout:3000,
autoplayHoverPause:true,
responsiveClass:true,
responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:2,
        nav:false
    },
    925:{
        items:4,
        nav:true,
        loop:false
    }
}
})