import { Container, Flex, Loader } from "@mantine/core";
import { useState } from "react";

import ModuleTabs from "../../../components/moduleTabs"; // Import your ModuleTabs component
import UpdateBill from "./UpdateBills.jsx";
import ViewFeedback from "./ViewFeedback.jsx";

function Feedback() {
  const [activeTab, setActiveTab] = useState("0");

  // Define your tab items
  const tabItems = [{ title: "View Feedback" }, { title: "Statistics" }];

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <ViewFeedback />;
      case "1":
        return <UpdateBill />;
      default:
        return <Loader />;
    }
  };

  return (
    <>
      {/* Tab navigation */}
      <Flex justify="center" align="center" mt="5">
        <Flex justify="space-between" align="center" gap="1rem" mt="1.5rem">
          <ModuleTabs
            tabs={tabItems}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            badges={[]} // Assuming no badges for now; modify as necessary
          />
        </Flex>
      </Flex>

      <Container fluid style={{ maxWidth: "600px", margin: "0 auto" }}>
        {renderTabContent()}
      </Container>
    </>
  );
}

export default Feedback;
