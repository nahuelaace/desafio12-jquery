$(function(){



    $("#oscuro").click(function () {
        
        $("h1").css({"color":"white"});
        $("h2").css({"color":"white"});
        $("p").css({"color":"white"});
        $("body").css({"background-color":"black"});
        $("button").css({"background-color":"white"});
        $('.modo-claro').slideUp("fast", function () {
            
            $('.modo-oscuro').slideDown('slow')
                             .fadeOut(200)
                             .fadeIn(200)
                             .fadeOut(200)
                             .fadeIn(200)

        })
    });

    $("#claro").click(function () {
        
        $("h1").css({"color":"black"});
        $("h2").css({"color":"black"});
        $("p").css({"color":"black"});
        $("body").css({"background-color":"white"});
        $("button").css({"background-color":"black"});
        $('.modo-oscuro').slideUp("fast", function () {
            
            $('.modo-claro').slideDown('slow')
                            .fadeOut(200)
                            .fadeIn(200)
                            .fadeOut(200)
                            .fadeIn(200)

        })

    });

    $('#oscuro').on('click',()=>{

        

    })

})