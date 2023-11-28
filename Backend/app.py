from flask import Flask
from flask_cors import CORS
from flask_migrate import Migrate
from Models.Config import db
from Models.Attempts import Attempts
from Models.Choices import Choice
from Models.Profile import Profile
from Models.Questions import Question
from Models.Response import Response
from Models.Users import User


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///survey.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
CORS(app)
migrate = Migrate(app, db)
db.init_app(app)
if __name__ == '__main__':
    app.run(port=5555)