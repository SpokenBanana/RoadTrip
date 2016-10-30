function startGeocoder(Geocoder) {
    var geocoder = new Geocoder();
    geocoder.startup();

    return geocoder;
}

function findLocationInLatLon(locationName, geocoder) {
    var results = [];
    console.log(locationName);
    geocoder.search(locationName).then(function(response) {
        console.log(response);
        if (response) {
            var query_result = response[0];
            for (var i = 0; i < query_result.length; i++) {
                var latlon1 = {
                    lat: query_result[i].feature.geometry.x,
                    lon: query_result[i].feature.geometry.y
                }
                var name1 = query_result[i].name;
                results.push({name: name1, latlon: latlon1});
            }
        }
    });
    return results;
}