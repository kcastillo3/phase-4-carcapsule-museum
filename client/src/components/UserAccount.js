import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const UserAccount = ({ isLoggedIn, onLogout, addCarToList }) => {
  const history = useHistory();
  const [car, setCar] = useState({
    name: '',
    make: '',
    model: '',
    year: '',
    description: '',
    imageUrl: '',  // Ensuring this field is included for the image URL
  });
  const [submitSuccess, setSubmitSuccess] = useState(false); // State to track successful submission

  useEffect(() => {
    if (!isLoggedIn) {
      history.push('/login');
    }
  }, [isLoggedIn, history]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCar(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make sure to replace 'http://localhost:5555/add-car' with our actual Flask endpoint
    const response = await fetch('http://localhost:5555/add-car', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(car),
    });

    if (response.ok) {
      const addedCar = await response.json();
      console.log("Car added successfully:", addedCar);
      // If addCarToList prop is provided, call it to update the car list in parent component
      if(addCarToList) {
        addCarToList(addedCar.car);  // Our backend returns the added car under the 'car' key
      }
      setSubmitSuccess(true); // Set success status
      // Clear form fields after successful submission
      setCar({
        name: '',
        make: '',
        model: '',
        year: '',
        description: '',
        imageUrl: '',
      });
    } else {
      // Handle server errors or invalid inputs
      console.error("Failed to add car");
    }
  };

  return (
    <div className="user-account-container">
      <h2>User Account</h2>
      <button onClick={onLogout}>Logout</button>
      <form onSubmit={handleSubmit}>
      {submitSuccess && (
          <div className="success-message">
            Car successfully added! Check it out in the museum.
          </div>
        )} {/* Display success message */}
        <label>
          Name
          <input
            type="text"
            name="name"
            value={car.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Make
          <input
            type="text"
            name="make"
            value={car.make}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Model
          <input
            type="text"
            name="model"
            value={car.model}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Year
          <input
            type="number"
            name="year"
            value={car.year}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Description
          <textarea
            name="description"
            value={car.description}
            onChange={handleInputChange}
            required
          />
        </label>
        <label>
          Image URL
          <input
            type="text"
            name="imageUrl"
            value={car.imageUrl}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default UserAccount;