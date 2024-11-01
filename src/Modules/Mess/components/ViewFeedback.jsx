import React, { useState } from "react";
import { Container, Paper, Title, Button, Flex } from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react"; // Default import for icons
import FusionTable from "../../../components/FusionTable"; // Import the FusionTable component

const initialFeedbackData = [
  {
    fdate: "2024-10-10",
    student_id: "22bcs123",
    feedback_type: "Food",
    description: "Food quality is good",
    mess: "Mess1",
  },
  // ... (other feedback data)
];

const tableHeader = ["Date", "Student ID", "Description", "Mess", "Actions"];

// Main component
function ViewFeedback() {
  const [activeTab, setActiveTab] = useState("Food");
  const [feedbackData, setFeedbackData] = useState(initialFeedbackData);

  // Filter feedback based on active tab
  const filteredFeedback = feedbackData.filter(
    (feedback) => feedback.feedback_type === activeTab,
  );

  // Function to mark feedback as read
  const markAsRead = (index) => {
    setFeedbackData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // Prepare data for FusionTable
  const tableRows = filteredFeedback.map((item, index) => ({
    Date: item.fdate,
    "Student ID": item.student_id,
    Description: item.description,
    Mess: item.mess,
    Actions: (
      <Button
        onClick={() => markAsRead(index)}
        variant="outline"
        color="red"
        size="xs"
      >
        Mark as Read
      </Button>
    ),
  }));

  return (
    <Container size="lg" mt={30} miw="50rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" c="#1c7ed6">
          View Feedback
        </Title>

        <Flex justify="center" align="center" mb={30} gap={20}>
          <Button
            onClick={() => setActiveTab("Food")}
            leftSection={<PhosphorIcons.ForkKnife size={20} />}
            variant={activeTab === "Food" ? "filled" : "outline"}
            size="xs"
          >
            Food
          </Button>
          <Button
            onClick={() => setActiveTab("Cleanliness")}
            leftSection={<PhosphorIcons.Broom size={20} />}
            variant={activeTab === "Cleanliness" ? "filled" : "outline"}
            size="xs"
          >
            Cleanliness
          </Button>
          <Button
            onClick={() => setActiveTab("Maintenance")}
            leftSection={<PhosphorIcons.Wrench size={20} />}
            variant={activeTab === "Maintenance" ? "filled" : "outline"}
            size="xs"
          >
            Maintenance
          </Button>
          <Button
            onClick={() => setActiveTab("Others")}
            leftSection={<PhosphorIcons.ChatText size={20} />}
            variant={activeTab === "Others" ? "filled" : "outline"}
            size="xs"
          >
            Others
          </Button>
        </Flex>

        {/* Use the FusionTable component */}
        <FusionTable
          caption="List of Feedback"
          columnNames={tableHeader}
          elements={tableRows}
          headerBgColor="#be4bdb26"
          scrollableX={false} // Set true if you expect many columns
        />
      </Paper>
    </Container>
  );
}

export default ViewFeedback;
