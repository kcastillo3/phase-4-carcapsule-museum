import React, { useState, useEffect } from 'react';

const ReviewList = ({ carId, userId, username, reviewRefreshTrigger }) => {
  const [reviews, setReviews] = useState([]);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  useEffect(() => {
    const fetchReviews = async () => { // Moved fetchReviews inside useEffect
      const response = await fetch(`http://localhost:5555/review_list/${carId}`);
      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      } else {
        console.error('Failed to fetch reviews');
      }
    };

    fetchReviews();
  }, [carId, reviewRefreshTrigger]); // React to changes in carId or reviewRefreshTrigger

  const updateReview = async (id, updatedContent) => {
    const response = await fetch(`http://localhost:5555/review_list/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: updatedContent }),
    });
    if (response.ok) {
      setEditingReviewId(null); // Exit edit mode
      const fetchReviews = async () => { // Re-fetch reviews after update
        const response = await fetch(`http://localhost:5555/review_list/${carId}`);
        if (response.ok) {
          const data = await response.json();
          setReviews(data);
        }
      };
      fetchReviews();
    } else {
      console.error('Failed to update review');
    }
  };

  const deleteReview = async (id) => {
    try {
      // Attempting to delete the review on the backend
      const response = await fetch(`http://localhost:5555/review_list/${id}`, { method: 'DELETE' });
  
      if (!response.ok) {
        // If the backend responds with an error, log it and optionally show an error message to the user
        console.error('Failed to delete review');
        throw new Error('Failed to delete review');
      }
  
      // If the deletion was successful, update the local state to reflect the change
      const remainingReviews = reviews.filter(review => review.id !== id);
      setReviews(remainingReviews);
    } catch (error) {
      console.error('Deletion failed', error);
      // Here you might want to notify the user that the deletion failed
    }
  };

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => {
          const isEditing = editingReviewId === review.id;
          const canEditDelete = parseInt(review.user_id, 10) === parseInt(userId, 10);
  
          const handleUpdateButtonClick = () => {
            setEditingReviewId(review.id);
            setEditingContent(review.content);
          };
  
          return (
            <li key={review.id}>
              <strong>{review.username || 'A user'} says:</strong>
              {isEditing ? (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  updateReview(review.id, editingContent);
                }}>
                  <textarea 
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                  />
                  <button type="submit">Save</button>
                  <button type="button" onClick={() => setEditingReviewId(null)}>Cancel</button>
                </form>
              ) : (
                <div>{review.content}</div>
              )}
              {canEditDelete && !isEditing && (
                <>
                  <button type="button" onClick={handleUpdateButtonClick}>Update</button>
                  <button type="button" onClick={() => deleteReview(review.id)}>Delete</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReviewList;
