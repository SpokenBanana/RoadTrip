
var yelp_base = '/yelp/api/search';
console.log('y');

function yelp_search(the_term, location, radius, latlng, callback) {
    latlng = ','.join(latlng);
    console.log(latlng);
    var params = {'term': the_term,'location':location, 'radius_filter': radius, "cll": latlng};
    $.ajax({
        url: yelp_base,
        data: params,
        type: 'GET',
        success: callback
    });
}
