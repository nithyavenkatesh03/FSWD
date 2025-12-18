import { useState } from "react";

function OnlineQuiz() {
  const questions = [
    {
      question: "What is the capital of India?",
      options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
      answer: "Delhi",
    },
    {
      question: "React is developed by?",
      options: ["Google", "Microsoft", "Facebook", "Amazon"],
      answer: "Facebook",
    },
    {
      question: "Which symbol is used for JSX?",
      options: ["{}", "< >", "()", "[]"],
      answer: "< >",
    },
  ];

  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");

  const handleOptionClick = (option) => {
    if (selected) return;
    setSelected(option);
    if (option === questions[index].answer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected("");
    setIndex(index + 1);
  };

  return (
    <>
      <style>{`
        body {
          background: #f0f4f8;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .quiz-box {
          width: 450px;
          margin: 60px 650px
          ;
          padding: 30px 25px;
          background: linear-gradient(135deg, #ffffff, #e3f2fd);
          border-radius: 15px;
          box-shadow: 0 15px 30px rgba(0,0,0,0.2);
          transition: transform 0.3s ease;
        }

        .quiz-box:hover {
          transform: translateY(-5px);
        }

        .score {
          text-align: right;
          font-weight: bold;
          color: #1565c0;
          font-size: 18px;
        }

        h2 {
          margin-bottom: 20px;
          color: #0d47a1;
        }

        .option-btn {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: none;
          background: #ffffff;
          cursor: pointer;
          font-size: 16px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: 0.3s all;
        }

        .option-btn:hover {
          background: #bbdefb;
          transform: scale(1.03);
        }

        .correct {
          background-color: #a5d6a7 !important;
          border: 2px solid #2e7d32;
          color: #1b5e20;
        }

        .wrong {
          background-color: #ef9a9a !important;
          border: 2px solid #c62828;
          color: #b71c1c;
        }

        .next-btn {
          margin-top: 20px;
          padding: 12px;
          width: 100%;
          border: none;
          background: #1976d2;
          color: white;
          font-size: 17px;
          font-weight: bold;
          border-radius: 8px;
          cursor: pointer;
          box-shadow: 0 5px 10px rgba(0,0,0,0.15);
          transition: 0.3s all;
        }

        .next-btn:hover {
          background: #0d47a1;
          transform: scale(1.05);
        }

        .result {
          text-align: center;
          color: #0d47a1;
        }

        .result h2 {
          font-size: 28px;
        }

        .result p {
          font-size: 20px;
          font-weight: 500;
          margin-top: 15px;
        }
      `}</style>

      <div className="quiz-box">
        <div className="score">Score: {score}</div>

        {index < questions.length ? (
          <>
            <h2>{questions[index].question}</h2>

            {questions[index].options.map((option) => {
              let btnClass = "option-btn";
              if (selected) {
                if (option === questions[index].answer) {
                  btnClass += " correct";
                } else if (option === selected) {
                  btnClass += " wrong";
                }
              }

              return (
                <button
                  key={option}
                  className={btnClass}
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              );
            })}

            {selected && (
              <button className="next-btn" onClick={nextQuestion}>
                Next Question
              </button>
            )}
          </>
        ) : (
          <div className="result">
            <h2>Quiz Finished 🎉</h2>
            <p>
              Your Score: {score} / {questions.length}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default OnlineQuiz;
