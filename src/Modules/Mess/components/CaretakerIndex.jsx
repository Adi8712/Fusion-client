import { Container, Flex, Loader } from "@mantine/core";
import { useState } from "react";
import CustomBreadcrumbs from "../../../components/Breadcrumbs.jsx";
import ModuleTabs from "../../../components/moduleTabs.jsx";
import UpdateSemDates from "./UpdateSemDates.jsx";
import MessActivities from "./MessActivities.jsx";
import ViewFeedback from "./ViewFeedback.jsx";
import RespondToRebateRequest from "./RespondRebate.jsx";
import ViewSpecialFoodRequest from "./ViewSpecialFoodRequest.jsx";
import RegDeregUpdatePayment from "./RegisterDeregisterUpdateRequest.jsx";
import UpdateMenu from "./UpdateMenu.jsx";
import MessRegistrations from "./MessRegistrations.jsx";
import ViewMenu from "./ViewMenu.jsx";

function Caretaker() {
  const [activeTab, setActiveTab] = useState("0");

  const tabItems = [
    { title: "View Feedback" },
    { title: "Respond to Rebate" },
    { title: "Requests" },
    { title: "View Special Food Requests" },
    { title: "View Menu" },
    { title: "Mess Activities" },
    { title: "Mess Registrations" },
    { title: "Update Menu" },
    { title: "Update Semester Dates" },
  ];

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <ViewFeedback />;
      case "1":
        return <RespondToRebateRequest />;
      case "2":
        return <RegDeregUpdatePayment />;
      case "3":
        return <ViewSpecialFoodRequest />;
      case "4":
        return <ViewMenu />;
      case "5":
        return <MessActivities />;
      case "6":
        return <MessRegistrations />;
      case "7":
        return <UpdateMenu />;
      case "8":
        return <UpdateSemDates />;
      default:
        return <Loader />;
    }
  };

  return (
    <>
      {/* Navbar contents */}
      <CustomBreadcrumbs />

      <Flex justify="space-between" align="center" mt="lg">
        {/* Use ModuleTabs here without badges */}
        <ModuleTabs
          tabs={tabItems}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Flex>

      <Container fluid>{renderTabContent()}</Container>
    </>
  );
}

export default Caretaker;
