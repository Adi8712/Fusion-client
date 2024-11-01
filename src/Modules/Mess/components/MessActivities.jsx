import { Container, Flex, Loader } from "@mantine/core";
import { useState } from "react";

import ModuleTabs from "../../../components/moduleTabs"; // Import your ModuleTabs component
import UpdateBill from "./UpdateBills.jsx";
import BillBase from "./BillBaseAndExcelUpload.jsx";
import ViewStudentBill from "./ViewStudentBill.jsx";

function MessActivities() {
  const [activeTab, setActiveTab] = useState("0");

  // Define your tab items
  const tabItems = [
    { title: "Bill base and Excel upload" },
    { title: "Update Bill" },
    { title: "View Bill" },
  ];

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <BillBase />;
      case "1":
        return <UpdateBill />;
      case "2":
        return <ViewStudentBill />;
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
      <Container fluid style={{ maxWidth: "600px", margin: "0 auto" }}>
        {renderTabContent()}
      </Container>
    </>
  );
}

export default MessActivities;
