window.onload = init;

function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation);
    } else {
        alert("Oops, no geolocation support");
    }
}

var marker;
var map;

function addMarker(latlong) {
    var markerOptions = { position: latlong, map: map };
    marker = new google.maps.Marker(markerOptions);
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    alert(latitude + ' ' + longitude);
    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
    showMap(position.coords);
}

function showMap(coords) {
    var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);
    var mapOptions = {
        zoom: 18,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);
    addMarker(googleLatAndLong)
        /*http://stackoverflow.com/questions/5571641/latitude-longitude-grabber*/
    google.maps.event.addListener(map, 'click', function(event) {
        alert("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
    });
}


function init() {
    getMyLocation();
    document.getElementById("Center").onclick = center;
}