
var map;
require(["esri/map", "dojo/parser", "esri/urlUtils", "esri/dijit/Directions", "esri/IdentityManager","dojo/domReady!"],
function(Map, parser, urlUtils, Directions, esriId) {
	parser.parse();
	map = new Map("map", {
		basemap: "topo",
		center: [-122.45, 37.75],
		zoom: 13
	});

	console.log("1234");
	startDirection(Directions);
});