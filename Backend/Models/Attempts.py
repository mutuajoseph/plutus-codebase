from Models.Config import db
from datetime import datetime
from sqlalchemy import DateTime

class Attempts(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'))
    created_at = db.Column(DateTime, default=datetime.utcnow)


    # user = db.relationship('User', back_populates='tempts')