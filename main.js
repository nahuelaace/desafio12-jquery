$(function(){



    $("#oscuro").click(function () {
        
        $("h1").css({"color":"white"});
        $("p").css({"color":"white"});
        $("body").css({"background-color":"black"});
        $("button").css({"background-color":"white"});

    });

    $("#claro").click(function () {
        
        $("h1").css({"color":"black"});
        $("p").css({"color":"black"});
        $("body").css({"background-color":"white"});
        $("button").css({"background-color":"black"});

    });

})