import React, { useState } from "react";
import { Card, Button, Select, Table, Title, Group, Text } from "@mantine/core";

function BillDetails() {
  const rows = Array.from({ length: 3 }, (_, i) => ({
    month: `2024-0${i + 1}`,
    baseAmount: 15000,
    rebateCount: i + 1,
    rebateAmount: (i + 1) * 1000,
    monthlyBill: 15000 - (i + 1) * 1000,
  }));

  const totalRemainingBalance = 10000; // Example value
  const currentMessStatus = "Registered"; // Example value

  return (
    <div style={{ marginTop: "20px" }}>
      <Title order={4} align="left">
        Bill Details
      </Title>

      {/* Current Mess Status and Total Remaining Balance */}
      <Group position="apart" mt="md" style={{ fontSize: "16px" }}>
        <Text>
          <strong>Total Remaining Balance:</strong> ₹{totalRemainingBalance}
        </Text>
        <Text>
          <strong>Current Mess Status:</strong> {currentMessStatus}
        </Text>
      </Group>

      {/* Dropdown for Month Selection */}
      <Select
        label="Select Month"
        placeholder="Choose Month"
        data={["January", "February", "March"]}
        mt="md"
      />

      {/* Bill Details Table */}
      <Table
        striped
        highlightOnHover
        withBorder
        withColumnBorders
        style={{
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "center",
          fontSize: "14px",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", fontWeight: "bold" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Month</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Base Amount (₹)
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Rebate Count
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Rebate Amount (₹)
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Monthly Bill (₹)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                border: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.month}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.baseAmount}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.rebateCount}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.rebateAmount}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.monthlyBill}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function PaymentHistory() {
  const rows = Array.from({ length: 10 }, (_, i) => ({
    paymentDate: `0${i + 1}-11-2024`,
    amount: (i + 1) * 1000,
    month: "November",
    year: 2024,
  }));

  return (
    <div style={{ overflowX: "auto", marginTop: "20px" }}>
      <Table
        striped
        highlightOnHover
        withBorder
        withColumnBorders
        style={{
          borderCollapse: "collapse",
          width: "100%",
          textAlign: "center",
          fontSize: "14px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f5f5f5", fontWeight: "bold" }}>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Payment Date
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Amount (₹)
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Month</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Year</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#fff" : "#f9f9f9",
                border: "1px solid #ddd",
              }}
            >
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.paymentDate}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.amount}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.month}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.year}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

function ViewBillPayments() {
  const [activeTab, setActiveTab] = useState("bill");

  return (
    <Card
      shadow="lg"
      padding="xl"
      radius="md"
      withBorder
      mt="xl"
      style={{ maxWidth: "800px", margin: "0 auto" }}
    >
      <Title align="center" order={2} mb="md">
        View Bill and Payments
      </Title>

      <Group position="center" grow mt="md">
        <Button
          variant={activeTab === "bill" ? "filled" : "outline"}
          onClick={() => setActiveTab("bill")}
        >
          Bill
        </Button>
        <Button
          variant={activeTab === "paymentHistory" ? "filled" : "outline"}
          onClick={() => setActiveTab("paymentHistory")}
        >
          Payment History
        </Button>
      </Group>

      <div style={{ marginTop: "30px", animation: "fadeIn 0.5s" }}>
        {activeTab === "bill" && <BillDetails />}
        {activeTab === "paymentHistory" && <PaymentHistory />}
      </div>
    </Card>
  );
}

export default ViewBillPayments;
