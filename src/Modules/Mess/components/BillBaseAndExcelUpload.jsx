import React, { useState } from "react";
import {
  TextInput,
  Button,
  Container,
  Title,
  Paper,
  Group,
  FileInput,
} from "@mantine/core";
import axios from "axios";

function BillBase() {
  const [amount, setAmount] = useState(""); // State for base amount
  const [file, setFile] = useState(null); // State for file upload
  const token = localStorage.getItem("authToken");

  // Function to check if token exists
  const isAuthenticated = () => {
    if (!token) {
      alert("Unauthorized! Please log in.");
      return false;
    }
    return true;
  };

  // Function to update the base amount by making an API call
  const updateBaseAmount = async (event) => {
    event.preventDefault();
    if (!isAuthenticated()) return;

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/mess/api/messBillBaseApi",
        {
          id: 5, // Example ID to update the record (replace as needed)
          bill_amount: amount,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        },
      );
      alert(response.data.message || "Base amount updated successfully!");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Unauthorized! Please check your authentication token.");
      } else if (error.response && error.response.status === 404) {
        alert("Record not found. Please verify the ID.");
      } else {
        alert("Error updating base amount. Please try again.");
      }
    }
  };

  // Function to upload a file by making an API call
  const uploadFile = async (event) => {
    event.preventDefault();
    if (!isAuthenticated()) return;

    if (!file) {
      alert("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/mess/api/update-bill-excel/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Token ${token}`,
          },
        },
      );
      alert(response.data.message || "File uploaded successfully!");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert("Unauthorized! Please check your authentication token.");
      } else {
        alert("Error uploading file. Please try again.");
      }
    }
  };

  return (
    <Container
      size="lg"
      style={{
        maxWidth: "800px",
        width: "570px",
        marginTop: "30px",
      }}
    >
      <Paper shadow="md" radius="md" p="xl" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Monthly Bill Base
        </Title>

        {/* Update Base Amount Form */}
        <form onSubmit={updateBaseAmount}>
          <Group direction="column" grow spacing="lg">
            <div className="two fields">
              <TextInput
                label="Current Base Amount"
                placeholder="Enter the new base amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                required
                radius="md"
                mb="lg"
              />
              <div style={{ marginTop: "10px" }}>
                <Button type="submit">Update Base Amount</Button>
              </div>
            </div>
          </Group>
        </form>

        <hr />

        {/* Upload Monthly Bill Form */}
        <form onSubmit={uploadFile}>
          <Group
            direction="column"
            grow
            spacing="lg"
            style={{ marginTop: "10px" }}
          >
            <FileInput
              label="Upload Monthly Bill"
              placeholder="Choose Excel file"
              value={file}
              onChange={setFile}
              accept=".xlsx,.xls"
              required
              styles={{ input: { width: "100%" } }}
            />
            <div style={{ marginTop: "10px" }}>
              <Button
                type="submit"
                style={{ maxWidth: "10rem", marginTop: "10px" }}
              >
                Update Bills
              </Button>
            </div>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

export default BillBase;
