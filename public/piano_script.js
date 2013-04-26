var tone = document.getElementsByTagName("audio")[0];

$(".key").on("click", function() {
	tone.play();
});

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

    var c4 = document.getElementsByTagName("audio")[0];
    var d = document.getElementsByTagName("audio")[1];
    var _e = document.getElementsByTagName("audio")[2];
    var f = document.getElementsByTagName("audio")[3];
    var g = document.getElementsByTagName("audio")[4];
    var a = document.getElementsByTagName("audio")[5];
    var b = document.getElementsByTagName("audio")[6];
    var c5 = document.getElementsByTagName("audio")[7];

    if(pressed_key == 65) {
        c4.play();

    } else if(pressed_key == 83) {
        d.play();

    } else if(pressed_key == 68) {
        _e.play();

    } else if(pressed_key == 70) {
        f.play();

    } else if(pressed_key == 71) {
        g.play();

    } else if(pressed_key == 72) {
        a.play();

    } else if(pressed_key == 74) {
        b.play();

    } else if(pressed_key == 75) {
        c5.play();

    } else {

    };

});
