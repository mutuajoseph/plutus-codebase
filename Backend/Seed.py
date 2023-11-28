from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from Models.Choices import Choice
from Models.Attempts import Attempts
from Models.Profile import Profile
from Models.Questions import Question
from Models.Users import User
from Models.Response import Response
# from app import app

# Create a connection to your database
engine = create_engine('sqlite:///instance/survey.db')
Session = sessionmaker(bind=engine)
session = Session()

# Create sample data for the User model
user1 = User(email='user1@example.com', password='password1', role='user')
user2 = User(email='user2@example.com', password='password2', role='admin')

# Create sample data for the Profile model
profile1 = Profile(user=user1, type='Profile Type 1', body='Profile Body 1')
profile2 = Profile(user=user2, type='Profile Type 2', body='Profile Body 2')

# Create sample data for the Question model
question1 = Question(question='What is your favorite color?')
question2 = Question(question='How old are you?')

# Create sample data for the Choice model
choice1 = Choice(score=1, question=question1)
choice2 = Choice(score=2, question=question1)
choice3 = Choice(score=3, question=question2)
choice4 = Choice(score=4, question=question2)

# Create sample data for the Attempts model
attempt1 = Attempts(user=user1)
attempt2 = Attempts(user=user2)

# Create sample data for the Response model
response1 = Response(user_id=user1.user_id, choice_id=choice1.id, question_id=question1.id)
response2 = Response(user_id=user1.user_id, choice_id=choice3.id, question_id=question2.id)
response3 = Response(user_id=user2.user_id, choice_id=choice2.id, question_id=question1.id)
response4 = Response(user_id=user2.user_id, choice_id=choice4.id, question_id=question2.id)

# Add the data to the session and commit it to the database
session.add_all([user1, user2, profile1, profile2, question1, question2, choice1, choice2, choice3, choice4, attempt1, attempt2, response1, response2, response3, response4])
session.commit()

# Close the session
session.close()
