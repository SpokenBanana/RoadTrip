var map;
require(["esri/map", "dojo/parser", "esri/urlUtils", "esri/dijit/Directions", "esri/IdentityManager",
         "esri/dijit/Search", "esri/geometry/webMercatorUtils", "dojo/domReady!"],
function(Map, parser, urlUtils, Directions, esriId, Geocoder, merUtils) {
	parser.parse();
	map = new Map("map", {
		basemap: "topo",
		center: [-122.45, 37.75],
		zoom: 13
	});
	var geocoder = startGeocoder(Geocoder);
	var directions = startDirection(Directions, geocoder, merUtils);

	function tripPlannerCallback(event) {
		var stops = directions.stops;
		var stop_arr = [];
		console.log(stops);
		for (var i = 0; i < stops.length; i++) {
			stop_arr.push([stops[i].name]);
		}
		i =0;
		var x = 0;
		stop_arr.forEach(function(item){
			 yelp_search("restaurants", item[0], 1500, function(hotspots){
				console.log(hotspots);
				hotspots = JSON.parse(hotspots)[0];
				if (hotspots){
					console.log(x+1);
					directions.addStop([hotspots[2], hotspots[1]], 1+x);
					x += 1
				}
			});
		});
	}

	$('#done').click(tripPlannerCallback);
});

$('#done').click(function(){
	// turn it into a road trip
	
});
