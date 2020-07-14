import os
import uuid

from flask import Flask, Response, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy.dialects.postgresql import UUID

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = \
    os.environ.get('DATABASE_URL', 'postgres://wedding@127.0.0.1/wedding')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Guests(db.Model):
    __tablename__ = 'guests'

    id = db.Column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True,
        nullable=False)
    name = db.Column(db.String())
    attends = db.Column(db.Boolean(), default=False)
    phone_number = db.Column(db.String(), nullable=True)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def handle_rsvp(path):
    # if request.method == 'POST':
    #     if request.is_json:
    #         data = request.get_json()
    #         new_car = CarsModel(name=data['name'], model=data['model'], doors=data['doors'])
    #         db.session.add(new_car)
    #         db.session.commit()
    #         return {"message": f"car {new_car.name} has been created successfully."}
    #     else:
    #         return {"error": "The request payload is not in JSON format"}
    #
    if request.method == 'GET':
        guests = Guests.query.all()
        results = [guest.to_json() for guest in guests]
        return {"count": len(results), "guests": guests}
