import React, { useState } from "react";

function Feedback() {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ name, rating, comment });
    setName("");
    setRating("");
    setComment("");
  };

  return (
    <div className="feedback-container">
      <h2>📝 Classroom Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Student Name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <select
          value={rating}
          required
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="">Select Rating</option>
          <option>Excellent</option>
          <option>Good</option>
          <option>Average</option>
          <option>Poor</option>
        </select>

        <textarea
          placeholder="Enter your feedback"
          value={comment}
          required
          onChange={(e) => setComment(e.target.value)}
        ></textarea>

        <button type="submit">Submit Feedback</button>
      </form>

      {submittedData && (
        <div className="output">
          <h3>📢 Submitted Feedback</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Rating:</b> {submittedData.rating}</p>
          <p><b>Comment:</b> {submittedData.comment}</p>
        </div>
      )}

      {/* Internal CSS */}
      <style>{`
        .feedback-container {
          max-width: 450px;
          margin: 50px 650px;
          padding: 30px 25px;
          border-radius: 15px;
          background: linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          color: #333;
          margin-bottom: 20px;
        }

        form input, form select, form textarea {
          width: 100%;
          padding: 12px 15px;
          margin: 10px 0;
          border-radius: 10px;
          border: 1px solid #ccc;
          outline: none;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        form input:focus, form select:focus, form textarea:focus {
          border-color: #4caf50;
          box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
        }

        select {
          background-color: #fff;
        }

        textarea {
          resize: none;
          height: 90px;
        }

        button {
          width: 100%;
          padding: 12px;
          background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          font-size: 16px;
          font-weight: 600;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          background: linear-gradient(90deg, #2575fc 0%, #6a11cb 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
        }

        .output {
          margin-top: 25px;
          padding: 20px;
          background: #fff3e0;
          border-left: 6px solid #ff9800;
          border-radius: 12px;
          text-align: left;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .output h3 {
          color: #ff5722;
          margin-bottom: 12px;
        }

        .output p {
          margin: 6px 0;
          color: #555;
        }
      `}</style>
    </div>
  );
}

export default Feedback;
