if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 1500);
    });
}
// JS Untuk Menu Responsive
function buka(){
    var x=document.getElementById("scrollsections-navigation");
    if(x.className==="navigasi"){
        x.className+= " responsive";
        }else{
        x.className= "navigasi";
        }					
}

// Kintun Kana WA
function kintunWa(){
    var nama = $.trim($("#nama").val());
    var email = $.trim($("#email").val());
    var judul = $.trim($("#judul").val());
    var isi = $.trim($("#pesan").val());
    
    var kirim_Pesan = "https://api.whatsapp.com/send?phone=6281312962137&text=" + "Ada Pesan Dari : " + "%0ANama : " +nama+ "%0AEmail : " +email+ "%0AJudul : " +judul+ "%0AIsinya Adalah : " +isi+ "" ;
    window.open(kirim_Pesan);
}

$(document).ready(function() {
// JS Header Fixed Ganti Warna BG
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".header").addClass("headBlack");
    } else{
        $(".header").removeClass("headBlack");
    }
});

// Smooth Scroll Untuk More
(function($){
    $(window).load(function(){
        $(".navigasi a, .more a").mPageScroll2id();
    });
})(jQuery);

// Scroll Untuk Menu Section
$(function() {
    $('section.scrollsections').scrollSections({
        createNavigation: false,
        navigation: true
    });
});

    // Testimonial Carousel
$('.quote-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    speed: 300,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

// Section Partikel
$('#partikel').polygonizr();

// Aktifkan AOS
AOS.init();
});

// if ($('#back-to-top').length) {
//     var scrollTrigger = 100, // px
//         backToTop = function () {
//             var scrollTop = $(window).scrollTop();
//             if (scrollTop > scrollTrigger) {
//                 $('#back-to-top').addClass('show');
//             } else {
//                 $('#back-to-top').removeClass('show');
//             }
//         };
//     backToTop();
//     $(window).on('scroll', function () {
//         backToTop();
//     });
//     $('#back-to-top').on('click', function (e) {
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: 0
//         }, 1500);
//     });
// }
// JS Untuk Menu Responsive
function buka(){
    var x=document.getElementById("scrollsections-navigation");
    if(x.className==="navigasi"){
        x.className+= " responsive";
        }else{
        x.className= "navigasi";
        }					
}

$(document).ready(function() {
// JS Header Fixed Ganti Warna BG
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 500) {
        $(".header").addClass("headBlack");
    } else{
        $(".header").removeClass("headBlack");
    }
});

// Smooth Scroll Untuk More
(function($){
    $(window).load(function(){
        $(".navigasi a, .more a").mPageScroll2id();
    });
})(jQuery);

// Scroll Untuk Menu Section
$(function() {
    $('section.scrollsections').scrollSections({
        createNavigation: false,
        navigation: true
    });
});

    // Testimonial Carousel
$('.quote-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    speed: 300,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 900,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 767,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

// Section Partikel
$('#partikel').polygonizr();

// Aktifkan AOS
AOS.init();
});