/**
 * file for handling direction logic
*/
function startDirection(Directions) {
	var directions = new Directions({
		map: map
	},"dir");
	directions.startup();
}
