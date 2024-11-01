import React, { useState } from "react";
import { Card, Text, Container, Flex, Grid } from "@mantine/core";
import { DownloadSimple } from "@phosphor-icons/react";
import FusionTable from "../../../components/FusionTable"; // Adjust the import path as needed
import ModuleTabs from "../../../components/moduleTabs"; // Adjust the import path based on your project structure

function MyComponent() {
  // Dummy data for leave requests
  const leaveRequests = [
    {
      date: "2023-11-22",
      type: "Vacation",
      from: "2023-11-23",
      to: "2023-11-25",
      status: "Pending",
    },
    // Add more leave requests as needed
  ];

  // Define the columns for the FusionTable
  const columns = ["date", "type", "from", "to", "status"];

  // State to manage active tab
  const [activeTab, setActiveTab] = useState("0");

  // Tab items
  const tabItems = [
    { title: "Leave Requests", value: "0", icon: <DownloadSimple size={16} /> },
    { title: "Vacation Food Requests", value: "1" },
    { title: "Special Food Requests", value: "2" },
  ];

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return (
          <FusionTable
            caption="Leave Requests"
            columnNames={columns}
            elements={leaveRequests}
            headerBgColor="#be4bdb26" // Set header background color
            scrollableX={false} // Enable horizontal scrolling if needed
            width="215%"
          />
        );
      case "1":
        return <Text>Vacation Food Requests content goes here.</Text>;
      case "2":
        return <Text>Special Food Requests content goes here.</Text>;
      default:
        return null;
    }
  };

  return (
    <Container size="md" padding="md">
      {/* Tab navigation area outside of the Card */}
      <Flex justify="center" align="center" mt="5">
        <Flex justify="space-between" align="center" gap="1rem" mt="1.5rem">
          {/* Tabs container with scrolling */}
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              whiteSpace: "nowrap",
              maxWidth: "1000px",
            }}
          >
            <ModuleTabs
              tabs={tabItems}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </Flex>
      </Flex>

      {/* Main content area within the Card */}
      <Card shadow="sm" padding="lg" style={{ marginTop: "1rem" }}>
        <Grid>
          <div style={{ paddingTop: "1rem" }}>{renderTabContent()}</div>
        </Grid>
      </Card>
    </Container>
  );
}

export default MyComponent;
