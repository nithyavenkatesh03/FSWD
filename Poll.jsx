import React, { useState } from "react";

function Poll() {
  const [votes, setVotes] = useState({
    OptionA: 0,
    OptionB: 0,
    OptionC: 0,
  });

  const handleVote = (option) => {
    setVotes({ ...votes, [option]: votes[option] + 1 });
  };

  const totalVotes = votes.OptionA + votes.OptionB + votes.OptionC;

  return (
    <div className="poll-container">
      <h2>📊 Classroom Online Poll</h2>
      <p><b>Question:</b> Which subject do you like the most?</p>

      <button className="math" onClick={() => handleVote("OptionA")}>
        Mathematics
      </button>

      <button className="science" onClick={() => handleVote("OptionB")}>
        Science
      </button>

      <button className="cs" onClick={() => handleVote("OptionC")}>
        Computer Science
      </button>

      <div className="result">
        <h3>Live Results</h3>
        <p>Mathematics: {votes.OptionA}</p>
        <p>Science: {votes.OptionB}</p>
        <p>Computer Science: {votes.OptionC}</p>
        <p><b>Total Votes:</b> {totalVotes}</p>
      </div>

      {/* Internal CSS */}
      <style>{`
        .poll-container {
          width: 400px;
          margin: 50px 650px;
          padding: 25px 30px;
          text-align: center;
          border-radius: 15px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          font-family: 'Arial', sans-serif;
        }

        h2 {
          margin-bottom: 15px;
        }

        p {
          font-size: 16px;
        }

        button {
          width: 100%;
          margin: 10px 0;
          padding: 12px;
          font-size: 16px;
          color: #ffffff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button.math {
          background-color: #ff6b6b;
        }

        button.science {
          background-color: #6bcB77;
        }

        button.cs {
          background-color: #4dabf7;
        }

        button:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        .result {
          margin-top: 25px;
          text-align: left;
          background: rgba(255, 255, 255, 0.1);
          padding: 15px;
          border-radius: 10px;
        }

        .result h3 {
          margin-bottom: 10px;
          color: #ffd700;
        }

        .result p {
          margin: 5px 0;
        }
      `}</style>
    </div>
  );
}

export default Poll;
