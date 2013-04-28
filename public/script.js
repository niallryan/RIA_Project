/**
 * Created with JetBrains RubyMine.
 * User: niall
 * Date: 26/04/13
 * Time: 22:35
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {

    // taken from http://stackoverflow.com/questions/7861150/jquery-fade-in-onload
    $("#menu").hide(0).delay(500).fadeIn(3000);


    $(".ajax").on("click", function(e) {
        e.preventDefault();

        var url = $(this).attr("href");

        $.get(url, function(response) {
            $("#main").html(response);
        });

    });

});



