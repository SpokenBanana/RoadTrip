/**
 * file for handling direction logic
 * google api - AIzaSyBqiBpLGl_Rf-k8Qesm6qeBfLXAFwPwj5U
*/
function startDirection(Directions, geocoder, mercUtils) {
	var directions = new Directions({
		map: map,
        directionsLengthUnits: 'esriMiles'
	},"dir");
	directions.startup();
    var stop_for_gas = 100;
    var gas_so_far = 0;
    var old = [];
    directions.on("directions-finish", function(event) {
        if (event.target.directions) {
            var streetArr = new Set();
            var strings = event.target.directions.strings;
            for(var i = 0; i < strings.length; i++)
            {
                if(strings[i] != null) 
                {
                    for(var j = 0; j < strings[i].length; j++)
                    {
                        streetArr.add(strings[i][j].string);
                    }
                }
            }
            streetArr.forEach(function(value) {
            console.log(value);
            });
            //streetArr is a set that holds all the streets en route
        }
    });
}

function findPlaces(location) {
    var places_service = google.maps.places.PlacesService($("#places").get(0));
    places_service.nearbySearch(location, function(response){
        console.log(response);
    });
}

function addStopsToRoute(stops, directions) {
	for (var i = 0; i < stops.length; i++) {
		directions.addStop(stops[i], 1 + i);
	}
}
