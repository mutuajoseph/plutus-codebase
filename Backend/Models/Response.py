from Models.Config import db

class Response(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.user_id'))
    choice_id = db.Column(db.Integer, db.ForeignKey('choice.id'))
    question_id = db.Column(db.Integer, db.ForeignKey('question.id'))

    # user = db.relationship('User', back_populates='responses')