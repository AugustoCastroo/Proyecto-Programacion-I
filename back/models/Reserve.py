from database import db

class Reserve(db.Model):
    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    parking_id = db.Column(db.Integer, db.ForeignKey('parking.id'))


def __str__(self):
    return (
        f'id {self.id}'
    )
