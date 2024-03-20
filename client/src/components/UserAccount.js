// UserAccount.js
import React, { useEffect, useState } from 'react';
import ReviewList from './ReviewList';

const UserAccount = () => {
  // State to store user's reviews
  const [userReviews, setUserReviews] = useState([]);

  // Mock function to fetch user's reviews
  const fetchUserReviews = () => {
    // Assuming you have an API endpoint to fetch user's reviews
    // Replace the URL with your actual endpoint
    fetch('https://your-api-url.com/user/reviews')
      .then(response => response.json())
      .then(data => {
        // Update userReviews state with fetched reviews
        setUserReviews(data.reviews);
      })
      .catch(error => console.error('Error fetching user reviews:', error));
  };

  // Fetch user's reviews on component mount
  useEffect(() => {
    fetchUserReviews();
  }, []);

  return (
    <div>
      {/* Title */}
      <h2>User Account</h2>
      {/* Display user's reviews */}
      <h3>Your Reviews</h3>
      {userReviews.length > 0 ? (
        <ReviewList reviews={userReviews} />
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
}

export default UserAccount;
