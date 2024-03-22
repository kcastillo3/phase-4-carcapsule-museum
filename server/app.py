#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.route('/review_list', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    review_list = []
    for review in reviews:
        review_list.append({
            'id': review.id,
            'name': review.name,
            'email': review.email,
            'review': review.review
        })
    return jsonify(review_list)

@app.route('/review_list', methods=['POST'])
def add_review():
    data = request.json
    new_review = Review(name=data['name'], email=data['email'], review=data['review'])
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
    return jsonify(cars)

@app.route('/cars_list/<int:car_id>', methods=['GET'])
def get_car_details(car_id):
    car = next((car for car in cars if car['id'] == car_id), None)
    if car:
        return jsonify(car)
    else:
        return jsonify({'message': 'Car not found'}), 404
    
@app.route('/api/users', methods=['POST'])
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
@app.route('/api/users/login', methods=['POST'])
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
