/**
 * file for handling direction logic
*/
function startDirection(Directions) {
	var directions = new Directions({
		map: map
	},"dir");
	directions.startup();
    directions.on("directions-finish", function(event) {
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
    });
}
