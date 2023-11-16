from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from models.Parking import Parking
from models.Reserve import Reserve
from database import db

class ParkingsList(Resource):
    
    def post(self):
        name = request.json['name']
        price = request.json['price']
        disponibility = request.json['disponibility']

        parking = Parking(name=name, price=price, disponibility=disponibility)
        
        db.session.add(parking)
        db.session.commit()
        return jsonify({'mensaje': 'Parking agregado con éxito.'})
    
    
    def get(self): 
        parkings = db.session.query(Parking).all()
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

class ParkingList(Resource):
    def put(self, id):
        parking = Parking.query.get_or_404(id)
        parking.name = request.json.get('name',parking.name)
        parking.price = request.json.get('price',parking.price)
        parking.disponibility = request.json.get('disponibility',parking.disponibility)
        
        print(parking.name, parking.price, parking.disponibility)
        
        db.session.commit()
        return jsonify({'mensaje': 'Parking editado con éxito.'})
    
    def delete(self, id):
        parking = Parking.query.get_or_404(id)
        db.session.delete(parking)
        db.session.commit()
        return jsonify({'mensaje': 'Parking eliminado con éxito.'})