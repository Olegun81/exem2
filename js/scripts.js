'use strict';
var map;
function initMap(){
	var uluru = {lat: 47.101085 , lng: 37.5501973};
	map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru
        });
	var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          icon: 'img/beetroott.png'
        });


}