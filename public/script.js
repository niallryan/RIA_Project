$(document).ready(function() {

    // taken from http://stackoverflow.com/questions/7861150/jquery-fade-in-onload
    $("body").hide(0).delay(500).fadeIn(3000);


    $(".ajax").on("click", function(e) {
        e.preventDefault();

        var url = $(this).attr("href");

        $.get(url, function(response) {
            $("#main").html(response);
            if (url == "piano.html") {
                $("#main").addClass("piano_position").removeClass("quiz_position default welcome");
            } else if (url == "quiz.html") {
                $("#main").addClass("quiz_position").removeClass("piano_position default welcome");
            }
        });

    });

});



