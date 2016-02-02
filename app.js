$(document).ready(function() {

     $("#projects").click(function() { 
        $(".active").fadeOut(300, function() { 
            $("#portfolio").removeClass("hidden"); 
            $("#portfolio").fadeIn(300);
        })
        $(".active").removeClass("active"); 
        $("#portfolio").addClass("active");
     });

      $("#abt").click(function() { 
        $(".active").fadeOut(300, function() { 
            $("#about").removeClass("hidden"); 
            $("#about").fadeIn(300);
        })
        $(".active").removeClass("active"); 
        $("#about").addClass("active");
     });

      /*$("#res").click(function() { 
        $(".active").fadeOut(300, function() { 
            $("#resume").removeClass("hidden"); 
            $("#resume").fadeIn(300);
        })
        $(".active").removeClass("active"); 
        $("#resume").addClass("active");
     });*/

      $("#ri").click(function() { 
        $(".active").fadeOut(300, function() { 
            $("#raidin").removeClass("hidden"); 
            $("#raidin").fadeIn(300);
        })
        $(".active").removeClass("active"); 
        $("#raidin").addClass("active");
     });

        $("#vets").click(function() { 
        $(".active").fadeOut(300, function() { 
            $("#ptci").removeClass("hidden"); 
            $("#ptci").fadeIn(300);
        })
        $(".active").removeClass("active"); 
        $("#ptci").addClass("active");
     });

        $("#eye").click(function() { 
        $(".active").fadeOut(300, function() { 
            $("#eyewitness").removeClass("hidden"); 
            $("#eyewitness").fadeIn(300);
        })
        $(".active").removeClass("active"); 
        $("#eyewitness").addClass("active");
     });
})