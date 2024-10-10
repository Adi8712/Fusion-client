import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/UpdateSemDates.css"; // Add styles if necessary

function UpdateSemDates() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    <div className="sem-date-container">
      <h2>Update Sem Dates</h2>
      <form onSubmit={handleSubmit}>
        <div className="date-field">
          <p>Start Date*</p>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
            className="date-input"
          />
        </div>
        <div className="date-field">
          <p>End Date*</p>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="dd-MM-yyyy"
            placeholderText="dd-mm-yyyy"
            className="date-input"
          />
        </div>
        <button type="submit" className="update-button">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateSemDates;
