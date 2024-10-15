import React, { useState } from "react";
import { Table, Container, Paper, Title, Button, Group } from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react"; // Default import for icons

// Dummy data for feedback
const initialFeedbackData = [
  {
    fdate: "2024-10-10",
    student_id: "STU1234",
    feedback_type: "Food",
    description: "Food quality is good",
    mess: "Mess1",
  },
  {
    fdate: "2024-10-12",
    student_id: "STU5678",
    feedback_type: "Cleanliness",
    description: "Cleanliness needs improvement",
    mess: "Mess2",
  },
  {
    fdate: "2024-10-14",
    student_id: "STU91011",
    feedback_type: "Maintenance",
    description: "Lights need repair",
    mess: "Mess1",
  },
  {
    fdate: "2024-10-16",
    student_id: "STU1213",
    feedback_type: "Others",
    description: "More variety in food, please!",
    mess: "Mess2",
  },
];

// Main component
function ViewFeedback() {
  const [activeTab, setActiveTab] = useState("Food");
  const [feedbackData, setFeedbackData] = useState(initialFeedbackData); // Use state for feedback data

  // Filter feedback based on active tab
  const filteredFeedback = feedbackData.filter(
    (feedback) => feedback.feedback_type === activeTab,
  );

  // Function to mark feedback as read
  const markAsRead = (index) => {
    setFeedbackData(
      (prevData) => prevData.filter((_, i) => i !== index), // Remove the feedback at the specified index
    );
  };

  // Render feedback table rows
  const renderRows = () =>
    filteredFeedback.map((item, index) => (
      <tr key={index}>
        <td style={{ textAlign: "center" }}>{item.fdate}</td>
        <td style={{ textAlign: "center" }}>{item.student_id}</td>
        <td style={{ textAlign: "center" }}>{item.feedback_type}</td>
        <td style={{ textAlign: "center" }}>{item.description}</td>
        <td style={{ textAlign: "center" }}>{item.mess}</td>
        <td style={{ textAlign: "center" }}>
          <Button
            onClick={() => markAsRead(index)}
            variant="outline"
            color="red"
            size="xs"
          >
            Mark as Read
          </Button>
        </td>
      </tr>
    ));

  return (
    <Container
      size="lg"
      style={{
        maxWidth: "1200px",
        width: "900px",
        marginTop: "25px",
        marginLeft: "-190px",
      }}
    >
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg">
          View Feedback
        </Title>

        {/* Manually position the Group */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "30px",
          }}
        >
          <Group>
            <Button
              onClick={() => setActiveTab("Food")}
              leftIcon={<PhosphorIcons.FastFood size={20} />}
              variant={activeTab === "Food" ? "filled" : "outline"}
            >
              Food
            </Button>
            <Button
              onClick={() => setActiveTab("Cleanliness")}
              leftIcon={<PhosphorIcons.Broom size={20} />}
              variant={activeTab === "Cleanliness" ? "filled" : "outline"}
            >
              Cleanliness
            </Button>
            <Button
              onClick={() => setActiveTab("Maintenance")}
              leftIcon={<PhosphorIcons.Wrench size={20} />}
              variant={activeTab === "Maintenance" ? "filled" : "outline"}
            >
              Maintenance
            </Button>
            <Button
              onClick={() => setActiveTab("Others")}
              leftIcon={<PhosphorIcons.ChatText size={20} />}
              variant={activeTab === "Others" ? "filled" : "outline"}
            >
              Others
            </Button>
          </Group>
        </div>

        {/* Table */}
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th style={{ textAlign: "center" }}>Feedback Date</th>
              <th style={{ textAlign: "center" }}>Student ID</th>
              <th style={{ textAlign: "center" }}>Feedback Type</th>
              <th style={{ textAlign: "center" }}>Description</th>
              <th style={{ textAlign: "center" }}>Mess</th>
              <th style={{ textAlign: "center" }}>Actions</th>
            </tr>
          </thead>
          <tbody>{renderRows()}</tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default ViewFeedback;
