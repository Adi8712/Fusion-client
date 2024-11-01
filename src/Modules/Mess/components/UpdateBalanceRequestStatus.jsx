import React from "react";
import { Container, Paper, Title, Box } from "@mantine/core";
import FusionTable from "../../../components/FusionTable"; // Adjust the import path as needed

const balanceRequests = [
  {
    transaction_no: "TXN0012345",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 2000,
    remark: "NA",
    status: "Pending",
  },
  {
    transaction_no: "TXN0016789",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 1500,
    remark: "Transaction id not visible",
    status: "Rejected",
  },
  {
    transaction_no: "TXN0093139",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 3200,
    remark: "Approved",
    status: "Accepted",
  },
];

function UpdateBalanceRequestStatus() {
  // Define the columns for the FusionTable
  const columns = ["transaction_no", "image_url", "amount", "remark", "status"];

  // Transform the balanceRequests to fit the FusionTable structure
  const elements = balanceRequests.map((item) => ({
    ...item,
    image_url: (
      <a href={item.image_url} target="_blank" rel="noopener noreferrer">
        View Image
      </a>
    ),
    status: (
      <Box
        display="inline-block"
        p={8}
        fz={14}
        fw={600}
        bg={item.status === "Accepted" ? "#40C057" : "transparent"}
        bd={
          item.status === "Accepted"
            ? "1.5px solid #40C057"
            : item.status === "Pending"
              ? "1.5px solid grey"
              : "1.5px solid red"
        }
        c={
          item.status === "Accepted"
            ? "white"
            : item.status === "Pending"
              ? "grey"
              : "red"
        }
        style={{ borderRadius: "4px" }}
      >
        {item.status}
      </Box>
    ),
  }));

  return (
    <Container size="lg" style={{ marginTop: "25px" }}>
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Request Status
        </Title>

        {/* FusionTable */}
        <FusionTable
          caption="Balance Requests"
          columnNames={columns}
          elements={elements}
          headerBgColor="#be4bdb26" // Set header background color
          scrollableX={false} // Enable horizontal scrolling if needed
          width="100%"
        />
      </Paper>
    </Container>
  );
}

export default UpdateBalanceRequestStatus;
