from flask_restful import Resource
from flask import request, jsonify
from models.User import User
from models.Parking import Parking
from models.Reserve import Reserve
from database import db


class ReservesList(Resource):
    def post(self):
        user_id = request.json['user_id']
        parking_id = request.json['parking_id']
        print(user_id, parking_id)

        user = User.query.get(user_id)
        parking = Parking.query.get(parking_id)

        reserve = Reserve(user=user, parking=parking)

        db.session.add(reserve)
        db.session.commit()
        return jsonify({'message': 'Parking created successfully'})
    
    def get(self):

        reserves = db.session.query(Reserve).all()

        result = []
        for reserve in reserves:
            result.append({
                'id': reserve.id,
            })

        response = jsonify(result)
        response.status_code = 200
        return response

class ReserveList(Resource):
    
    def get(self, id):

        user = User.query.get(id)
        reserves = Reserve.query.filter_by(user=user).all()

        result = []
        for reserve in reserves:
            product = Parking.query.get(reserve.parking_id)
            result.append({
                'id': product.id,
                'name': product.name,
                'price': product.price,
                'disponibility': product.disponibility
            })

        return jsonify(result)
    
    def delete(self, id):

        parking = Parking.query.get(id)
        reserve = Reserve.query.filter_by(parking=parking).first()

        db.session.delete(reserve)
        db.session.commit()
        return jsonify({'message': 'Parking deleted successfully'})

    def put(self, id):

        user = User.query.get(id)
        reserve.name = request.json('name', reserve.name)
        reserve.price = request.json('price', reserve.price)
        reserve.disponibility = request.json('disponibility', reserve.disponibility)

        print(reserve.name, reserve.price, reserve.disponibility)

        db.session.commit()
        return jsonify({'message': 'Parking updated successfully'})