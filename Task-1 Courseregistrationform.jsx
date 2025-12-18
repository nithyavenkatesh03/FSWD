import { useState } from "react";
import bgImg from "../assets/course.png";

export default function Courseregistrationform() {
  const [department, setDepartment] = useState("");

  const courses = {
    "Computer Science": [
      "Design Thinking",
      "Cybersecurity",
      "Data Science",
      "Machine Learning",
    ],
    Commerce: [
      "Design Thinking",
      "Business Analytics",
      "Digital Marketing",
    ],
    Science: [
      "Design Thinking",
      "Data Science",
      "Machine Learning",
    ],
  };

  function handleSubmit(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
  }

  return (
    <>
      <style>{`
        .overlay {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f0f0f0;
          padding: 20px;
        }

        .form-container {
          width: 400px;
          background-image: url(${bgImg});
          background-size: cover;
          background-position: center;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 0 15px rgba(0,0,0,0.3);
        }

        .inner-box {
          background: rgba(255,255,255,0.95);
          padding: 20px;
          border-radius: 10px;
        }

        input, textarea, select {
          width: 100%;
          padding: 10px;
          margin-bottom: 12px;
          border-radius: 6px;
          border: 1px solid #999;
        }

        .radio-group {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .courses {
          margin: 10px 0 15px;
          font-size: 14px;
        }

        .courses label {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }

        .terms {
          margin: 15px 0;
          font-size: 13px;
        }

        .terms label {
          display: flex;
          gap: 10px;
          align-items: flex-start;
        }

        .submit-btn {
          width: 100%;
          padding: 12px;
          background: #0047ff;
          color: white;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          cursor: pointer;
        }

        .submit-btn:hover {
          background: #0035c9;
        }
      `}</style>

      <div className="overlay">
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="inner-box">
            <h3 style={{ textAlign: "center", marginBottom: "15px" }}>
              Course Registration Form
            </h3>

            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea rows="2" placeholder="Register Number" required />

            <label>Gender:</label>
            <div className="radio-group">
              <label><input type="radio" name="gender" required /> Male</label>
              <label><input type="radio" name="gender" /> Female</label>
            </div>

            {/* Department */}
            <label>Department:</label>
            <select
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            >
              <option value="">Select Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Commerce">Commerce</option>
              <option value="Science">Science</option>
            </select>

            {/* Courses */}
            {department && (
              <>
                <label>Choose Courses:</label>
                <div className="courses">
                  {courses[department].map((course) => (
                    <label key={course}>
                      <input type="checkbox" />
                      {course}
                    </label>
                  ))}
                </div>
              </>
            )}

            <label>Upload ID Card:</label>
            <input type="file" accept=".pdf,.doc,.docx" />

            <div className="terms">
              <label>
                <input type="checkbox" required />
                <span>
                  I hereby declare that the information provided is true and
                  correct. I agree to follow the rules and regulations of the
                  institution.
                </span>
              </label>
            </div>

            <button className="submit-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
