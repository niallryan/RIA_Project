var c = new google.maps.LatLng(53.350193, -6.260576);
var rathmines = new google.maps.LatLng(53.323081, -6.265469);
var dorset = new google.maps.LatLng(53.356942, -6.264353);
var pearse = new google.maps.LatLng(53.344557, -6.251585);
var heuston = new google.maps.LatLng(53.34667, -6.291696);
var drumcondra = new google.maps.LatLng(53.363768, -6.257401);

var options = {
	center: c,
	zoom: 10,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(
document.getElementById("map"),
options
);

var marker1 = new google.maps.Marker({
    position: rathmines,
    map: map,
    icon: "/images/trebleclef.png"
});

var marker2 = new google.maps.Marker({
    position: dorset,
    map: map,
    icon: "/images/trebleclef.png"
});

var marker3 = new google.maps.Marker({
    position: pearse,
    map: map,
    icon: "/images/trebleclef.png"
});

var marker4 = new google.maps.Marker({
    position: heuston,
    map: map,
    icon: "/images/trebleclef.png"
});

var marker5 = new google.maps.Marker({
    position: drumcondra,
    map: map,
    icon: "/images/trebleclef.png"
});

google.maps.event.addListener(marker1, 'click', function() {
	$("#info").text("Rathmines Piano School, Rathmines.").slideDown(1000);
});

google.maps.event.addListener(marker2, 'click', function() {
    $("#info").text("Dorset St. Piano School, Dublin 1.").slideDown(1000);
});

google.maps.event.addListener(marker3, 'click', function() {
    $("#info").text("Pearse St. Piano School, Dublin 2.").slideDown(1000);
});

google.maps.event.addListener(marker4, 'click', function() {
    $("#info").text("Heuston Piano School, Dublin 8.").slideDown(1000);
});

google.maps.event.addListener(marker5, 'click', function() {
    $("#info").append("Drumcondra Piano School, Dublin 9.").slideDown(1000);
});