import React, { useState } from "react";
import { Container, Paper, Title, Button } from "@mantine/core";
import FusionTable from "../../../components/FusionTable"; // Assuming FusionTable is imported from a local file

// Initial registration request data
const initialRegistrationRequests = [
  {
    student_id: "22bcs145",
    transaction_no: "TXN0012345",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 15000,
    start_date: "2024-10-01",
    payment_date: "2024-10-03",
    remark: "Paid in full",
    mess: "Mess 1",
    accepted: false,
  },
  {
    student_id: "21bec013",
    transaction_no: "TXN0016789",
    image_url:
      "https://img.freepik.com/free-vector/realistic-receipt-template_23-2147938550.jpg?size=338&ext=jpg&ga=GA1.1.2113030492.1728950400&semt=ais_hybrid",
    amount: 3500,
    start_date: "2024-10-05",
    payment_date: "2024-10-07",
    remark: "Pending approval",
    mess: "Mess 2",
    accepted: true,
  },
];

// Main component
function ViewRegistrationRequests() {
  const [registrationData, setRegistrationData] = useState(
    initialRegistrationRequests,
  );

  // Function to toggle acceptance status
  const toggleAcceptance = (index) => {
    setRegistrationData((prevData) =>
      prevData.map((request, i) =>
        i === index ? { ...request, accepted: !request.accepted } : request,
      ),
    );
  };

  // Define column names
  const columnNames = [
    "Student ID",
    "Transaction No",
    "Image",
    "Amount",
    "Start Date",
    "Payment Date",
    "Remark",
    "Mess",
    "Accept/Reject",
  ];

  // Map registration data to FusionTable format
  const tableRows = registrationData.map((item, index) => ({
    "Student ID": item.student_id,
    "Transaction No": item.transaction_no,
    Image: (
      <a href={item.image_url} target="_blank" rel="noopener noreferrer">
        View Image
      </a>
    ),
    Amount: item.amount,
    "Start Date": item.start_date,
    "Payment Date": item.payment_date,
    Remark: item.remark,
    Mess: item.mess,
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
    <Container size="lg" mt={30} miw="70rem">
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" c="#1c7ed6">
          Registration Requests
        </Title>

        {/* FusionTable with mapped data */}
        <FusionTable
          caption="Registration Requests"
          columnNames={columnNames}
          elements={tableRows}
          headerBgColor="#be4bdb26"
          scrollableX={false}
        />
      </Paper>
    </Container>
  );
}

export default ViewRegistrationRequests;
