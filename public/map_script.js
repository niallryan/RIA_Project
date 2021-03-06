// Code adapted from tutorial/documentation from https://developers.google.com/maps/articles/geolocation

// Position Variables

var user_location;
var rathmines = new google.maps.LatLng(53.323081, -6.265469);
var dorset = new google.maps.LatLng(53.356942, -6.264353);
var pearse = new google.maps.LatLng(53.344557, -6.251585);
var heuston = new google.maps.LatLng(53.34667, -6.291696);
var drumcondra = new google.maps.LatLng(53.363768, -6.257401);
var galway = new google.maps.LatLng(53.268601, -9.067669);
var limerick = new google.maps.LatLng(52.6692, -8.640232);
var waterford = new google.maps.LatLng(52.248876, -7.110643);
var carlow = new google.maps.LatLng(52.836529, -6.909971);
var belfast = new google.maps.LatLng(54.596235, -5.883522);
var cork = new google.maps.LatLng(51.892067, -8.481445);

// Geolocation

var browserSupportFlag =  new Boolean();

function start() {

    var options = {
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("map"), options);

    if(navigator.geolocation) {
        browserSupportFlag = true;
        navigator.geolocation.getCurrentPosition(function(position) {
            user_location = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
            map.setCenter(user_location);
        }, function() {
            handleNoGeolocation(browserSupportFlag);
        });
    }
    else {
        browserSupportFlag = false;
        handleNoGeolocation(browserSupportFlag);
    }

    function handleNoGeolocation(errorFlag) {
        if (errorFlag == true) {
            alert("Geolocation service failed.");
            initialLocation = rathmines;
        } else {
            alert("Your browser doesn't support geolocation. We've placed you in Dublin 2.");
            initialLocation = pearse;
        }
        map.setCenter(user_location);
    }

    // Marker Variables

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

    var marker6 = new google.maps.Marker({
        position: galway,
        map: map,
        icon: "/images/trebleclef.png"
    });

    var marker7 = new google.maps.Marker({
        position: limerick,
        map: map,
        icon: "/images/trebleclef.png"
    });

    var marker8 = new google.maps.Marker({
        position: waterford,
        map: map,
        icon: "/images/trebleclef.png"
    });

    var marker9 = new google.maps.Marker({
        position: carlow,
        map: map,
        icon: "/images/trebleclef.png"
    });

    var marker10 = new google.maps.Marker({
        position: belfast,
        map: map,
        icon: "/images/trebleclef.png"
    });

    var marker11 = new google.maps.Marker({
        position: cork,
        map: map,
        icon: "/images/trebleclef.png"
    });

    // Marker Click Events

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
        $("#info").text("Drumcondra Piano School, Dublin 9.").slideDown(1000);
    });

    google.maps.event.addListener(marker6, 'click', function() {
        $("#info").text("Galway School of Music.").slideDown(1000);
    });

    google.maps.event.addListener(marker7, 'click', function() {
        $("#info").text("Limerick Piano Centre.").slideDown(1000);
    });

    google.maps.event.addListener(marker8, 'click', function() {
        $("#info").text("Waterford College of Music Education.").slideDown(1000);
    });

    google.maps.event.addListener(marker9, 'click', function() {
        $("#info").text("Carlow Piano Tutor, O' Brien Road, Carlow.").slideDown(1000);
    });

    google.maps.event.addListener(marker10, 'click', function() {
        $("#info").text("Belfast School of Piano.").slideDown(1000);
    });

    google.maps.event.addListener(marker11, 'click', function() {
        $("#info").text("Cork Piano School.").slideDown(1000);
    });

};

start();

