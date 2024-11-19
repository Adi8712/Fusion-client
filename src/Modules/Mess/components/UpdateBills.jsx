import React, { useState } from "react";
import {
  TextInput,
  NumberInput,
  Select,
  Button,
  Container,
  Title,
  Paper,
  Space,
  Notification,
} from "@mantine/core";
import { User, Calendar } from "@phosphor-icons/react";
import axios from "axios";

function UpdateBill() {
  const [formData, setFormData] = useState({
    rollNo: "",
    newAmount: 0,
    month: "",
    year: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    const payload = {
      student_id: formData.rollNo,
      amount: formData.newAmount,
      month: formData.month,
      year: formData.year,
      rebate_count: 0,
      rebate_amount: 0,
      paid: false,
    };

    const token = localStorage.getItem("authToken");

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/mess/api/monthlyBillApi",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        },
      );

      if (response.data.status === 200) {
        setMessage(response.data.message || "Bill updated successfully!");
      } else {
        setError(response.data.message || "Failed to update the bill.");
      }
    } catch (errormsg) {
      console.error(errormsg);
      setError(error.response?.data?.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      size="lg"
      style={{
        maxWidth: "800px",
        width: "570px",
        marginTop: "25px",
      }}
    >
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        withBorder
        style={{ width: "100%", padding: "30px" }}
      >
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Update Bill
        </Title>

        <form onSubmit={handleSubmit}>
          <TextInput
            label="Roll No."
            placeholder="Roll No of Student"
            required
            radius="md"
            size="md"
            icon={<User size={20} />}
            value={formData.rollNo}
            onChange={(e) => handleChange("rollNo", e.target.value)}
            mb="lg"
          />

          <NumberInput
            label="New Amount"
            placeholder="New amount for this month's bill"
            required
            radius="md"
            size="md"
            min={0}
            step={100}
            value={formData.newAmount}
            onChange={(value) => handleChange("newAmount", value)}
            mb="lg"
          />

          <Select
            label="Month"
            placeholder="Select month"
            required
            radius="md"
            size="md"
            icon={<Calendar size={20} />}
            data={[
              { value: "january", label: "January" },
              { value: "february", label: "February" },
              { value: "march", label: "March" },
              { value: "april", label: "April" },
              { value: "may", label: "May" },
              { value: "june", label: "June" },
              { value: "july", label: "July" },
              { value: "august", label: "August" },
              { value: "september", label: "September" },
              { value: "october", label: "October" },
              { value: "november", label: "November" },
              { value: "december", label: "December" },
            ]}
            value={formData.month}
            onChange={(value) => handleChange("month", value)}
            mb="lg"
          />

          <Select
            label="Year"
            placeholder="Select year"
            required
            radius="md"
            size="md"
            data={[
              { value: "2023", label: "2023" },
              { value: "2024", label: "2024" },
            ]}
            value={formData.year}
            onChange={(value) => handleChange("year", value)}
            mb="lg"
          />

          <Space h="xl" />

          <Button
            type="submit"
            fullWidth
            size="lg"
            radius="md"
            color="blue"
            loading={loading}
          >
            Update Bill
          </Button>
        </form>

        {message && (
          <Notification color="green" mt="md">
            {message}
          </Notification>
        )}

        {error && (
          <Notification color="red" mt="md">
            {error}
          </Notification>
        )}
      </Paper>
    </Container>
  );
}

export default UpdateBill;
