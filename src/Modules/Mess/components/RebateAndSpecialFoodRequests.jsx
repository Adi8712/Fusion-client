import React, { useState } from "react";
import {
  Tabs,
  Card,
  TextInput,
  Button,
  Textarea,
  Select,
  Group,
  Title,
  Popover,
  Table,
  Badge,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import dayjs from "dayjs";
import PropTypes from "prop-types";

// Custom Date Picker Component
function CustomDatePicker({ label }) {
  const [value, setValue] = useState(null);
  const [opened, setOpened] = useState(false);

  return (
    <Popover
      opened={opened}
      onClose={() => setOpened(false)}
      position="bottom-start"
      withArrow
    >
      <Popover.Target>
        <TextInput
          label={label}
          placeholder="dd-mm-yyyy"
          value={value ? dayjs(value).format("DD-MM-YYYY") : ""}
          onClick={() => setOpened((o) => !o)}
          readOnly
        />
      </Popover.Target>
      <Popover.Dropdown>
        <DatePicker
          value={value}
          onChange={(date) => {
            setValue(date);
            setOpened(false);
          }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}

CustomDatePicker.propTypes = {
  label: PropTypes.string.isRequired,
};

// Rebate Form Component
function RebateForm() {
  return (
    <div>
      <Select
        label="Select Mess"
        placeholder="Choose Mess"
        data={["Mess 1", "Mess 2"]}
        required
        mt="md"
      />
      <Group position="apart" mt="md">
        <CustomDatePicker label="Rebate From" />
        <CustomDatePicker label="Rebate To" />
      </Group>
      <Textarea label="Purpose" placeholder="Enter purpose" required mt="md" />
      <Button variant="filled" color="blue" fullWidth mt="md">
        Submit
      </Button>
    </div>
  );
}

// Rebate Status Table
function RebateStatus() {
  const rows = Array.from({ length: 10 }, (_, i) => ({
    date: `0${i + 1}-11-2024`,
    purpose: `Purpose ${i + 1}`,
    from: `05-11-2024`,
    to: `10-11-2024`,
    status: i % 3 === 0 ? "Approved" : i % 3 === 1 ? "Pending" : "Declined",
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
              Application Date
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Purpose
            </th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>From</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>To</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>
              Status
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
                {row.date}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.purpose}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.from}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                {row.to}
              </td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <Badge
                  color={
                    row.status === "Approved"
                      ? "green"
                      : row.status === "Pending"
                        ? "yellow"
                        : "red"
                  }
                  variant="filled"
                  style={{
                    width: "80px",
                    textAlign: "center",
                    padding: "5px 10px",
                  }}
                >
                  {row.status}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

// Special Food Form Component
function SpecialFoodForm() {
  return (
    <div>
      <Select
        label="Select Mess"
        placeholder="Choose Mess"
        data={["Mess 1", "Mess 2"]}
        required
        mt="md"
      />
      <Select
        label="Select Food"
        placeholder="Choose Food"
        data={["Food Option 1", "Food Option 2", "Food Option 3"]}
        required
      />
      <Select
        label="Select Timing"
        placeholder="Choose Timing"
        data={["Breakfast", "Lunch", "Dinner"]}
        required
        mt="md"
      />
      <Group position="apart" mt="md">
        <CustomDatePicker label="From" />
        <CustomDatePicker label="To" />
      </Group>
      <Textarea label="Purpose" placeholder="Enter purpose" required mt="md" />
      <Button variant="filled" color="blue" fullWidth mt="md">
        Submit
      </Button>
    </div>
  );
}

// Special Food Status Table
function SpecialFoodStatus() {
  return <RebateStatus />; // Use the same table as RebateStatus for consistency
}

// Main Component
function RequestTabs() {
  const [activeTab, setActiveTab] = useState("rebate");
  const [subTab, setSubTab] = useState("apply");

  const renderForm = () => {
    if (activeTab === "rebate") {
      return subTab === "apply" ? <RebateForm /> : <RebateStatus />;
    }
    if (activeTab === "specialFood") {
      return subTab === "apply" ? <SpecialFoodForm /> : <SpecialFoodStatus />;
    }
    return null;
  };

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
        Applications
      </Title>

      <Tabs value={activeTab}>
        <Tabs.List position="center" grow>
          <Tabs.Tab value="rebate" onClick={() => setActiveTab("rebate")}>
            Rebate Requests
          </Tabs.Tab>
          <Tabs.Tab
            value="specialFood"
            onClick={() => setActiveTab("specialFood")}
          >
            Special Food Requests
          </Tabs.Tab>
        </Tabs.List>
      </Tabs>

      {activeTab === "rebate" && (
        <Tabs value={subTab} onChange={setSubTab} mt="lg">
          <Tabs.List grow position="center" style={{ gap: "10px" }}>
            <Tabs.Tab value="apply" onClick={() => setSubTab("apply")}>
              Apply for Rebate
            </Tabs.Tab>
            <Tabs.Tab value="status" onClick={() => setSubTab("status")}>
              Rebate Status
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      )}

      {activeTab === "specialFood" && (
        <Tabs value={subTab} onChange={setSubTab} mt="lg">
          <Tabs.List grow position="center" style={{ gap: "10px" }}>
            <Tabs.Tab value="apply" onClick={() => setSubTab("apply")}>
              Apply for Special Food
            </Tabs.Tab>
            <Tabs.Tab value="status" onClick={() => setSubTab("status")}>
              Special Food Status
            </Tabs.Tab>
          </Tabs.List>
        </Tabs>
      )}

      <div style={{ marginTop: "30px", animation: "fadeIn 0.5s" }}>
        {renderForm()}
      </div>
    </Card>
  );
}

export default RequestTabs;
