$(document).ready(function(){

    $('.container, .navbar-dark').fadeIn(500);
    
    $('.abilities-button').one('click', () =>{
        $('.ab-row').addClass('animate__fadeInLeft');
        $(document).scrollTop($(document).height());
    });

    $('.ed-button').on('click', ()=>{
        $('.ed-row').addClass('animate__fadeInDown');
        $(document).scrollTop($(document).height());
    })


    var phoneScreen = window.innerWidth;
    if(phoneScreen < 767.5){
        $('.ex-carousel').addClass('carousel-fade');
        console.log(phoneScreen);
    }

    function carouselResize(){
        var resize = window.innerWidth;
        
        if(resize < 767.5){
            $('.ex-carousel').addClass('carousel-fade');
        }
        else{
            $('.ex-carousel').removeClass('carousel-fade');
        }
    }

    window.onresize = carouselResize;



});