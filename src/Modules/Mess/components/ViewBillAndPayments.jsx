import React from "react";
import { Card, Text, Button, Group, Container, Flex } from "@mantine/core";
import { DownloadSimple } from "@phosphor-icons/react"; // Import icons
import FusionTable from "../../../components/FusionTable"; // Adjust path as needed
import ModuleTabs from "../../../components/moduleTabs"; // Adjust the import path based on your project structure

function MessBilling() {
  const billData = []; // Replace with actual data if available

  // Define table columns based on the FusionTable requirement
  const columns = [
    "month",
    "baseAmount",
    "rebateCount",
    "rebateAmount",
    "monthlyBill",
  ];

  // State to manage active tab
  const [activeTab, setActiveTab] = React.useState("0");

  // Tab items
  const tabItems = [
    { title: "Bill", value: "0" },
    { title: "Payment History", value: "1" },
  ];

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return (
          <>
            <FusionTable
              caption="Monthly Mess Bill"
              columnNames={columns}
              elements={billData}
              headerBgColor="#be4bdb26"
              scrollableX={false}
              width="100%"
            />
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
          </>
        );
      case "1":
        return <Text>Payment History Content</Text>;
      default:
        return null;
    }
  };

  return (
    <Container size="lg" padding="md">
      {/* Tab navigation separated from the main content */}
      <Flex justify="center" align="center" mt="5">
        <Flex justify="space-between" align="center" gap="1rem" mt="1.5rem">
          <Button
            onClick={() =>
              setActiveTab((prev) => Math.max(+prev - 1, 0).toString())
            }
            variant="default"
            p={0}
            style={{ border: "none" }}
            disabled={activeTab === "0"} // Disable button if on the first tab
          />

          {/* Tabs container with scrolling */}
          <ModuleTabs
            tabs={tabItems}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          <Button
            onClick={() =>
              setActiveTab((prev) =>
                Math.min(+prev + 1, tabItems.length - 1).toString(),
              )
            }
            variant="default"
            p={0}
            style={{ border: "none" }}
            disabled={activeTab === `${tabItems.length - 1}`} // Disable button if on the last tab
          />
        </Flex>
      </Flex>

      <Card shadow="sm" padding="lg" style={{ marginTop: "1rem" }}>
        {/* Render the active tab's content */}
        <div style={{ paddingTop: "1rem" }}>{renderTabContent()}</div>
      </Card>
    </Container>
  );
}

export default MessBilling;
