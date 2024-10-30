import { Container, Flex, Loader } from "@mantine/core";
import { useState } from "react";
import CustomBreadcrumbs from "../../../components/Breadcrumbs.jsx";
import ViewMenu from "./ViewMenu.jsx";
import ViewFeedback from "./ViewFeedback.jsx";
import MessAnnouncements from "./MessAnnouncements.jsx";
import ViewRegistrations from "./ViewRegistration.jsx";
import ModuleTabs from "../../../components/moduleTabs"; // Adjust the import path accordingly

function Warden() {
  const [activeTab, setActiveTab] = useState("0");

  const tabItems = [
    { title: "View FeedBack | Statistics" },
    { title: "View Menu" },
    { title: "View Announcements" },
    { title: "View Registrations" },
  ];

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <ViewFeedback />;
      case "1":
        return <ViewMenu />;
      case "2":
        return <MessAnnouncements />;
      case "3":
        return <ViewRegistrations />;
      default:
        return <Loader />;
    }
  };

  return (
    <>
      {/* Navbar contents */}
      <CustomBreadcrumbs />
      <Flex justify="space-between" align="center" mt="lg">
        <Flex justify="flex-start" align="center" gap="1rem" mt="1.5rem">
          {/* Using ModuleTabs */}
          <ModuleTabs
            tabs={tabItems}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </Flex>
      </Flex>

      {/* Main content */}
      <Container fluid>{renderTabContent()}</Container>
    </>
  );
}

export default Warden;
