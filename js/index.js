$('.owl-1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
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
});
setTimeout(function(){
    document.getElementById('navbar').setAttribute("style","transform:translateY(0px);")
    }, 50);

    setTimeout(function(){
        document.getElementById('about-krmu-text').setAttribute("style","transform:translateX(0px);")
        }, 50);

        setTimeout(function(){
            document.getElementById('about-krmu-image').setAttribute("style","transform:translateX(0px);")
            }, 50);

window.onscroll = function(){
    //console.log(window.scrollY);
    //console.log(document.getElementById('upcoming-events').scrollHeight);

    var ans = ((window.scrollY/document.getElementById('our-mission').offsetTop)+0.2).toFixed(2);
   // console.log(ans);
    document.getElementById('our-mission').style.opacity = ans;

  
    //console.log(ans2)
  }