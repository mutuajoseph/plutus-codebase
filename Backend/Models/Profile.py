from Models.Config import db
from datetime import datetime
from sqlalchemy import DateTime

class Profile(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'))
    type = db.Column(db.String(255))
    body = db.Column(db.Text)
    created_at = db.Column(DateTime, default=datetime.utcnow)
