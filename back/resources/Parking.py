from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from models.Parking import Parking
from models.Reserve import Reserve
from database import db

class ParkingList(Resource):
    def post(self):
        name = request.json['name']
        price = request.json['price']
        disponibility = request.json['disponibility']

        parking = Parking(name=name, price=price, disponibility=disponibility)

        db.session.add(parking)
        db.session.commit()
        return jsonify({'message': 'Parking created successfully'})
    
    def get(self):
        parkings = db.session.query(Parking).all()
        print('parking', parkings)
        result = []
        for parking in parkings:
            result.append({
                'id': parking.id,
                'name': parking.name,
                'price': parking.price,
                'disponibility': parking.disponibility
            })
        response = jsonify(result)
        response.status_code = 200
        return response