import { useState } from "react";
import { Select, TextInput, Button, Textarea } from "@mantine/core";
import classes from "../styles/deregistration.module.css";

function Deregistration() {
  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    batch: "",
    semester: "",
    reason: "",
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
      <h2 className={classes.heading}>Deregistration Form</h2>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextInput
          label="Name"
          placeholder="Your Name"
          classNames={classes}
          value={formData.name}
          onChange={(event) => handleChange("name", event.currentTarget.value)}
        />
        <TextInput
          label="Roll No."
          placeholder="Your Roll No."
          classNames={classes}
          value={formData.roll}
          onChange={(event) => handleChange("roll", event.currentTarget.value)}
        />
        <Select
          data={["2021", "2022", "2023", "2024"]}
          placeholder="Pick one"
          label="Batch"
          classNames={classes}
          value={formData.batch}
          onChange={(value) => handleChange("batch", value)}
        />
        <Select
          data={["1", "2", "3", "4", "5", "6", "7", "8"]}
          placeholder="Pick one"
          label="Semester"
          classNames={classes}
          value={formData.semester}
          onChange={(value) => handleChange("semester", value)}
        />
        <Textarea
          label="Reason"
          placeholder="Your Reason for Deregistering"
          classNames={classes}
          value={formData.reason}
          onChange={(event) =>
            handleChange("reason", event.currentTarget.value)
          }
          minRows={3}
        />
        <Button type="submit" className={classes.submitButton}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Deregistration;
