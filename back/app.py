from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api

from database import db, FULL_URL_DB
from models import User

from resources.auth.routes import auth
from resources.Parking import ParkingsList, ParkingList
from resources.Reserve import ReservesList, ReserveList

app = Flask(__name__)
api = Api(app)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = FULL_URL_DB
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

migrate = Migrate()
migrate.init_app(app,db)

# Blueprint
app.register_blueprint(auth)

# Resources
api.add_resource(ParkingsList, '/parkings')
api.add_resource(ParkingList, '/parkings/<int:id>')
api.add_resource(ReservesList, '/reserves')
api.add_resource(ReserveList, '/reserves/<int:id>')




@app.route('/')
def home():
    print('home')
    return jsonify({'mensaje': 'Home'})

if __name__ == '__main__':
    app.run(debug=True)
