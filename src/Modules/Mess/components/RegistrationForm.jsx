import React, { useState } from "react";
import {
  TextInput,
  NumberInput,
  Button,
  FileInput,
  Container,
  Group,
  Title,
} from "@mantine/core";
import { DatePickerInput } from "@mantine/dates"; // Importing DatePickerInput
import "../styles/RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    transactionId: "",
    amount: "",
    payment: "",
    startDate: null,
    paymentDate: null,
  });

  const handleChange = (name) => (value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      payment: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic here
    console.log(formData);
  };

  return (
    <Container size={600} className="reg-form-container">
      <form className="reg-form" onSubmit={handleSubmit}>
        <Title order={2} align="center" mb="md">
          Registration Form
        </Title>

        <Group direction="column" spacing="md">
          {/* Transaction ID */}
          <div className="reg-form-group">
            <label htmlFor="transactionId">Transaction Id</label>
            <TextInput
              id="transactionId"
              required
              value={formData.transactionId}
              onChange={(e) =>
                handleChange("transactionId")(e.currentTarget.value)
              }
              style={{ width: "100%" }}
            />
          </div>

          {/* Amount */}
          <div className="reg-form-group">
            <label htmlFor="amount">Amount</label>
            <NumberInput
              id="amount"
              required
              value={formData.amount}
              onChange={(value) => handleChange("amount")(value)}
              parser={(value) => value.replace(/₹\s?|,/g, "")} // Removing ₹ and commas for parsing
              formatter={(value) => {
                if (!Number.isNaN(+value)) {
                  return `₹ ${value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`; // Formatting value with ₹
                }
                return "";
              }}
              style={{ width: "100%" }} // Ensuring full width
            />
          </div>

          {/* Payment File Input */}
          <div className="reg-form-group">
            <label htmlFor="payment">Payment</label>
            <FileInput
              id="payment"
              onChange={handleFileChange}
              required
              style={{ width: "100%" }}
            />
          </div>

          {/* Start Date */}
          <div className="reg-form-group">
            <label htmlFor="startDate">Start Date</label>
            <DatePickerInput
              id="startDate"
              placeholder="Pick a date"
              required
              value={formData.startDate}
              onChange={handleChange("startDate")}
              style={{ width: "100%" }}
            />
          </div>

          {/* Payment Date */}
          <div className="reg-form-group">
            <label htmlFor="paymentDate">Payment Date</label>
            <DatePickerInput
              id="paymentDate"
              placeholder="Pick a date"
              required
              value={formData.paymentDate}
              onChange={handleChange("paymentDate")}
              style={{ width: "100%" }}
            />
          </div>

          <Button type="submit" className="reg-submit-btn" fullWidth>
            Submit
          </Button>
        </Group>
      </form>
    </Container>
  );
};

export default RegistrationForm;
