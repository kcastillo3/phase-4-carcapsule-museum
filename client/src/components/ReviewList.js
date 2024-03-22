import React from 'react';

const ReviewList = ({ reviews, onReply }) => {
  const handleReply = (reviewIndex, replyText) => {
    onReply(reviewIndex, replyText);
  };

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <div>{review.review}</div>
            <textarea placeholder="Reply..." onChange={(e) => review.replyText = e.target.value}></textarea>
            <button onClick={() => handleReply(index, review.replyText)}>Submit Reply</button>
            <ul>
              {review.replies && review.replies.map((reply, replyIndex) => (
                <li key={replyIndex}>{reply}</li>s
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewList;
