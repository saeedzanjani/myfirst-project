$(document).ready(function(){
    new WOW().init();
    $('[data-toggle=tooltip]').tooltip();
    $('.testimonial-carousel').owlCarousel({
        rtl:true,
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    navbarSticky();
    window.addEventListener('scroll', ()=>{
        navbarSticky()
    })
});

const navbar = document.querySelector('.navbar')

const navbarSticky = ()=>{
    if(window.scrollY){
        navbar.classList.add('fixed-top')
    }else{
        navbar.classList.remove('fixed-top')
    }
}
