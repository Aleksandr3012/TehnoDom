google.maps.event.addDomListener(window, 'load', init);

function init() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 16,

		zoomControl: false, // убрали +/- справа внизу 
		streetViewControl: false, // убрали человечка внизу справа
		mapTypeControl: false, // слева ссверху убрали переключение в режим спутника
		fullscreenControl: false, // переход в  полноэкранный режим 

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(53.4342983, 58.9347262), // climat centr

		// How you would like to style the map. 
		// This is where you would paste any style found on Snazzy Maps https://snazzymaps.com/.
		styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#b5cbe4"}]},{"featureType":"landscape","stylers":[{"color":"#efefef"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#83a5b0"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#bdcdd3"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e3eed3"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}]
	};

	// Get the HTML DOM element that will contain your map 
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	/* Markers
	=========================*/

	var neighborhoods = [
		// Main
		{ lat: 53.4342983, lng: 58.9347262, title: 'ТехноДОМ, торговая сеть', content: 'ул. 1-я Северо-Западная, 7<br> тел.: 8 (3519) 45-70-33 <br> тел.: 8 (3519) 45-07-61 ', icon: 'map-pin.png' },
		//{lat: 55.9364861, lng: 24.2120549, title: 'Title 3', content: '', icon: 'map-pin.png'},
	];

	/* Info windows + Markers
 =========================*/
	infoWindow = new google.maps.InfoWindow();

	function displayMarkers() {

		// this variable sets the map bounds and zoom level according to markers position
		var bounds = new google.maps.LatLngBounds();

		// For loop that runs through the info on markersData making it possible to createMarker function to create the markers
		for (var i = 0; i < neighborhoods.length; i++) {

			var latlng = new google.maps.LatLng(neighborhoods[i].lat, neighborhoods[i].lng);
			var name = neighborhoods[i].title;
			var content = neighborhoods[i].content;
			var icon = neighborhoods[i].icon;

			createMarker(latlng, name, content, icon, i * 150);

			// Marker’s Lat. and Lng. values are added to bounds variable
			bounds.extend(latlng);
		}

	}


	function createMarker(latlng, title, content, icon, timeout) {

		window.setTimeout(function () {
			var marker = new google.maps.Marker({
				map: map,
				position: latlng,
				clickable: true,
				icon: {
					url: "assets/i/" + icon
				},
				animation: google.maps.Animation.DROP
			});

			google.maps.event.addListener(marker, 'click', function () {
				var infoContent = '<div id="info_container">' + title +
					'<div class="info_title">' + content + '</div></div>';

				infoWindow.setContent(infoContent);
				infoWindow.open(map, marker);

			});

		}, timeout);

	}

	displayMarkers();


	/* Map center on resize
	=========================*/
	var getCen = map.getCenter();

	google.maps.event.addDomListener(window, 'resize', function () {
		map.setCenter(getCen);
	});




}