import React, { useState } from "react";
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    transactionId: "",
    amount: "",
    payment: "",
    startDate: "",
    paymentDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      payment: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(formData);
  };

  return (
    <div className="reg-form-container">
      <form className="reg-form" onSubmit={handleSubmit}>
        <h2>Registration Form</h2>

        <div className="reg-form-group">
          <label htmlFor="reg-transactionId" style={{ fontWeight: "bold" }}>
            Transaction Id
          </label>
          <input
            type="text"
            id="reg-transactionId"
            name="transactionId"
            value={formData.transactionId}
            onChange={handleChange}
            required
          />
        </div>

        <div className="reg-form-group">
          <label htmlFor="reg-amount" style={{ fontWeight: "bold" }}>
            Amount
          </label>
          <input
            type="text"
            id="reg-amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>

        <div className="reg-form-group">
          <label htmlFor="reg-payment" style={{ fontWeight: "bold" }}>
            Payment
          </label>
          <input
            type="file"
            id="reg-payment"
            name="payment"
            onChange={handleFileChange}
          />
        </div>

        <div className="reg-form-group">
          <label htmlFor="reg-startDate" style={{ fontWeight: "bold" }}>
            Start Date
          </label>
          <div className="reg-input-with-icon">
            <span className="reg-calendar-icon">&#128197;</span>
            <input
              type="date"
              id="reg-startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="reg-form-group">
          <label htmlFor="reg-paymentDate" style={{ fontWeight: "bold" }}>
            Payment Date
          </label>
          <div className="reg-input-with-icon">
            <span className="reg-calendar-icon">&#128197;</span>
            <input
              type="date"
              id="reg-paymentDate"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="reg-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
