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
    
    role = emailDb.role
    idUser = emailDb.id

    if emailDb and emailDb.password == password:
        response = ({'mesaje': 'Inicio sesion correctamente'})
        return jsonify(role=role, idUser=idUser), 200
    
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
    role = '2'

    print (name, email, password, role)

    user = User(name=name, email=email, password=password, role=role)
    db.session.add(user)
    db.session.commit()

    # return jsonify(role=role),200

# GET ITEMS
    registeredEmail = User.query.filter_by(email=email).first()
    idUser = registeredEmail.id
    return jsonify(role=role, idUser=idUser),200

# ADD ITEM

@auth.route('/additem', methods=['POST'])
def addItem():
    print("Agregado correctamente")
    name=request.json.get('name')
    price=request.json.get('price')
    disponibility=request.json.get('disponibility')
    role = '2'

    print (name, price, disponibility, role)

    user = User(name=name, price=price, disponibility=disponibility, role=role)
    db.session.add(user)
    db.session.commit()

