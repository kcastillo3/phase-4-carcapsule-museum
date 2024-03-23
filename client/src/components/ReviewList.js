import React, { useState } from 'react';

const ReviewList = ({ reviews, onReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleReply = (reviewIndex) => {
    onReply(reviewIndex, replyText);
    // Clear the reply textarea after submitting
    setReplyText('');
  };

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <div>{review.review}</div>
            {review.replies && (
              <ul>
                {review.replies.map((reply, replyIndex) => (
                  <li key={replyIndex}>{reply}</li>
                ))}
              </ul>
            )}
            <textarea
              placeholder="Reply..."
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
            />
            <button onClick={() => handleReply(index)}>Submit Reply</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
