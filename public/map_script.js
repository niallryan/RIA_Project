var c = new google.maps.LatLng(53.350193, -6.260576)

var options = {
	center: c,
	zoom: 14,
	mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map = new google.maps.Map(
document.getElementById("map"),
options
);

var marker = new google.maps.Marker({
	position: c,
	map: map,
	icon: "trebleclef.jpg"
});

google.maps.event.addListener(marker, 'click', function() {
	$("#content").text("Blah blah blah.").slideDown("1000");
});