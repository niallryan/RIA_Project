/**
 * Created with JetBrains RubyMine.
 * User: niall
 * Date: 26/04/13
 * Time: 22:35
 * To change this template use File | Settings | File Templates.
 */

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

    // $(".button").on("mouseover", function() {
    //    $(this).animate( {
    //        width: '200px'
    //    }, 1000, function() {
            // Animation complete.
    //    });
    //});

});



