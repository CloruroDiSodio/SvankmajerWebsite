$(function(){




    if (window.matchMedia("(min-width: 780px)").matches){

       /* var url = window.location.pathname;

        $('.main-menu-a').each(function() {
            if(url === '/web/' + $(this).attr('href')) {
                $(this).addClass('current-page');
            }
        });*/


        $(document).on('mousemove',function(e){
            var x = e.pageX - (window.innerWidth/2);
            var y = e.pageY - (window.innerHeight/2);

            $('.par002').css('transform', 'translate(' + x * 0.02 + 'px,' + y * 0.02 + 'px)');
            $('.par001').css('transform', 'translate(' + x * -0.01 + 'px,' + y * -0.01 + 'px)');

        });

    }



    
    $('.film-list li a').on('click', function(){
        $('.focus-film').addClass('visible');
        $('.exit-bt.mobile').addClass('visible');
    });
  
    $('.underline').on('click', function(){
        $('.focus-film').addClass('visible');
        $('.exit-bt.mobile').addClass('visible');
     });
  
  
    $('.exit-bt').on('click', function(){
        $('.focus-film').removeClass('visible');
        $('.exit-bt.mobile').removeClass('visible');
    });

    $('.drop-menu').on('click', function(){
        $('.mobile-menu').addClass('visible');
        $('.exit-bt.mobile').addClass('visible');
    });

    $('.exit-bt.mobile').on('click', function(){
        $('.mobile-menu').removeClass('visible');
        $('.exit-bt.mobile').removeClass('visible');

    });

    $('.bird,.tail,.lower-green,.red').hide();
    $('.box-full, .box, .open-box').hide();

    $('.jan').hide().fadeIn(1500);
    $('.sva').hide().fadeIn(1500);

    setTimeout(function(){
        $('.bird,.tail,.lower-green,.red').fadeIn(2000);
        $('.box-full, .box, .open-box').fadeIn(2500);
    },1000);

    $('.first-head').hide();
    $('.focus-word').eq(0).hide();
    $('.first').hide().fadeIn(500);

    setTimeout(function () {
        $('.first-head').fadeIn(1500);
        $('.focus-word').eq(0).fadeIn(1000);
    },500);


    $('.second-head').hide();
    $('.second').hide();
    $('.focus-word').eq(1).hide();

    $(window).scroll(function(){
        var box = $('.second');
        var bottomObj = box.offset().top + box.outerHeight();
        var bottomWindow = $(window).scrollTop() + $(window).height();

        if( bottomWindow > bottomObj ) {
            $('.second').fadeIn(500);

            setTimeout(function () {
                $('.second-head').fadeIn(1500);
                $('.focus-word').eq(1).fadeIn(1000);
            },500);
        }

    });


    $('.film-head').hide();
    $('.rabbit').hide();
    $('.film-list').hide().fadeIn(500);

    setTimeout(function () {
        $('.film-head').fadeIn(1500);
        $('.rabbit').fadeIn(2000);
    },500);


});