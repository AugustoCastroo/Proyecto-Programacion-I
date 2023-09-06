from flask import Blueprint, request, jsonify
from models.User import User
from database import db


auth = Blueprint('auth', __name__, url_prefix='/auth')  # /auth/login

# LOGIN

@auth.route('/login', methods=['POST'])
def login():
    print("Inicio de sesion correcto")
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    emailDb = User.query.filter_by(email=email).first()
    if emailDb and emailDb.password == password:
        response = ({'mesaje': 'Inicio sesion correctamente'})
        return jsonify(response), 200
    else:
        response = {'Mensaje': 'Error'}
        return jsonify(response), 401


    

# REGISTER

@auth.route('/register', methods=['POST'])
def register():
    print("Registro correcto")
    name=request.json.get('name')
    email=request.json.get('email')
    password=request.json.get('password')

    print (name, email, password)

    user = User(name=name, email=email, password=password)
    db.session.add(user)
    db.session.commit()

    return jsonify({'mesaje': 'Usuario creado correctamente'})
