from flask import Blueprint, request, jsonify
from models import User
from database import db


auth = Blueprint('auth', __name__, url_prefix='/auth')  # /auth/login

# LOGIN

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if email == 'test@example.com' and password == 'password':
        response = {'Mensaje': 'Inicio sesion correctamente'}
        return jsonify(response), 200
    else:
        response = {'Mensaje': 'Error'}
        return jsonify(response), 401

# REGISTER

@auth.route('/register', methods=['POST'])
def register():
    name=request.json.get('name')
    email=request.json.get('email')
    password=request.json.get('password')

    print (name, email, password)

    return jsonify({'mensaje': 'Usuario creado correctamente'}), 200
    


