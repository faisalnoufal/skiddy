//map starts

function myMap() {
    var myLatLng = {
        lat: 11.546861,
        lng: 76.478599
    };

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: myLatLng,
        panControl: true,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: true,
        rotateControl: true,
		scrollwheel: false //this is to remove the ctrl + scroll
		
  

    });

        var image = 'img/map/pointer.png';
		//var image = 'https://material.io/icons/#ic_location_on';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Skiddy Drive Adventures, Gudallur, The Nilgiris',
        icon: image
    });
    
    
}
// map ends
