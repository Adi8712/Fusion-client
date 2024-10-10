import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./LeaveApplication.css";

const LeaveApplication = () => {
  const [leaveFrom, setLeaveFrom] = useState(null);
  const [leaveTill, setLeaveTill] = useState(null);

  return (
    <div className="leave-application-container">
      {/* Sidebar */}
      <div className="sidebar">
        <ul className="sidebar-menu">
          <li>Home</li>
          <li>Academics</li>
          <li>Curriculum</li>
          <li>Mess</li>
          <li>Guest</li>
          <li>Health</li>
          <li>Scholarship</li>
          <li>Complain</li>
          <li>Placement</li>
          <li>Department</li>
          <li>Gymkhana</li>
          <li>Hostel</li>
          <li>Other</li>
        </ul>
        <div className="profile">{/* Empty for profile picture */}</div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <nav className="top-nav">
          <a href="#">View Menu</a>
          <a href="#">View Bills and Payments</a>
          <a href="#">Feedback</a>
          <a href="#" className="bold">
            Applications
          </a>
          <a href="#">Update Payment</a>
          <a href="#">Deregistration</a>
        </nav>

        <div className="rebate-section">
          <div className="rebate-left">
            <a href="#" className="rebate-link">
              Rebate Request
            </a>
            <a href="#" className="rebate-link">
              Special Food Requests
            </a>
          </div>
          <div className="rebate-right">
            <a href="#" className="rebate-link">
              Apply for Rebate
            </a>
            <a href="#" className="rebate-link">
              Rebate Status
            </a>
          </div>
        </div>

        <h2>Leave Application</h2>

        <form className="leave-application-form">
          <div className="form-group" id="z">
            <label className="bold">Mess:</label>
            <input type="text" placeholder="mess-1" />
          </div>

          <div className="form-group" id="q">
            <label className="bold">Leave Type*:</label>
            <select>
              <option value="select">Select Leave Type</option>
              <option value="casual">Casual Leave</option>
              <option value="sick">Sick Leave</option>
              <option value="vacation">Vacation Leave</option>
            </select>
          </div>

          <div className="form-group" id="a">
            <label className="bold">Leave From:</label>
            <DatePicker
              selected={leaveFrom}
              onChange={(date) => setLeaveFrom(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="mm/dd/yyyy"
            />
          </div>

          <div className="form-group" id="b">
            <label className="bold">Leave Till:</label>
            <DatePicker
              selected={leaveTill}
              onChange={(date) => setLeaveTill(date)}
              dateFormat="MM/dd/yyyy"
              placeholderText="mm/dd/yyyy"
            />
          </div>

          <div className="form-group">
            <label className="bold">Purpose:</label>
            <textarea placeholder="Enter the purpose"></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeaveApplication;
