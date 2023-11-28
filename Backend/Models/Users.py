from Models.Config import db
from datetime import datetime
from sqlalchemy import DateTime

class User(db.Model):
    user_id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255))
    password = db.Column(db.String(255))
    role = db.Column(db.String(255))
    created_at = db.Column(DateTime, default=datetime.utcnow)
    profiles = db.relationship('Profile', backref='user')
    responses = db.relationship('Response', backref='user_user')
    attempts = db.relationship('Attempts', backref='user')
    # tempts = db.relationship('Attempts', backref='tempts', uselist=False)
