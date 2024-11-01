import { Container, Flex, Loader } from "@mantine/core";
import { useState } from "react";
import CustomBreadcrumbs from "../../../components/Breadcrumbs.jsx";
import ModuleTabs from "../../../components/moduleTabs.jsx"; // Import ModuleTabs
import UpdatePayments from "./UpdatePayments.jsx";
import Registration from "./registration.jsx";
import Deregistration from "./deregistration.jsx";
import ViewMenu from "./ViewMenu.jsx";
import StudentFeedback from "./StudentFeedback.jsx";
import Applications from "./Applications.jsx";
import ViewBillandPayments from "./ViewBillAndPayments.jsx";

function Student() {
  const [activeTab, setActiveTab] = useState("0");

  const tabItems = [
    { title: "View Menu" },
    { title: "View Bill and Payments" },
    { title: "Registration" },
    { title: "Feedback" },
    { title: "Applications" },
    { title: "Update Payment" },
    { title: "Deregistration" },
  ];

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <ViewMenu />;
      case "1":
        return <ViewBillandPayments />;
      case "2":
        return <Registration />;
      case "3":
        return <StudentFeedback />;
      case "4":
        return <Applications />;
      case "5":
        return <UpdatePayments />;
      case "6":
        return <Deregistration />;
      default:
        return <Loader />;
    }
  };

  return (
    <>
      {/* Navbar contents */}
      <CustomBreadcrumbs />

      <Flex justify="space-between" align="center" mt="lg">
        {/* Use ModuleTabs component */}
        <ModuleTabs
          tabs={tabItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Flex>

      {/* Main content */}
      <Container fluid>{renderTabContent()}</Container>
    </>
  );
}

export default Student;
