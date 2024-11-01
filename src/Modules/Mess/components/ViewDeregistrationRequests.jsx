import React, { useState } from "react";
import { Container, Paper, Title, Button } from "@mantine/core";
import FusionTable from "../../../components/FusionTable"; // Assuming FusionTable is imported from a local file

const initialDeregistrationRequests = [
  {
    student_id: "22bcs123",
    end_date: "2024-12-01",
    remark: "Graduating",
    accepted: false,
  },
  {
    student_id: "21bec083",
    end_date: "2024-11-15",
    remark: "Personal reasons",
    accepted: true,
  },
];

// Main component
function ViewDeregistrationRequests() {
  const [deregistrationData, setDeregistrationData] = useState(
    initialDeregistrationRequests,
  );

  // Function to toggle acceptance status
  const toggleAcceptance = (index) => {
    setDeregistrationData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, accepted: !request.accepted } : request,
      ),
    );
  };

  // Define column names
  const columnNames = ["Student ID", "End Date", "Remark", "Action"];

  // Map deregistration data to FusionTable format
  const tableRows = deregistrationData.map((item, index) => ({
    "Student ID": item.student_id,
    "End Date": item.end_date,
    Remark: item.remark,
    Action: (
      <Button
        onClick={() => toggleAcceptance(index)}
        variant={item.accepted ? "filled" : "outline"}
        color={item.accepted ? "green" : "red"}
        size="xs"
      >
        {item.accepted ? "Accepted" : "Rejected"}
      </Button>
    ),
  }));

  return (
    <Container size="lg" mt={30} miw="40rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Deregistration Requests
        </Title>

        {/* FusionTable with mapped data */}
        <FusionTable
          caption="Deregistration Requests"
          columnNames={columnNames}
          elements={tableRows}
          headerBgColor="#be4bdb26"
          scrollableX={false}
        />
      </Paper>
    </Container>
  );
}

export default ViewDeregistrationRequests;
