import React, { useState } from "react";
import "../styles/LeaveApplication.css";

const LeaveApplication = () => {
  const [formData, setFormData] = useState({
    mess: "mess-1",
    leaveType: "",
    leaveFrom: "",
    leaveTill: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="leave-app-container">
      <h2>Leave Application</h2>
      <form className="leave-app-form" onSubmit={handleSubmit}>
        <div className="leave-app-row">
          <div className="leave-app-group">
            <label htmlFor="leave-app-mess">Mess:</label>
            <input
              type="text"
              id="leave-app-mess"
              name="mess"
              value={formData.mess}
              onChange={handleChange}
              disabled
            />
          </div>

          <div className="leave-app-group">
            <label htmlFor="leave-app-type">Leave Type*:</label>
            <select
              id="leave-app-type"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
            >
              <option value="">Select</option>
              <option value="sick">Sick Leave</option>
              <option value="casual">Casual Leave</option>
              <option value="vacation">Vacation</option>
            </select>
          </div>
        </div>

        <div className="leave-app-row">
          <div className="leave-app-group">
            <label htmlFor="leave-app-from">Leave From:</label>
            <input
              type="date"
              id="leave-app-from"
              name="leaveFrom"
              value={formData.leaveFrom}
              onChange={handleChange}
            />
          </div>

          <div className="leave-app-group">
            <label htmlFor="leave-app-till">Leave Till:</label>
            <input
              type="date"
              id="leave-app-till"
              name="leaveTill"
              value={formData.leaveTill}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="leave-app-group">
          <label htmlFor="leave-app-purpose">Purpose:</label>
          <textarea
            id="leave-app-purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            // placeholder="Enter your reason for leave"
          ></textarea>
        </div>

        <button type="submit" className="leave-app-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LeaveApplication;
