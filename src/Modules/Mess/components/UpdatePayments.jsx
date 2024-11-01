import { Button, Container, Flex, Grid, Loader } from "@mantine/core";
import { useRef, useState } from "react";

import UpdateBalanceRequest from "./UpdateBalanceRequest.jsx";
import UpdateBalanceRequestStatus from "./UpdateBalanceRequestStatus.jsx";
import ModuleTabs from "../../../components/moduleTabs"; // Adjust the import path based on your project structure

function UpdatePayments() {
  const [activeTab, setActiveTab] = useState("0");
  const tabsListRef = useRef(null);

  const tabItems = [
    { title: "Update Balance Request", value: "0" },
    { title: "Request Status", value: "1" },
  ];

  const handleTabChange = (direction) => {
    const newIndex =
      direction === "next"
        ? Math.min(+activeTab + 1, tabItems.length - 1)
        : Math.max(+activeTab - 1, 0);
    setActiveTab(String(newIndex));
    tabsListRef.current.scrollBy({
      left: direction === "next" ? 100 : -100,
      behavior: "smooth",
    });
  };

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <UpdateBalanceRequest />;
      case "1":
        return <UpdateBalanceRequestStatus />;
      default:
        return <Loader />;
    }
  };

  return (
    <>
      {/* Tab navigation */}
      <Flex justify="center" align="center" mt="5">
        <Flex justify="space-between" align="center" gap="1rem" mt="1.5rem">
          <Button
            onClick={() => handleTabChange("prev")}
            variant="default"
            p={0}
            style={{ border: "none" }}
            disabled={activeTab === "0"} // Disable button if on the first tab
          />

          {/* Tabs container with scrolling */}
          <div
            style={{
              display: "flex",
              overflowX: "auto",
              whiteSpace: "nowrap",
              maxWidth: "1000px",
            }}
            ref={tabsListRef}
          >
            <ModuleTabs
              tabs={tabItems}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>

          <Button
            onClick={() => handleTabChange("next")}
            variant="default"
            p={0}
            style={{ border: "none" }}
            disabled={activeTab === `${tabItems.length - 1}`} // Disable button if on the last tab
          />
        </Flex>
      </Flex>

      {/* Main content */}
      <Grid>
        <Container fluid style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {renderTabContent()}
        </Container>
      </Grid>
    </>
  );
}

export default UpdatePayments;
