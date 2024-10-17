import React from "react";
import { Table, Container, Paper, Title } from "@mantine/core";

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
  // Render request status
  const renderRows = () =>
    balanceRequests.map((item, index) => (
      <tr key={index} style={{ height: "60px" }}>
        {" "}
        {/* Increase row height */}
        <td style={{ textAlign: "center", padding: "20px" }}>
          {" "}
          {/* Increase cell padding */}
          {item.transaction_no}
        </td>
        <td style={{ textAlign: "center", padding: "20px" }}>
          <a href={item.image_url} target="_blank" rel="noopener noreferrer">
            View Image
          </a>
        </td>
        <td style={{ textAlign: "center", padding: "20px" }}>{item.amount}</td>
        <td style={{ textAlign: "center", padding: "20px" }}>{item.remark}</td>
        <td style={{ textAlign: "center", padding: "20px" }}>
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              fontSize: "13px",
              fontWeight: "600",
              lineHeight: "1.3",
              borderRadius: "4px",
              backgroundColor:
                item.status === "Accepted" ? "#40C057" : "transparent",
              border:
                item.status === "Accepted"
                  ? "1.5px solid #40C057"
                  : item.status === "Pending"
                    ? "1.5px solid grey"
                    : "1.5px solid red",
              color:
                item.status === "Accepted"
                  ? "white"
                  : item.status === "Pending"
                    ? "grey"
                    : "red",
              cursor: "default",
              pointerEvents: "none",
            }}
          >
            {item.status}
          </div>
        </td>
      </tr>
    ));

  return (
    <Container size="lg" style={{ marginTop: "25px" }}>
      <Paper shadow="md" radius="md" p="lg" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Request Status
        </Title>

        {/* Table */}
        <Table striped highlightOnHover withBorder withColumnBorders>
          <thead>
            <tr>
              <th style={{ textAlign: "center", padding: "12px" }}>
                Transaction No.
              </th>
              <th style={{ textAlign: "center", padding: "12px" }}>Image</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Amount</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Remark</th>
              <th style={{ textAlign: "center", padding: "12px" }}>Status</th>
            </tr>
          </thead>

          <tbody>{renderRows()}</tbody>
        </Table>
      </Paper>
    </Container>
  );
}

export default UpdateBalanceRequestStatus;
