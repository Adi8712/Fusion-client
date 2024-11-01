import { Button, Container, Flex, Grid, Loader } from "@mantine/core";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useState } from "react";
import classes from "../styles/messModule.module.css";

import ViewRegistrations from "./ViewRegistration.jsx";
import ManageMess from "./addorrem.jsx";
import ModuleTabs from "../../../components/moduleTabs"; // Import your ModuleTabs component

function MessActivities() {
  const [activeTab, setActiveTab] = useState("0");

  const tabItems = [
    { title: "View Registrations" },
    { title: "Add or Remove from mess" },
  ];

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <ViewRegistrations />;
      case "1":
        return <ManageMess />;
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
            onClick={() => setActiveTab((prev) => Math.max(+prev - 1, 0))}
            variant="default"
            p={0}
            style={{ border: "none" }}
            disabled={activeTab === "0"} // Disable button if on the first tab
          >
            <CaretLeft
              className={classes.fusionCaretCircleIcon}
              weight="light"
            />
          </Button>

          {/* Replace Tabs with ModuleTabs */}
          <ModuleTabs
            tabs={tabItems}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            badges={[]} // Modify this based on your needs
          />

          <Button
            onClick={() =>
              setActiveTab((prev) => Math.min(+prev + 1, tabItems.length - 1))
            }
            variant="default"
            p={0}
            style={{ border: "none" }}
            disabled={activeTab === `${tabItems.length - 1}`} // Disable button if on the last tab
          >
            <CaretRight
              className={classes.fusionCaretCircleIcon}
              weight="light"
            />
          </Button>
        </Flex>
      </Flex>

      {/* Main content */}
      <Grid>
        <Container fluid style={{ maxWidth: "600px", margin: "0 auto" }}>
          {renderTabContent()}
        </Container>
      </Grid>
    </>
  );
}

export default MessActivities;
