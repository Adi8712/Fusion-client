import React, { useState, useEffect } from "react";
import {
  Table,
  Container,
  Paper,
  Title,
  Button,
  TextInput,
  Flex,
} from "@mantine/core";
import * as PhosphorIcons from "@phosphor-icons/react";

function RespondToRebateRequest() {
  const [rebateData, setRebateData] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const authToken = localStorage.getItem("authToken");

  // Fetch the rebate data from the API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/mess/api/rebateApi/", {
      method: "GET",
      headers: {
        Authorization: `Token ${authToken}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Map the status field to a boolean for easier handling
        const formattedData = data.payload.map((item) => ({
          ...item,
          approve: item.status === "1", // "1" is Approved, "0" is Unapproved
          remark: item.rebate_remark || "", // Pre-fill remark with rebate_remark or default to empty
        }));
        setRebateData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching rebate data:", error);
      });
  }, [authToken]);

  // Toggle approval status with remark validation
  const toggleApproval = async (index, newStatus) => {
    if (!rebateData[index].remark.trim()) {
      alert("Remark is mandatory to approve or disapprove a request.");
      return;
    }

    const {
      student_id,
      start_date,
      end_date,
      purpose,
      app_date,
      leave_type,
      remark,
    } = rebateData[index];

    const updatedRequest = {
      student_id,
      start_date,
      end_date,
      purpose,
      app_date,
      leave_type,
      rebate_remark: remark,
      status: newStatus, // Approve (1) or Disapprove (0)
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/mess/api/rebateApi", {
        method: "PUT",
        headers: {
          Authorization: `Token ${authToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedRequest),
      });

      if (response.ok) {
        setRebateData((prevData) =>
          prevData.map((request, i) =>
            i === index ? { ...request, approve: newStatus === 1 } : request,
          ),
        );
      } else {
        console.error("Failed to update approval:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating approval:", error);
    }
  };

  // Handle remark input change
  const handleRemarkChange = (index, value) => {
    setRebateData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, remark: value } : request,
      ),
    );
  };

  // Filter data based on the selected status
  const filteredRebateData = rebateData.filter((request) => {
    if (filterStatus === "approved") return request.approve === true;
    if (filterStatus === "unapproved") return request.approve === false;
    return true; // Show all data
  });

  // Render table headers
  const renderHeader = () => (
    <Table.Tr>
      <Table.Th>Date</Table.Th>
      <Table.Th>Student ID</Table.Th>
      <Table.Th>Purpose</Table.Th>
      <Table.Th>From</Table.Th>
      <Table.Th>To</Table.Th>
      <Table.Th>Remark</Table.Th>
      <Table.Th>Actions</Table.Th>
    </Table.Tr>
  );

  // Render table rows
  const renderRows = () =>
    filteredRebateData.map((item, index) => (
      <Table.Tr key={index}>
        <Table.Td>{item.app_date}</Table.Td>
        <Table.Td>{item.student_id}</Table.Td>
        <Table.Td>{item.purpose || "No Purpose Provided"}</Table.Td>
        <Table.Td>{item.start_date}</Table.Td>
        <Table.Td>{item.end_date}</Table.Td>
        <Table.Td>
          <TextInput
            placeholder="Enter remark"
            value={item.remark}
            onChange={(e) => handleRemarkChange(index, e.target.value)}
          />
        </Table.Td>
        <Table.Td>
          <Button
            onClick={() => toggleApproval(index, item.approve ? 0 : 1)}
            variant={item.approve ? "filled" : "outline"}
            color={item.approve ? "green" : "red"}
            size="xs"
          >
            {item.approve ? "Disapprove" : "Approve"}
          </Button>
        </Table.Td>
      </Table.Tr>
    ));

  return (
    <Container size="lg" mt={30}>
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" color="#1c7ed6">
          Respond to Rebate Request
        </Title>

        {/* Filter Buttons */}
        <Flex justify="center" align="center" mb={30} gap={20}>
          <Button
            leftSection={<PhosphorIcons.Eye size={20} />}
            variant={filterStatus === "all" ? "filled" : "outline"}
            onClick={() => setFilterStatus("all")}
          >
            All Requests
          </Button>
          <Button
            leftSection={<PhosphorIcons.Check size={20} />}
            variant={filterStatus === "approved" ? "filled" : "outline"}
            onClick={() => setFilterStatus("approved")}
          >
            Approved
          </Button>
          <Button
            leftSection={<PhosphorIcons.XCircle size={20} />}
            variant={filterStatus === "unapproved" ? "filled" : "outline"}
            onClick={() => setFilterStatus("unapproved")}
          >
            Unapproved
          </Button>
        </Flex>

        {/* Rebate Table */}
        <Table striped highlightOnHover withColumnBorders>
          <Table.Thead>{renderHeader()}</Table.Thead>
          <Table.Tbody>{renderRows()}</Table.Tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default RespondToRebateRequest;
