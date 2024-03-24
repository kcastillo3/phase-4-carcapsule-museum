#!/usr/bin/env python3

# Standard library imports
from random import randint, choice

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db, Reviews, Cars, Users

def seed_data():
    # Clear existing data
    db.session.query(Reviews).delete()
    db.session.query(Cars).delete()
    db.session.query(Users).delete()

    cars_data = [
        {
            'year': 1970,
            'make': 'Chevrolet',
            'model': 'Corvette LS5 454',
            'description': 'The Chevrolet Corvette LS5 454 is a classic American sports car known for its powerful engine and iconic design.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/5/42844/3519672/1920x1440/w/1970-chevrolet-corvette-ls5-454',
        },
        {
            'year': 1986,
            'make': 'Mercury',
            'model': 'Capri Mustang RESTOMOD',
            'description': 'The Mercury Capri Mustang RESTOMOD is a custom-built performance car based on the classic Ford Mustang platform.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/1/35530/2584689/1920x1440/w/1986-mercury-capri-mustang-restomodpath/to/car2_image.jpg',
        },
        {
            'year': 1923,
            'make': 'Ford',
            'model': 'Roadster Ratuala Coffin Car',
            'description': 'The Ford Roadster Ratuala Coffin Car is a unique hot rod with a coffin-shaped body, perfect for spooky-themed events.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/6/42211/3437794/1920x1440/w/1923-ford-roadster-ratuala-coffin-car.jpg',
        },
        {
            'year': 1979,
            'make': 'Volkswagen',
            'model': 'Super Beetle Convertible',
            'description': 'The Volkswagen Super Beetle Convertible is a classic German convertible known for its compact size and charming design.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/6/42717/3505997/1920x1440/w/1979-volkswagen-super-beetle-convertible',
        },
        {
            'year': 1969,
            'make': 'AMC',
            'model': 'SC Rambler Hurst',
            'description': 'The AMC SC Rambler Hurst is a rare muscle car with a powerful V8 engine, designed for drag racing enthusiasts.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/2/42618/3508313/1920x1440/w/1969-amc-sc-rambler-hurst',
        },
                {
            'year': 1989,
            'make': 'Batmobile',
            'model': '(1967 Chevrolet Impala)',
            'description': 'The 1989 Batmobile is the iconic vehicle driven by Batman in the 1989 Batman film, known for its sleek design and advanced technology. Almost 20 feet in length, the Batmobile was based on the platform of a 1967 Chevrolet Impala found in London. It was powered by a 327-cubic-inch V-8 Chevrolet engine mounted low in the frame.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/6/42206/3439055/1920x1440/w/1989-batmobile',
        },
        {
            'year': 1937,
            'make': 'Ford',
            'model': 'Cabriolet Street Rod',
            'description': 'The Ford Cabriolet Street Rod is a vintage hot rod with a convertible roof, perfect for cruising down the open road in style.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/6/42160/3427231/1920x1440/w/1937-ford-cabriolet-street-rod',
        },
        {
            'year': 1966,
            'make': 'Jaguar',
            'model': 'E-Type Series 1',
            'description': 'The Jaguar E-Type Series 1 is a classic British sports car known for its elegant design and exceptional performance.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/6/41902/3390374/1920x1440/w/1966-jaguar-e-type-series-1',
        },
        {
            'year': 1970,
            'make': 'Plymouth',
            'model': 'Barracuda Gran Coupe',
            'description': 'The Plymouth Barracuda Gran Coupe is a rare muscle car with a sleek fastback design, powered by a high-performance V8 engine.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/3/41768/3375113/1920x1440/w/1970-plymouth-barracuda-gran-coupe',
        },
        {
            'year': 1971,
            'make': 'Pontiac',
            'model': 'GTO Judge Tribute',
            'description': 'The Pontiac GTO Judge Tribute is a modern recreation of the iconic American muscle car, featuring a bold design and powerful engine.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/2/41385/3341312/1920x1440/w/1971-pontiac-gto-judge-tribute',
        },
        {
            'year': 1946,
            'make': 'Ford',
            'model': 'UTE Restomod',
            'description': 'The Ford UTE Restomod is a customized vintage pickup truck with modern performance enhancements, perfect for daily driving or car shows.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/5/41339/3337257/1920x1440/w/1946-ford-ute-restomod',
        },
        {
            'year': 1961,
            'make': 'MG',
            'model': 'MGA 1600',
            'description': 'The MG MGA 1600 is a classic British sports car known for its timeless design and agile handling, making it a favorite among motoring enthusiasts.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/4/41323/3316418/1920x1440/w/1961-mg-mga-1600',
        },
        {
            'year': 1977,
            'make': 'Citroen',
            'model': '2CV',
            'description': 'The Citroen 2CV is a beloved French economy car known for its quirky design and reliable performance, making it a cultural icon.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/1/40650/3245396/1920x1440/1977-citroen-2cv',
        },
        {
            'year': 1955,
            'make': 'Ford',
            'model': 'Fairlane Crown Victoria',
            'description': 'The Ford Fairlane Crown Victoria is a classic American sedan with a distinctive two-tone paint scheme and spacious interior, perfect for cruising in style.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/2/36959/2745087/1920x1440/w/1955-ford-fairlane-crown-victorias',
        },
        {
            'year': 1967,
            'make': 'Chevrolet',
            'model': 'Camaro Drag Car',
            'description': "The 1967 Chevrolet Camaro Drag Car is a legendary muscle car modified for drag racing competitions. With its powerful engine and lightweight design, it's built for speed and acceleration, making it a formidable contender on the drag strip.",
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/6/39709/3113912/1920x1440/1967-chevrolet-camaro-drag-car',
        },
        {
            'year': 1972,
            'make': 'Buick',
            'model': 'Skylark',
            'description': 'The 1972 Buick Skylark is a classic American car known for its sleek design and smooth ride. With its V8 engine and luxurious interior, it offers a comfortable driving experience while still delivering plenty of power. Whether cruising down the highway or parked at a car show, the Buick Skylark is sure to turn heads.',
            'imageUrl': 'https://cdn.dealeraccelerate.com/streetside/2/42678/3516429/1920x1440/w/1972-buick-skylark',
        },
    ]

    # Insert cars data
    for car in cars_data:
        new_car = Cars(
            name=f"{car['year']} {car['make']} {car['model']}",
            make=car['make'],
            model=car['model'],
            year=car['year'],
            description=car['description'],
            imageUrl=car['imageUrl']
        )
        db.session.add(new_car)
    
    db.session.commit()

    # Create Faker instance
    fake = Faker()

    # Create users
    users = []
    for _ in range(10):  # Create 10 fake users
        user = Users(
            email=fake.email(),
            username=fake.user_name(),
            password_hash=fake.password(length=10)  # Assume you hash passwords in the actual application
        )
        users.append(user)
        db.session.add(user)

    db.session.commit()

    # Create reviews
    cars = Cars.query.all()
    for car in cars:
        for _ in range(randint(1, 5)):  # Each car gets 1 to 5 reviews
            review = Reviews(
                user_id=choice(users).id,
                car_id=car.id,
                review=fake.paragraph()
            )
            db.session.add(review)

    db.session.commit()

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!
        seed_data()
        print("Database seeded!")
        
