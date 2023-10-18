from database import db

class Parking(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(250))
    price = db.Column(db.String(250))
    disponibility = db.Column(db.String(250))

    parking_reserve = db.relationship("Reserve", backref='parking')


    def str (self):
        return(
            f'id: {self.id}, '
            f'name: {self.name}, '
            f'price: {self.price}, '
            f'disponibility: {self.disponibility}, '
        )