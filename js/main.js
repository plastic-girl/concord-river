		

$(document).ready(function(){
    $('.live_type ul li.first').delay(1000).fadeIn(1500, function(){
        $('.live_type ul li.sentence').each(function(i, elem) {
            $(elem).delay(i * 2500).fadeIn(1000, function(){
                $(this).delay(i * 500).fadeOut(700, function(){
                    });    
                   });
                 });
        $('.live_type ul li.sixth').delay(5 * 2500).fadeIn(500);
        $('.live_type ul li.sixth').delay(2500).fadeOut(1000);
        $('.live_type ul li.seventh').delay(6 * 2500 + 1000).fadeIn(500);
        $('.live_type ul li.seventh').delay(1000).fadeOut(1000);
        $('.live_type ul li.eighth').delay(8 * 2500).fadeIn(500);
               });
            });

