from sqlalchemy import Column, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy_serializer import SerializerMixin
from config import db

Base = declarative_base()

class Users(Base, SerializerMixin):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    email = Column(String(255), nullable=False, unique=True)
    username = Column(String(100), nullable=False, unique=True)
    password_hash = Column(String(255), nullable=False)

    reviews = relationship("Reviews", back_populates="user")

    def __repr__(self):
        return f"<User(id={self.id}, email={self.email}, username={self.username})>"

class Cars(Base, SerializerMixin):
    __tablename__ = 'cars'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False, unique=True)
    make = Column(String(100), nullable=False)
    model = Column(String(100), nullable=False)
    year = Column(Integer)
    description = Column(Text)

    reviews = relationship("Reviews", back_populates="car")

    def __repr__(self):
        return f"<Car(id={self.id}, name={self.name}, make={self.make}, model={self.model}, year={self.year}, description={self.description})>"

class Reviews(Base, SerializerMixin):
    __tablename__ = 'reviews'

    id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    car_id = Column(Integer, ForeignKey('cars.id'), nullable=False)
    rating = Column(Integer, nullable=False)
    content = Column(Text, nullable=False)

    user = relationship("Users", back_populates="reviews")
    car = relationship("Cars", back_populates="reviews")

    def __repr__(self):
        return f"<Review(id={self.id}, user_id={self.user_id}, car_id={self.car_id}, rating={self.rating}, content={self.content})>"
