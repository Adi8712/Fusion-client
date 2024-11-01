import React, { useState } from "react";
import { Container, Paper, Title, Button } from "@mantine/core";
import FusionTable from "../../../components/FusionTable"; // Assuming FusionTable is imported from a local file

const initialUpdatePaymentRequests = [
  {
    student_id: "22bcs123",
    transaction_no: "TXN123456",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 15000,
    payment_date: "2024-10-10",
    remark: "Updated amount after correction",
    accepted: false,
  },
  {
    student_id: "21bec083",
    transaction_no: "TXN654321",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 5000,
    payment_date: "2024-10-12",
    remark: "Payment corrected",
    accepted: true,
  },
];

function ViewUpdatePaymentRequests() {
  const [updatePaymentData, setUpdatePaymentData] = useState(
    initialUpdatePaymentRequests,
  );

  const toggleAcceptance = (index) => {
    setUpdatePaymentData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, accepted: !request.accepted } : request,
      ),
    );
  };

  // Column headers
  const columnNames = [
    "Student ID",
    "Transaction No",
    "Image",
    "Amount",
    "Payment Date",
    "Remark",
    "Accept/Reject",
  ];

  // Format data for FusionTable
  const tableRows = updatePaymentData.map((item, index) => ({
    "Student ID": item.student_id,
    "Transaction No": item.transaction_no,
    Image: (
      <a href={item.image_url} target="_blank" rel="noopener noreferrer">
        View Image
      </a>
    ),
    Amount: item.amount,
    "Payment Date": item.payment_date,
    Remark: item.remark,
    "Accept/Reject": (
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
    <Container size="lg" mt={30} miw="60rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Update Payment Requests
        </Title>

        {/* FusionTable with formatted data */}
        <FusionTable
          caption="Update Payment Requests"
          columnNames={columnNames}
          elements={tableRows}
          headerBgColor="#be4bdb26"
          scrollableX={false}
        />
      </Paper>
    </Container>
  );
}

export default ViewUpdatePaymentRequests;
