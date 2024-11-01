import React, { useState } from "react";
import {
  Container,
  Paper,
  Title,
  Button,
  TextInput,
  Flex,
} from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react";
import FusionTable from "../../../components/FusionTable"; // Ensure to import your FusionTable component

const initialRebateData = [
  {
    date: "2024-10-05",
    student_id: "22bcs123",
    purpose: "Medical leave",
    from: "2024-10-05",
    to: "2024-10-07",
    approve: false,
    remark: "Under review",
  },
  {
    date: "2024-10-07",
    student_id: "21bec083",
    purpose: "Family function",
    from: "2024-10-08",
    to: "2024-10-10",
    approve: true,
    remark: "Approved",
  },
  {
    date: "2024-10-09",
    student_id: "22bcs198",
    purpose: "Personal work",
    from: "2024-10-10",
    to: "2024-10-12",
    approve: false,
    remark: "Pending",
  },
];

// Main component
function RespondToRebateRequest() {
  const [rebateData, setRebateData] = useState(initialRebateData);
  const [filterStatus, setFilterStatus] = useState("all");

  // Function to toggle approval status
  const toggleApproval = (index) => {
    setRebateData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, approve: !request.approve } : request,
      ),
    );
  };

  // Function to remove rebate request
  const removeRebateRequest = (index) => {
    setRebateData((prevData) => prevData.filter((_, i) => i !== index));
  };

  // Function to update remark
  const updateRemark = (index, newRemark) => {
    setRebateData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, remark: newRemark } : request,
      ),
    );
  };

  // Filter requests based on the filterStatus value
  const filteredRebateData = rebateData.filter((request) => {
    if (filterStatus === "approved") return request.approve === true;
    if (filterStatus === "unapproved") return request.approve === false;
    return true;
  });

  // Prepare data for FusionTable
  const tableRows = filteredRebateData.map((item, index) => ({
    Date: item.date,
    "Student ID": item.student_id,
    Purpose: item.purpose,
    From: item.from,
    To: item.to,
    Approve: (
      <Button
        onClick={() => toggleApproval(index)}
        variant={item.approve ? "filled" : "outline"}
        color={item.approve ? "green" : "red"}
        size="xs"
      >
        {item.approve ? "Approved" : "Not Approved"}
      </Button>
    ),
    Remark: (
      <TextInput
        value={item.remark}
        onChange={(event) => updateRemark(index, event.currentTarget.value)}
        size="xs"
      />
    ),
    Actions: (
      <Button
        onClick={() => removeRebateRequest(index)}
        variant="outline"
        color="red"
        size="xs"
      >
        Remove
      </Button>
    ),
  }));

  return (
    <Container size="lg" mt={30} miw="70rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" c="#1c7ed6">
          Respond to Rebate Request
        </Title>

        {/* Filter buttons */}
        <Flex justify="center" align="center" mb={30} gap={20}>
          <Button
            leftSection={<PhosphorIcons.Eye size={20} />}
            variant={filterStatus === "all" ? "filled" : "outline"}
            size="xs"
            onClick={() => setFilterStatus("all")} // Show all requests
          >
            All Requests
          </Button>
          <Button
            leftSection={<PhosphorIcons.Check size={20} />}
            variant={filterStatus === "approved" ? "filled" : "outline"}
            size="xs"
            onClick={() => setFilterStatus("approved")} // Show only approved requests
          >
            Approved
          </Button>
          <Button
            leftSection={<PhosphorIcons.XCircle size={20} />}
            variant={filterStatus === "unapproved" ? "filled" : "outline"}
            size="xs"
            onClick={() => setFilterStatus("unapproved")} // Show only unapproved requests
          >
            Unapproved
          </Button>
        </Flex>

        {/* Use the FusionTable component */}
        <FusionTable
          caption="Rebate Requests"
          columnNames={[
            "Date",
            "Student ID",
            "Purpose",
            "From",
            "To",
            "Approve",
            "Remark",
            "Actions",
          ]}
          elements={tableRows}
          headerBgColor="#be4bdb26"
          scrollableX={false} // Set true if you expect many columns
        />
      </Paper>
    </Container>
  );
}

export default RespondToRebateRequest;
