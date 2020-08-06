import os
import uuid
from typing import Dict, Any, Optional

from flask_cors import CORS
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPTokenAuth
from flask import Flask, Response, request

from sqlalchemy.dialects.postgresql import UUID

# Initialize App
app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
auth = HTTPTokenAuth(scheme='Bearer')

# Set config vars
app.config['SQLALCHEMY_DATABASE_URI'] = \
    os.environ.get('DATABASE_URL', 'postgres://wedding@127.0.0.1/wedding')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize SQLAlchemy
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Guests(db.Model):
    """
    Guest act as the users in this app. Every guest will receive a unique 5
    digit code. They will be able to authorize using this code.
    """
    __tablename__ = 'guests'

    id = db.Column(
        UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True,
        nullable=False)
    access_code = db.Column(db.String(), unique=True)
    name = db.Column(db.String())
    attends = db.Column(db.Boolean(), default=False)
    replied = db.Column(db.Boolean(), default=False)
    plus_one = db.Column(db.Boolean(), default=False)
    plus_one_name = db.Column(db.String(), nullable=True)
    plus_one_allowed = db.Column(db.Boolean(), default=False)
    phone_number = db.Column(db.String(), nullable=True)

    UPDATE_ALLOWED = [
        'attends', 'phone_number', 'plus_one', 'plus_one_name'
    ]

    def to_json(self) -> Dict[str, Any]:
        """
        Return an object representation of the guest.
        :return:
        """
        return {
            'id': self.id,
            'name': self.name,
            'attends': self.attends,
            'plus_one_allowed': self.plus_one_allowed,
            'plus_one': self.plus_one,
            'plus_one_name': self.plus_one_name,
            'phone_number': self.phone_number
        }

    def patch(self, data: Dict[str, Any]) -> bool:
        """
        Iterate over the provided fields and if the field is not read-only
        update, the value.
        :return:
        """
        for key, value in data.items():
            if key in self.UPDATE_ALLOWED:
                setattr(self, key, value)
        # We modify the replied status one time.
        self.replied = True
        db.session.add(self)
        return db.session.commit()



@auth.verify_token
def verify_token(token: str) -> Optional[Guests]:
    """
    Guest act as user in this scenario. Every guest will receive a unique code.
    This is the authorization token, based on this information we will attempt
    to retrieve a user.
    :param token:
    :return:
    """
    guests = Guests.query.filter_by(access_code=token).all()
    return guests[0] if len(guests) > 0 else None


def _handle_rsvp_patch() -> Dict[str, Any]:
    """
    Update an authorized user based on the information provided.
    :param path:
    :return:
    """
    auth.current_user().patch(request.json)
    return auth.current_user().to_json()


def _handle_rsvp_get() -> Dict[str, Any]:
    """
    Retrieve the currently registered details of the authorized user.
    :param path:
    :return:
    """
    return auth.current_user().to_json()


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>', methods=['GET', 'PATCH'])
@auth.login_required
def handle_rsvp(path: str):
    """
    Based on the request method call the right function.
    :param path:
    :return:
    """
    handlers = {
        'GET': _handle_rsvp_get,
        'PATCH': _handle_rsvp_patch,
    }
    assert request.method in handlers
    return handlers[request.method]()
