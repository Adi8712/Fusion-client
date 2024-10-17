import React, { useState } from "react";
import "../styles/DeregistrationForm.css";

const DeregistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    batch: "",
    semester: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // For now, we just log the form data
  };

  return (
    <div className="deregistration-form-container">
      <form className="deregistration-form" onSubmit={handleSubmit}>
        <h2>Deregistration Form</h2>

        <div className="form-group">
          <label htmlFor="name" style={{ fontWeight: "bold" }}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rollNo" style={{ fontWeight: "bold" }}>
            Roll No
          </label>
          <input
            type="text"
            id="rollNo"
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
            placeholder="Enter roll number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="batch" style={{ fontWeight: "bold" }}>
            Batch
          </label>
          <select
            id="batch"
            name="batch"
            value={formData.batch}
            onChange={handleChange}
            required
          >
            <option value="">Select Batch</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="semester" style={{ fontWeight: "bold" }}>
            Semester
          </label>
          <select
            id="semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            required
          >
            <option value="">Select Semester</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="reason" style={{ fontWeight: "bold" }}>
            Reason
          </label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            // placeholder="Enter your reason for deregistration"
            required
          />
        </div>

        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DeregistrationForm;
