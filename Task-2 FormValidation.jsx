import React, { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    resume: null,
    terms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.resume) {
      newErrors.resume = "Resume is required";
    }

    if (!formData.terms) {
      newErrors.terms = "You must accept terms & conditions";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <>
      {/* CSS Styling */}
      <style>
        {`
          body {
            background: #2ec02eff;
            font-family: Arial, sans-serif;
          }

          .form-container {
            width: 400px;
            margin: 50px 600px;
            background: #ffffff;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          h2 {
            text-align: center;
            margin-bottom: 20px;
            color: #333;
          }

          input[type="text"],
          input[type="file"] {
            width: 100%;
            padding: 10px;
            margin-top: 8px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }

          input:focus {
            outline: none;
            border-color: #007bff;
          }

          .error {
            color: red;
            font-size: 13px;
            margin-top: 4px;
          }

          .terms {
            margin-top: 15px;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          button {
            width: 100%;
            margin-top: 20px;
            padding: 10px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
          }

          button:hover {
            background: #0056b3;
          }
        `}
      </style>

      <form className="form-container" onSubmit={handleSubmit}>
        <h2>Job Application</h2>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          onChange={handleChange}
        />
        <div className="error">{errors.fullName}</div>

        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <div className="error">{errors.email}</div>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <div className="error">{errors.phone}</div>

        <input type="file" name="resume" onChange={handleChange} />
        <div className="error">{errors.resume}</div>

        <div className="terms">
          <input type="checkbox" name="terms" onChange={handleChange} />
          <label>I agree to terms & conditions</label>
        </div>
        <div className="error">{errors.terms}</div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormValidation;

