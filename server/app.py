#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, jsonify, Flask
from flask_restful import Resource
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS

# After creating your Flask app instance
app = Flask(__name__)
CORS(app, resources={r"/add-car": {"origins": "http://localhost:3000"}})

# Your route definitions follow


# Local imports
from config import app, db, api
from models import Users, Reviews, Cars
# Add your model imports

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

@app.route('/add-car', methods=['POST'])
def add_car():
    try:
        data = request.json
        existing_car = Cars.query.filter_by(name=data['name']).first()
        if existing_car:
            return jsonify({"error": "A car with the same name already exists"}), 400

        new_car = Cars(
            name=data['name'],
            make=data['make'],
            model=data['model'],
            year=data['year'],
            description=data['description'],
            imageUrl=data['imageUrl']
        )
        db.session.add(new_car)
        db.session.commit()
        # Ensure our Cars model has a method to serialize the data when using SerializerMixin
        return jsonify({"message": "Car added successfully", "car": new_car.serialize()}), 201
    except Exception as e:
        print(e)
        return jsonify({"error": "An error occurred while adding the car"}), 500

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
    # Join Reviews with Users to fetch username along with review data
    reviews = db.session.query(
        Reviews.id,
        Reviews.content,
        Reviews.user_id,
        Reviews.car_id,
        Users.username
    ).join(
        Users, Reviews.user_id == Users.id
    ).filter(
        Reviews.car_id == car_id
    ).all()

    if not reviews:
        return jsonify({'message': 'No reviews found for this car'}), 404

    reviews_list = [
        {
            'id': review.id,
            'content': review.content,
            'username': review.username,  # Include the username in the response
            'user_id': review.user_id,
            'car_id': review.car_id
        }
        for review in reviews
    ]
    return jsonify(reviews_list)

@app.route('/review_form/<int:car_id>', methods=['POST'])
def add_review_for_car(car_id):
    data = request.get_json()
    print("Received data:", data)  # Debugging line to log received data
    if not data or 'user_id' not in data or 'review' not in data:
        return jsonify({'error': 'Missing required fields: user_id or review'}), 400
    
    
    try:
        new_review = Reviews(
            car_id=car_id,
            user_id=data['user_id'],
            content=data['review']
        )
        db.session.add(new_review)
        db.session.commit()
        return jsonify({'message': 'Review added successfully'}), 201
    except Exception as e:  # Catch any errors during database operations
        print(e)  # Log the exception
        return jsonify({'error': 'Failed to add review'}), 500

@app.route('/review_list/<int:id>', methods=['PUT'])
def update_review(id):
    review = Reviews.query.get(id)  # Fetch the review by its ID
    if not review:
        return jsonify({'message': 'Review not found'}), 404  # Return a 404 if not found
    
    data = request.json
    # Update the 'content' field of the review with the new content provided in the request
    # Make sure the frontend sends the updated content with the key 'content'
    review.content = data.get('content', review.content)
    
    db.session.commit()  # Commit the changes to the database
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

    # Create and add new user to database
    new_user = Users(email=email, username=username, password_hash=password_hash)
    db.session.add(new_user)
    db.session.commit()

    # Return user_id and username along with success message
    return jsonify({
        'message': 'User registered successfully',
        'user_id': new_user.id,
        'username': new_user.username
    }), 201

# Log in an existing user
@app.route('/users/login', methods=['POST'])
def login_user():
    data = request.json
    email = data.get('email')
    password = data.get('password')

    user = Users.query.filter_by(email=email).first()

    if user and check_password_hash(user.password_hash, password):
        # Include user_id in the successful login response
        return jsonify({'message': 'Login successful', 'user_id': user.id}), 200
    else:
        return jsonify({'message': 'Invalid email or password'}), 401
    
if __name__ == '__main__':
    app.run(port=5555, debug=True)
