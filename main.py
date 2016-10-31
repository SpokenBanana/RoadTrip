from flask import Flask, render_template, json
from yelp.client import Client
from yelp.oauth1_authenticator import Oauth1Authenticator
from yelp.obj.search_response import SearchResponse
from flask_restful import Resource, Api, reqparse
app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()
parser.add_argument("term", type=str)
# parser.add_argument("cll", type=str)
parser.add_argument("location", type=str)
parser.add_argument("limit", type=str)
parser.add_argument("radius_filter", type=int)

consumer_key = 'cxzXjN5ICyU6rC-Ndpmb7Q'
consumer_secret = '7rxbf_oxTGXwqSww_N-aqSRN1pE'
yelp_token = 'mw3IEDXZ5RFtqwjKa4FCAcsguHY8__Lx'
yelp_token_secret = 'KUKo50fpfVJ7MMEz4rZWavg43nE'


class YelpApi(Resource):
    def get(self):
        args = parser.parse_args()
        auth = Oauth1Authenticator(
            consumer_key=consumer_key,
            consumer_secret=consumer_secret,
            token=yelp_token,
            token_secret=yelp_token_secret)
        client = Client(auth)
        response = client.search(**args)
        res = [[b.name, b.location.coordinate.latitude,
                            b.location.coordinate.longitude,
                            b.rating] for b in response.businesses]
        res = sorted(res, key=lambda x: x[-1], reverse=True)
        return json.dumps(res)


@app.route('/')
def hello_world():
    return render_template("index.html")

api.add_resource(YelpApi, "/yelp/api/search")

if __name__ == '__main__':
    app.run()
