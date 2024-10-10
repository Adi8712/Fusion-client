/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/messActivity.css";

function MessActivities() {
  const [activeTab, setActiveTab] = useState("updateBill");
  const role = useSelector((state) => state.user.role);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  if (role === "mess_manager" || role === "mess_warden") {
    return (
      <div className="container">
        <center>
          <h2>Mess Activities</h2>
        </center>
        <div className="menu">
          <button
            className={`menu-item ${activeTab === "updateBill" ? "active" : ""}`}
            onClick={() => handleTabSwitch("updateBill")}
          >
            Update Bill
          </button>
          <button
            className={`menu-item ${activeTab === "monthlyBill" ? "active" : ""}`}
            onClick={() => handleTabSwitch("monthlyBill")}
          >
            Monthly Bill
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "updateBill" && (
            <div className="tab-pane">
              <h3>Update Bill</h3>
              <form method="post" action="/mess/updateBill">
                <div className="form">
                  {/* Correct label association */}
                  <label htmlFor="rollNo">Roll No.</label>
                  <input
                    type="text"
                    name="rollNo"
                    placeholder="Roll_No of Student"
                    id="rollNo"
                    required
                  />

                  <label htmlFor="new_amount">New Amount</label>
                  <input
                    type="number"
                    name="new_amount"
                    placeholder="New amount for this month's bill"
                    id="new_amount"
                    required
                  />

                  <label htmlFor="Month">Month</label>
                  <select name="Month" id="Month" required>
                    <option value="january">January</option>
                    <option value="february">February</option>
                  </select>

                  <label htmlFor="Year">Year</label>
                  <select name="Year" id="Year" required>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                  </select>

                  <button type="submit" className="submit-button">
                    Update Bill
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeTab === "monthlyBill" && (
            <div className="tab-pane">
              <h3>Monthly Bill</h3>
              <form
                method="post"
                action="/mess/updatemonthlybill"
                encType="multipart/form-data"
              >
                <div className="form">
                  <label htmlFor="amount">Update Monthly Base Amount</label>
                  <input
                    name="amount"
                    id="amount"
                    type="number"
                    placeholder="Current base amount"
                  />

                  <label htmlFor="excel_file_bill">
                    Upload Excel File for Bill Update
                  </label>
                  <input
                    type="file"
                    name="excel_file_bill"
                    id="excel_file_bill"
                    accept=".xlsx,.xls"
                    required
                  />

                  <button type="submit" className="submit-button">
                    Upload Excel
                  </button>
                </div>
              </form>
              <ul className="info">
                <li>Excel should contain Roll no, Month, Year, etc.</li>
                <li>Accepted formats: .xlsx or .xls</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
  return <div>Unauthorized Access</div>;
}

export default MessActivities;
