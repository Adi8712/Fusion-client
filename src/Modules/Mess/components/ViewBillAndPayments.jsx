import React from "react";
import {
  Card,
  Tabs,
  Table,
  Text,
  Button,
  Group,
  Container,
} from "@mantine/core";
import { DownloadSimple } from "@phosphor-icons/react";

function MessBilling() {
  const billData = []; // Replace with actual data if available

  const columns = [
    { key: "month", label: "Month" },
    { key: "baseAmount", label: "Monthly Base Amount" },
    { key: "rebateCount", label: "Rebate Count" },
    { key: "rebateAmount", label: "Rebate Amount" },
    { key: "monthlyBill", label: "Your Monthly Bill" },
  ];

  return (
    <Container size="sm" padding="md">
      <Card shadow="sm" padding="lg">
        <Tabs defaultValue="bill">
          <Tabs.List>
            <Tabs.Tab value="bill">Bill</Tabs.Tab>
            <Tabs.Tab value="history">Payment History</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="bill" pt="md">
            <Table withBorder highlightOnHover>
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th key={col.key}>{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {billData.length > 0 ? (
                  billData.map((row, index) => (
                    <tr key={index}>
                      <td>{row.month}</td>
                      <td>{row.baseAmount}</td>
                      <td>{row.rebateCount}</td>
                      <td>{row.rebateAmount}</td>
                      <td>{row.monthlyBill}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center" }}>
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>

            <Text mt="md" size="lg" weight={700}>
              Total Remaining Balance: 0
            </Text>
            <Text size="lg" weight={500}>
              Current Mess Status: Deregistered
            </Text>

            <Group position="right" mt="md">
              <Button
                variant="filled"
                color="blue"
                leftIcon={<DownloadSimple size={16} />}
              >
                Download
              </Button>
            </Group>
          </Tabs.Panel>

          <Tabs.Panel value="history" pt="md">
            <Text>Payment History Content</Text>
          </Tabs.Panel>
        </Tabs>
      </Card>
    </Container>
  );
}

export default MessBilling;
