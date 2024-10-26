import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Group,
  Select,
  Textarea,
  TextInput,
  Title,
  Flex,
  getFontSize,
} from "@mantine/core";

const LeaveApp = () => {
  const [formData, setFormData] = useState({
    mess: "MESS-1",
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
    <Container
      size="sm"
      p="lg"
      style={{
        backgroundColor: "white", // Set container background to white

        padding: "40px",

        height: "100vh",

        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div
        style={{
          backgroundColor: "#f3f3f3", // Set container background to white
          borderRadius: "20px",

          marginTop: "12vh",

          height: "80%",

          marginLeft: "auto",
          marginRight: "auto",
          padding: "40px",
        }}
      >
        <Title order={2} align="center" mb="xl">
          Leave Application
        </Title>
        <form onSubmit={handleSubmit}>
          <Group
            grow
            mb="md"
            sx={{ gap: "10px", justifyContent: "space-between" }}
          >
            <TextInput
              label="Mess"
              name="mess"
              value={formData.mess}
              onChange={handleChange}
              disabled
              sx={{
                backgroundColor: "#ffffff", // Set background color of mess input to white
                borderRadius: "40px", // Rounded border
                padding: "10px",
              }}
            />
            <Select
              label="Leave Type*"
              name="leaveType"
              value={formData.leaveType}
              onChange={(value) =>
                setFormData({ ...formData, leaveType: value })
              }
              data={[
                { value: "sick", label: "Sick Leave" },
                { value: "casual", label: "Casual Leave" },
                { value: "vacation", label: "Vacation" },
              ]}
              required
              placeholder="Select"
              sx={{
                borderRadius: "40px", // Rounded border
                padding: "10px",
              }}
            />
          </Group>

          <Group grow mb="md" sx={{ gap: "10px" }}>
            <TextInput
              label="Leave From"
              type="date"
              name="leaveFrom"
              value={formData.leaveFrom}
              onChange={handleChange}
              sx={{
                borderRadius: "40px", // Rounded border
                padding: "10px",
              }}
            />
            <TextInput
              label="Leave Till"
              type="date"
              name="leaveTill"
              value={formData.leaveTill}
              onChange={handleChange}
              sx={{
                borderRadius: "40px", // Rounded border
                padding: "10px",
              }}
            />
          </Group>

          <Textarea
            label="Purpose"
            name="purpose"
            value={formData.purpose}
            onChange={(e) => handleChange(e)}
            minRows={3}
            mb="md"
            sx={{
              borderRadius: "40px", // Rounded border
              padding: "10px",
            }}
          />

          <Flex justify="center" mt="lg">
            <Button
              type="submit"
              sx={{
                width: "150px", // Increased width for a more oval shape
                height: "35px", // Kept the height small
                borderRadius: "50px", // Oval shape with larger border radius
                backgroundColor: "#1e90ff",
                color: "white",
                "&:hover": { backgroundColor: "#1c7ed6" },
              }}
            >
              Submit
            </Button>
          </Flex>
        </form>
      </div>
    </Container>
  );
};

export default LeaveApp;
