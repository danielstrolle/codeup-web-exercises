(function () {
    "use strict";
    var mapOptions = {
        zoom: 10,
        center: {
            lat: 0,
            lng: 0
        }
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    var address = "Kalkaska, MI 49646";
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({"address": address}, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
        } else {
            alert("Geocoding was not successful - STATUS: " + status);
        }
    });
    var shirleys = {lat: 44.7125, lng: -84.9519};
    var marker = new google.maps.Marker({
        position: shirleys,
        animation: google.maps.Animation.DROP,
        map: map

    });

    marker.addListener('click', function () {
        var infowindow = new google.maps.InfoWindow({
            content: "<h4>Shirley in the Woods Cafe</h4><p>It is my favorite because it reminds me of Michigan</p><p>Best Dishes include the omelettes and homemade bread</p>"
        });
        infowindow.open(map, marker);
    });
})();
