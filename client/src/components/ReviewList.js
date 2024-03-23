import React, { useState, useEffect } from 'react';

const ReviewList = ({ carId }) => {
  const [reviews, setReviews] = useState([]);
  const [replyTexts, setReplyTexts] = useState({}); // Manage reply texts for each review

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`http://localhost:5555/review_list/${carId}`);
        if (!response.ok) throw new Error('Failed to fetch reviews');
        
        const reviewsData = await response.json();
        setReviews(reviewsData);
        // Initialize reply texts for fetched reviews
        const initialReplyTexts = reviewsData.reduce((acc, review) => ({...acc, [review.id]: ''}), {});
        setReplyTexts(initialReplyTexts);
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
      // Refreshing the local state to reflect the deletion
      setReviews(reviews.filter(review => review.id !== id));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleReplyChange = (id, text) => {
    setReplyTexts({ ...replyTexts, [id]: text });
  };

  const handleReply = (id) => {
    const updatedReviews = reviews.map(review => {
      if (review.id === id) {
        return {
          ...review,
          replies: [...(review.replies || []), replyTexts[id]]
        };
      }
      return review;
    });
    setReviews(updatedReviews);
    setReplyTexts({ ...replyTexts, [id]: '' });
  };

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <div>{review.review}</div>
            <ul>
              {review.replies && review.replies.map((reply, replyIndex) => (
                <li key={replyIndex}>{reply}</li>
              ))}
            </ul>
            <textarea 
              placeholder="Reply..." 
              value={replyTexts[review.id]} 
              onChange={(e) => handleReplyChange(review.id, e.target.value)}
            ></textarea>
            <button onClick={() => handleReply(review.id)}>Submit Reply</button>
            {/* Update and Delete buttons for each review */}
            <button onClick={() => updateReview(review.id, review.review)}>Update Review</button>
            <button onClick={() => deleteReview(review.id)}>Delete Review</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
