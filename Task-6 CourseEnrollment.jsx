import React, { useState } from "react";

function CourseEnroll() {
  const [studentName, setStudentName] = useState("");
  const [course, setCourse] = useState("");
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  const handleEnroll = (e) => {
    e.preventDefault();

    if (studentName && course) {
      setEnrolledCourses([
        ...enrolledCourses,
        { name: studentName, course: course }
      ]);

      setStudentName("");
      setCourse("");
    }
  };

  return (
    <div className="enroll-container">
      <h2>🎓 Course Enrollment Form</h2>

      <form onSubmit={handleEnroll}>
        <input
          type="text"
          placeholder="Student Name"
          value={studentName}
          required
          onChange={(e) => setStudentName(e.target.value)}
        />

        <select
          value={course}
          required
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option>Web Development</option>
          <option>Data Science</option>
          <option>Artificial Intelligence</option>
          <option>Internet of Things</option>
        </select>

        <button type="submit">Enroll</button>
      </form>

      <div className="list">
        <h3>📋 Enrolled Students</h3>

        {enrolledCourses.length === 0 && <p>No enrollments yet</p>}

        <ul>
          {enrolledCourses.map((item, index) => (
            <li key={index}>
              <b>{item.name}</b> – {item.course}
            </li>
          ))}
        </ul>
      </div>

      {/* Updated CSS */}
      <style>{`
        .enroll-container {
          width: 450px;
          margin: 50px 650px;
          padding: 30px;
          border-radius: 15px;
          background: linear-gradient(145deg, #e0f7fa, #e1bee7);
          box-shadow: 0px 8px 20px rgba(0,0,0,0.15);
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        h2 {
          margin-bottom: 20px;
          color: #5d3f6a;
        }

        form input, form select {
          width: 100%;
          padding: 12px 14px;
          margin: 10px 0;
          border-radius: 8px;
          border: 1px solid #9c27b0;
          outline: none;
          transition: all 0.3s ease;
          font-size: 15px;
        }

        form input:focus, form select:focus {
          border-color: #ff4081;
          box-shadow: 0 0 8px rgba(255, 64, 129, 0.3);
        }

        button {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          background: #ff4081;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        button:hover {
          background: #c2185b;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .list {
          margin-top: 25px;
          padding: 20px;
          background: #fff3e0;
          border-radius: 12px;
          text-align: left;
          box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
        }

        .list h3 {
          margin-bottom: 12px;
          color: #ff6f00;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin-bottom: 8px;
          font-size: 15px;
          color: #5d4037;
        }
      `}</style>
    </div>
  );
}

export default CourseEnroll;

