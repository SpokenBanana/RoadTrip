let add = 2;
var yelp_base = '/yelp/api/search';
console.log('y');

async function yelp_search(the_term, location, radius,  callback) {
    var params = {'term': the_term,'location':location, 'radius_filter': radius, limit: 10};
    $.ajax({
        url: yelp_base,
        data: params,
        type: 'GET',
        success: callback
    });
}
