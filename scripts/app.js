
var map;
require(["esri/map", "dojo/domReady!", "dojo/parser", "esri/urlUtils", "esri/dijit/Directions"], function(Map, Directions) {
	map = new Map("map", {
		basemap: "topo",
		center: [-122.45, 37.75],
		zoom: 13
	});
});