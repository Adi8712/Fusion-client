import { useState } from "react";
import { TextInput, Button, FileInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import classes from "./registration.module.css";

function Registration() {
  const [formData, setFormData] = useState({
    transactionId: "",
    amount: "",
    file: null,
    startDate: null,
    paymentDate: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  return (
    <div className={classes.formContainer}>
      <h2 className={classes.heading}>Registration Form</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextInput
          label="Transaction Id"
          placeholder="Enter Transaction Id"
          classNames={classes}
          value={formData.transactionId}
          onChange={(event) =>
            handleChange("transactionId", event.currentTarget.value)
          }
        />
        <TextInput
          label="Amount"
          placeholder="Enter Amount"
          classNames={classes}
          value={formData.amount}
          onChange={(event) =>
            handleChange("amount", event.currentTarget.value)
          }
        />
        <FileInput
          label="Payment"
          placeholder="Choose file"
          classNames={classes}
          onChange={(file) => handleChange("file", file)}
          accept=".pdf,.doc,.docx,.jpg,.png"
        />
        <DateInput
          label="Start Date"
          placeholder="dd-mm-yyyy"
          value={formData.startDate}
          onChange={(date) => handleChange("startDate", date)}
          classNames={classes}
        />
        <DateInput
          label="Payment Date"
          placeholder="dd-mm-yyyy"
          value={formData.paymentDate}
          onChange={(date) => handleChange("paymentDate", date)}
          classNames={classes}
        />
        <Button type="submit" className={classes.submitButton}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Registration;
