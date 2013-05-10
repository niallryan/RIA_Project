// Set audio variables

var c4 = document.getElementsByTagName("audio")[0];
var c_sharp = document.getElementsByTagName("audio")[1];
var d = document.getElementsByTagName("audio")[2];
var d_sharp = document.getElementsByTagName("audio")[3];
var _e = document.getElementsByTagName("audio")[4];
var f = document.getElementsByTagName("audio")[5];
var f_sharp = document.getElementsByTagName("audio")[6];
var g = document.getElementsByTagName("audio")[7];
var g_sharp = document.getElementsByTagName("audio")[8];
var a = document.getElementsByTagName("audio")[9];
var a_sharp = document.getElementsByTagName("audio")[10];
var b = document.getElementsByTagName("audio")[11];
var c5 = document.getElementsByTagName("audio")[12];

// ------------------------------------------------------------- //

// Click
// ToDo: DRY this up

$("#c_low").mousedown(function () {
    $(this).css("background", "yellow");
    c4.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#c_sharp").mousedown(function () {
    $(this).css("background", "yellow");
    c_sharp.play();
}).mouseup(function () {
        $(this).css("background", "#555D50")
    });

$("#d").mousedown(function () {
    $(this).css("background", "yellow");
    d.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#d_sharp").mousedown(function () {
    $(this).css("background", "yellow");
    d_sharp.play();
}).mouseup(function () {
        $(this).css("background", "#555D50")
    });

$("#e").mousedown(function () {
    $(this).css("background", "yellow");
    _e.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#f").mousedown(function () {
    $(this).css("background", "yellow");
    f.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#f_sharp").mousedown(function () {
    $(this).css("background", "yellow");
    f_sharp.play();
}).mouseup(function () {
        $(this).css("background", "#555D50")
    });

$("#g").mousedown(function () {
    $(this).css("background", "yellow");
    g.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#g_sharp").mousedown(function () {
    $(this).css("background", "yellow");
    g_sharp.play();
}).mouseup(function () {
        $(this).css("background", "#555D50")
    });

$("#a").mousedown(function () {
    $(this).css("background", "yellow");
    a.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#a_sharp").mousedown(function () {
    $(this).css("background", "yellow");
    a_sharp.play();
}).mouseup(function () {
        $(this).css("background", "#555D50")
    });

$("#b").mousedown(function () {
    $(this).css("background", "yellow");
    b.play();
}).mouseup(function () {
    $(this).css("background", "ivory")
});

$("#c_high").mousedown(function () {
    $(this).css("background", "yellow");
    c5.play();
}).mouseup(function () {
        $(this).css("background", "ivory")
    });

// ------------------------------------------------------------- //

// Keypress

$(document).on("keydown", function(e) {

    var pressed_key = e.which;

    // alert(e.which);

    // C = a = 65
    // C# = w = 87
    // D = s = 83
    // D# = e = 69
    // E = d = 68
    // F = f = 70
    // F# = t = 84
    // G = g = 71
    // G# = y = 89
    // A = h = 72
    // A# = u = 85
    // B = j = 74
    // C = k = 75

    if(pressed_key == 65) {
        c4.play();
        $("#c_low").css("background", "yellow");

    } else if(pressed_key == 87) {
        c_sharp.play();
        $("#c_sharp").css("background", "yellow");

    } else if(pressed_key == 83) {
        d.play();
        $("#d").css("background", "yellow");

    } else if(pressed_key == 69) {
        d_sharp.play();
        $("#d_sharp").css("background", "yellow");

    } else if(pressed_key == 68) {
        _e.play();
        $("#e").css("background", "yellow");

    } else if(pressed_key == 70) {
        f.play();
        $("#f").css("background", "yellow");

    } else if(pressed_key == 84) {
        f_sharp.play();
        $("#f_sharp").css("background", "yellow");

    } else if(pressed_key == 71) {
        g.play();
        $("#g").css("background", "yellow");

    } else if(pressed_key == 89) {
        g_sharp.play();
        $("#g_sharp").css("background", "yellow");

    } else if(pressed_key == 72) {
        a.play();
        $("#a").css("background", "yellow");

    } else if(pressed_key == 85) {
        a_sharp.play();
        $("#a_sharp").css("background", "yellow");

    } else if(pressed_key == 74) {
        b.play();
        $("#b").css("background", "yellow");

    } else if(pressed_key == 75) {
        c5.play();
        $("#c_high").css("background", "yellow");

    }

}).on("keyup",function() {
    $(".natural").css("background", "ivory");
    $(".sharp").css("background", "#555D50");
});

/* var sequence = [65, 65, 71, 71, 72, 72, 71, 70, 70, 68, 68, 83, 83, 65];
var pressed = [];

$(document).on("keydown", function(e) {
    var keyToAdd = e.which;

    pressed.push(keyToAdd);

});

var test = (function() {

    if (pressed == sequence) {
        alert("hooray");
        pressed = [];
    }
});

test();

*/