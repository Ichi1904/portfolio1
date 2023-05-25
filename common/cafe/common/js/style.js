$(function () {
    if (window.matchMedia('(min-width: 737px)').matches) {
    $('.mainVisual').vegas({
                slides: [
        { src: 'images/main1.jpg' },
        { src: 'images/main2.jpg' },
        { src: 'images/main3.jpg' },
        { src: 'images/main4.jpg' },
        { src: 'images/main5.jpg' },
      ],  
      overlay:true,
      transition:'blur',
      transitionDuration:2000,
      delay:10000,
      animationDuration:15000,
      animation:'kenburns',
      timer:false,
            });
    } else {
        $('.mainVisual').vegas({
            slides:[
                {src:'images/main_sp1@2x.jpg'},
                {src:'images/main_sp2@2x.jpg'},
                {src:'images/main_sp3@2x.jpg'},
                {src:'images/main_sp4@2x.jpg'},
                {src:'images/main_sp5@2x.jpg'},
            ],
            overlay:true,
            transition:'blur',
            transitionDuration:2000,
            delay:10000,
            animationDuration:15000,
            animation:'kenburns',
            timer:false,
        });
    }
    $('.nav-toggle').on('click',function(){
        $('body').toggleClass('open');
    });
    $('.slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 3500,
            cssEase: "linear",
            slidesToShow: 1,
            slidesToScroll:3,
            centerMode:true,
            centerPadding:'20%',
            variableWidth:true,
            swipe: false,
            arrows: false,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [
          {
            breakpoint: 736.9, 
            settings: {
              slidesToShow:1,
              slidesToScroll:2,
            },
          },
        ],
          });
    });

    function toggleMenu(){
      const menu =document.getElementById("global-nav");
      menu.classList.toggle("show");
    }