import React, { useState } from "react";
import { Container, Paper, Title, Button, Flex } from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react"; // Default import for icons
import FusionTable from "../../../components/FusionTable"; // Assuming FusionTable is imported from a local file

const initialFoodRequestData = [
  {
    rdate: "2024-10-05",
    student_id: "22bcs123",
    food: "Gluten-free",
    reason: "Medical condition",
    from: "2024-10-05",
    to: "2024-10-07",
    approve: false,
  },
  {
    rdate: "2024-10-07",
    student_id: "21bec083",
    food: "Vegan",
    reason: "Personal preference",
    from: "2024-10-08",
    to: "2024-10-10",
    approve: true,
  },
  {
    rdate: "2024-10-09",
    student_id: "22bcs198",
    food: "Navratri Food",
    reason: "Fasting",
    from: "2024-10-10",
    to: "2024-10-12",
    approve: false,
  },
];

const tableHeader = [
  "Date",
  "Student ID",
  "Food",
  "Reason",
  "From",
  "To",
  "Approval",
];

function ViewSpecialFoodRequest() {
  const [foodRequestData, setFoodRequestData] = useState(
    initialFoodRequestData,
  );
  const [activeTab, setActiveTab] = useState("all");

  const toggleApproval = (index) => {
    setFoodRequestData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, approve: !request.approve } : request,
      ),
    );
  };

  // Filter requests based on active tab
  const filteredFoodRequestData = foodRequestData.filter((request) => {
    if (activeTab === "approved") return request.approve;
    if (activeTab === "unapproved") return !request.approve;
    return true;
  });

  // Format data for FusionTable
  const tableRows = filteredFoodRequestData.map((item, index) => ({
    Date: item.rdate,
    "Student ID": item.student_id,
    Food: item.food,
    Reason: item.reason,
    From: item.from,
    To: item.to,
    Approval: (
      <Button
        onClick={() => toggleApproval(index)}
        variant={item.approve ? "filled" : "outline"}
        color={item.approve ? "green" : "red"}
        size="xs"
      >
        {item.approve ? "Approved" : "Not Approved"}
      </Button>
    ),
  }));

  return (
    <Container size="lg" mt={30} miw="80rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" c="#1c7ed6">
          View Special Food Requests
        </Title>

        {/* Tabs for filtering food requests */}
        <Flex justify="center" align="center" mb={30} gap={20}>
          <Button
            onClick={() => setActiveTab("all")}
            leftSection={<PhosphorIcons.Eye size={20} />}
            variant={activeTab === "all" ? "filled" : "outline"}
            size="xs"
          >
            All Requests
          </Button>
          <Button
            onClick={() => setActiveTab("approved")}
            leftSection={<PhosphorIcons.Check size={20} />}
            variant={activeTab === "approved" ? "filled" : "outline"}
            size="xs"
          >
            Approved
          </Button>
          <Button
            onClick={() => setActiveTab("unapproved")}
            leftSection={<PhosphorIcons.XCircle size={20} />}
            variant={activeTab === "unapproved" ? "filled" : "outline"}
            size="xs"
          >
            Unapproved
          </Button>
        </Flex>

        {/* FusionTable with formatted data */}
        <FusionTable
          caption="Special Food Requests"
          columnNames={tableHeader}
          elements={tableRows}
          headerBgColor="#be4bdb26"
          scrollableX={false}
        />
      </Paper>
    </Container>
  );
}

export default ViewSpecialFoodRequest;
