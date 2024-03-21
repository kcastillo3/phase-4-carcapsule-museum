import React, { useState } from 'react'

const ReviewForm = ({ onSubmitReview }) => {
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setContent('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your review..."
          required
        ></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  )
}

export default ReviewForm
