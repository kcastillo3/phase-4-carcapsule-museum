#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import Users, Reviews, Cars
# Add your model imports

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.route('/cars_card/<int:car_id>', methods=['GET'])
def get_car_details(car_id):
    car = Cars.query.filter_by(id=car_id).first()
    if car:
        car_details = {
            'id': car.id,
            'name': car.name,
            'make': car.make,
            'model': car.model,
            'year': car.year,
            'description': car.description,
            'imageUrl': car.imageUrl  # Make sure this is included
        }
        return jsonify(car_details)
    else:
        return jsonify({'message': 'Car not found'}), 404

@app.route('/review_form/<int:car_id>', methods=['POST'])
def add_review_for_car(car_id):
    data = request.json
    # Assuming `name` and `email` are part of the review model, or handled differently
    new_review = Reviews(
        car_id=car_id, 
        user_id=data['user_id'],  # Assuming our user's ID is sent with the request
        content=data['review']
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify({'message': 'Review added successfully'}), 201

@app.route('/review_list/<int:id>', methods=['PUT'])
def update_review(id):
    review = Review.query.get(id)
    if not review:
        return jsonify({'message': 'Review not found'}), 404
    
    data = request.json
    review.name = data.get('name', review.name)
    review.email = data.get('email', review.email)
    review.review = data.get('review', review.review)
    
    db.session.commit()
    return jsonify({'message': 'Review updated successfully'}), 200

@app.route('/review_list/<int:id>', methods=['DELETE'])
def delete_review(id):
    review = Review.query.get(id)
    if not review:
        return jsonify({'message': 'Review not found'}), 404
    db.session.delete(review)
    db.session.commit()
    return jsonify({'message': 'Review deleted successfully'}), 204

@app.route('/cars_list', methods=['GET'])
def get_all_cars():
    cars = Cars.query.all()  # This line queries our database for all car records
    car_list = [{'id': car.id, 'name': car.name, 'make': car.make, 'model': car.model, 'year': car.year} for car in cars]
    return jsonify(car_list)
    
@app.route('/users', methods=['POST'])
def register_user():
    data = request.json
    email = data.get('email')
    username = data.get('username')
    password = data.get('password')

    # Check if user already exists
    existing_user = Users.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({'message': 'User with this email already exists'}), 400

    # Hash the password
    password_hash = generate_password_hash(password)

#     # Create and add new user to database
    new_user = Users(email=email, username=username, password_hash=password_hash)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

# Log in an existing user
@app.route('/users/login', methods=['POST'])
def login_user():
    data = request.json
    email = data.get('email')
    password = data.get('password')

#     # Find user by email
    user = Users.query.filter_by(email=email).first()

#     # Check if user exists and password is correct
    if user and check_password_hash(user.password_hash, password):
        # Return success message or JWT token for authentication
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'message': 'Invalid email or password'}), 401
    
if __name__ == '__main__':
    app.run(port=5555, debug=True)
