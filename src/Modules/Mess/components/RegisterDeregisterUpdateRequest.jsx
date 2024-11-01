import { Container, Flex, Loader } from "@mantine/core";
import { useState } from "react";

import ModuleTabs from "../../../components/moduleTabs"; // Import your ModuleTabs component
import ViewRegistrationRequests from "./ViewRegistrationRequests.jsx";
import ViewDeregistrationRequests from "./ViewDeregistrationRequests.jsx";
import ViewUpdatePaymentRequests from "./ViewUpdatePaymentRequests.jsx";

function RegDeregUpdatePayment() {
  const [activeTab, setActiveTab] = useState("0");

  // Define your tab items
  const tabItems = [
    { title: "Registration Requests" },
    { title: "Deregistration Requests" },
    { title: "Update Requests" },
  ];

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <ViewRegistrationRequests />;
      case "1":
        return <ViewDeregistrationRequests />;
      case "2":
        return <ViewUpdatePaymentRequests />;
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

      {/* Main content */}
      <Container fluid>{renderTabContent()}</Container>
    </>
  );
}

export default RegDeregUpdatePayment;
