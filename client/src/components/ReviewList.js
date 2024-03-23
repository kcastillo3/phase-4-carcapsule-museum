import React, { useState, useEffect } from 'react';

const ReviewList = ({ carId }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5555/review_list/${carId}`);
        if (!response.ok) throw new Error('Failed to fetch reviews');
        
        const reviewsData = await response.json();
        setReviews(reviewsData);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [carId]);

  const updateReview = async (id, updatedContent) => {
    try {
      const response = await fetch(`http://localhost:5555/review_list/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review: updatedContent }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      console.log('Update Success');
      // Refreshing the local state to reflect the update
      setReviews(reviews.map(review => review.id === id ? { ...review, review: updatedContent } : review));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteReview = async (id) => {
    try {
      const response = await fetch(`http://localhost:5555/review_list/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Network response was not ok');
      console.log('Delete Success');
      // Refreshing the local state to reflect the deletion
      setReviews(reviews.filter(review => review.id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReply = (index, replyText) => {
    // For now, replies are managed in the component state and not saved to the backend
    const updatedReviews = [...reviews];
    updatedReviews[index] = { ...updatedReviews[index], replyText: '', replies: [...(updatedReviews[index].replies || []), replyText] };
    setReviews(updatedReviews);
  };

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <div>{review.review}</div>
            <textarea placeholder="Reply..." value={review.replyText} onChange={(e) => {
              const updatedReviews = [...reviews];
              updatedReviews[index].replyText = e.target.value;
              setReviews(updatedReviews);
            }}></textarea>
            <button onClick={() => handleReply(index, review.replyText)}>Submit Reply</button>
            <ul>
              {review.replies && review.replies.map((reply, replyIndex) => (
                <li key={replyIndex}>{reply}</li>
              ))}
            </ul>
            <button onClick={() => updateReview(review.id, prompt("Update your review:", review.review))}>Update Review</button>
            <button onClick={() => deleteReview(review.id)}>Delete Review</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
