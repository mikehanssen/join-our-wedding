import os
import uuid

from flask import Flask, Response
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
def catch_all(path):
    return Response(
        "<h1>Flask</h1><p>You visited: /%s</p>" % (path), mimetype="text/html")
