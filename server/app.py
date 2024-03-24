#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import Users, Reviews, Cars
from werkzeug.security import generate_password_hash, check_password_hash  # For password hashing

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

@app.route('/review_list/<int:car_id>', methods=['GET'])
def get_reviews_by_car(car_id):
    reviews = Reviews.query.filter_by(car_id=car_id).all()
    if not reviews:
        return jsonify({'message': 'No reviews found for this car'}), 404

    reviews_list = [
        {
            'id': review.id,
            'content': review.content,
            'user_id': review.user_id,
            'car_id': review.car_id
        }
        for review in reviews
    ]
    return jsonify(reviews_list)

@app.route('/submit_review/<int:car_id>', methods=['POST'])
def submit_review(car_id):
    data = request.get_json()
    print("Received data:", data)  # Debugging line to log received data
    if not data or 'name' not in data or 'email' not in data or 'review' not in data:
        return jsonify({'error': 'Missing required fields: name, email, or review'}), 400
    
    name = data['name']
    email = data['email']
    review = data['review']

    # Basic validation
    if not name.strip() or not email.strip() or not review.strip():
        return jsonify({'error': 'Please fill out all fields'}), 400
    
    # Save review to the database
    try:
        new_review = Reviews(
            car_id=car_id,
            name=name,
            email=email,
            review=review
             # Assuming 'content' is the field name in your Reviews model
        )
        db.session.add(new_review)
        db.session.commit()
        return jsonify({'message': 'Review added successfully'}), 201
    except Exception as e:  # Catch any errors during database operations
        print(e)  # Log the exception
        return jsonify({'error': 'Failed to add review'}), 500

@app.route('/review_list/<int:id>', methods=['PUT'])
def update_review(id):
    review = Reviews.query.get(id)
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
    review = Reviews.query.get(id)
    if not review:
        return jsonify({'message': 'Review not found'}), 404
    db.session.delete(review)
    db.session.commit()
    return jsonify({'message': 'Review deleted successfully'}), 204

@app.route('/cars_list', methods=['GET'])
def get_all_cars():
    cars = Cars.query.all()  # This line queries our database for all car records
    car_list = [
        {
            'id': car.id,
            'name': car.name,
            'make': car.make,
            'model': car.model,
            'year': car.year,
            'imageUrl': car.imageUrl  # Include the imageUrl property
        }
        for car in cars
    ]
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
