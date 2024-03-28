# Car Capsule Museum
<img width="1440" alt="Screenshot 2024-03-27 at 8 25 17 PM" src="https://github.com/kcastillo3/phase-4-carcapsule-museum/assets/134651057/bc13f49a-abbe-4184-8da3-d1fbecb4fead">

<img width="1440" alt="Screenshot 2024-03-27 at 8 36 17 PM" src="https://github.com/kcastillo3/phase-4-carcapsule-museum/assets/134651057/5f462b64-f104-4183-9317-b586a458c30f">

## Table of Contents
- [Project Overview](#project-overview)
- [Team Members](#team-members)
- [Installation](#installation)
  - [Frontend Setup](#frontend-setup)
  - [Backend Setup](#backend-setup)
- [Project Timeline](#project-timeline)
- [Domain Model](#domain-model)
- [User Stories](#user-stories)
- [Stretch Goals](#stretch-goals)
- [Authors and Acknowledgment](#authors-and-acknowledgment)

## Project Overview

The "Car Capsule Museum" is a virtual museum designed for car enthusiasts to explore and review a curated collection of automobiles. This application offers an interactive platform for users to discover unique cars, share insights, and connect with a community of like-minded individuals.

## Team Members

- Kevin Castillo
- Desiah Barnett
- Batsheva Parshan
- Thomas Korley

## Installation

### Frontend Setup

1. Clone the repository and navigate to the frontend directory:
   ```bash
   cd client
2. Install the necessary npm packages:
   ```bash
   npm install
3. Start the React application:
   ```bash
   npm start
The frontend will be accessible at `http://localhost:3000`.

### Backend Setup

1. Ensure you have `pipenv` installed on your system.

2. Install the backend dependencies using pipenv:
   ```bash
   pipenv install
3. Activate the virtual environment:
   ```bash
   pipenv shell
4. Navigate to the backend directory:
   ```bash
   cd server
5. Initialize the database with seed data:
   ```bash
   python seed.py
6. Start the backend server:
   ```bash
   python app.py   
## Project Timeline

**Wednesday:**
- Set up Flask App and define data models.
- Set up React App and initial routes.

**Thursday:**
- Complete database setup.
- Implement Components, Forms, and Validation in React.

**Friday:**
- Develop and test functional API endpoints in Flask.

**Saturday:**
- Implement CRUD operations for at least one resource.

**Sunday/Monday:**
- Merge Frontend and Backend code, ensuring seamless data flow.

**Tuesday:**
- Apply Styling and CSS to enhance the user interface.

**Wednesday:**
- Conduct thorough debugging and prepare for the project presentation.

## Domain Model

User—< Review >—Car

**Relationships:**
- Users to Reviews: One-to-Many
- Cars to Reviews: One-to-Many
- Users to Cars through Reviews: Many-to-Many

## User Stories

- Users can view a list of cars and their details.
- Users can create a new review.
- Users can update their review.
- Users can delete their review.
- Users can read other reviews.

## Stretch Goals

- Create an admin user role for adding new cars to the museum collection.
- Enable users to subscribe to cars and follow reviews.

## Authors and Acknowledgment

This project was made possible through the collective efforts of our dedicated team members:

- **Kevin Castillo**
- **Desiah Barnett**
- **Batsheva Parshan**
- **Thomas Korley**

Who have contributed to the development of "Car Capsule Museum."

### Batsheva Parshan (BP):
- `App.js`
- `Header.js`
- `NavBar.js`
- `Models.py`
- `App.py`

### Desiah Barnett (DB):
- `Home.js`
- `CarPage.js`
- `CarList.js`
- `Seed.py`
- `App.py`

### Thomas Korley (TK):
- `CarCard.js`
- `ReviewForm.js`
- `ReviewList.js`
- `Models.py`
- `App.py`

### Kevin Castillo (KC):
- `Login.js`
- `UserAccount.js`
- `Logout.js`
- `SignUp.js`
- `SuccessfulLogin.js`
- `App.py`
