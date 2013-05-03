// Set audio variables

var c4 = document.getElementsByTagName("audio")[0];
var d = document.getElementsByTagName("audio")[1];
var _e = document.getElementsByTagName("audio")[2];
var f = document.getElementsByTagName("audio")[3];
var g = document.getElementsByTagName("audio")[4];
var a = document.getElementsByTagName("audio")[5];
var b = document.getElementsByTagName("audio")[6];
var c5 = document.getElementsByTagName("audio")[7];

// ------------------------------------------------------------- //

// Click
// ToDo: DRY this up

$("#c_low").mousedown(function () {
    $(this).css("background", "red");
    c4.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#d").mousedown(function () {
    $(this).css("background", "red");
    d.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#e").mousedown(function () {
    $(this).css("background", "red");
    _e.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#f").mousedown(function () {
    $(this).css("background", "red");
    f.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#g").mousedown(function () {
    $(this).css("background", "red");
    g.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#a").mousedown(function () {
    $(this).css("background", "red");
    a.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#b").mousedown(function () {
    $(this).css("background", "red");
    b.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#c_high").mousedown(function () {
    $(this).css("background", "red");
    c5.play();
}).mouseup(function () {
        $(this).css("background", "ivory")
    });

// ------------------------------------------------------------- //

// Keypress

$("html").on("keydown", function(e) {

    var pressed_key = e.which;

    // alert(e.which);

    // a=65
    // s=83
    // d=68
    // f=70
    // g=71
    // h=72
    // j=74
    // k=75

    if(pressed_key == 65) {
        c4.play();
        $("#c_low").css("background", "red");

    } else if(pressed_key == 83) {
        d.play();
        $("#d").css("background", "red");

    } else if(pressed_key == 68) {
        _e.play();
        $("#e").css("background", "red");

    } else if(pressed_key == 70) {
        f.play();
        $("#f").css("background", "red");

    } else if(pressed_key == 71) {
        g.play();
        $("#g").css("background", "red");

    } else if(pressed_key == 72) {
        a.play();
        $("#a").css("background", "red");

    } else if(pressed_key == 74) {
        b.play();
        $("#b").css("background", "red");

    } else if(pressed_key == 75) {
        c5.play();
        $("#c_high").css("background", "red");

    }

}).on("keyup",function() {
        $(".natural").css("background", "ivory");
    });
