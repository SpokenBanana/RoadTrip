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
	startDirection(Directions, geocoder, merUtils);
});