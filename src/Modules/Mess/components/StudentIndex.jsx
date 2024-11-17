import { Button, Container, Flex, Loader, Tabs, Text } from "@mantine/core";
import { CaretCircleLeft, CaretCircleRight } from "@phosphor-icons/react";
import { useRef, useState } from "react";
import CustomBreadcrumbs from "../../../components/Breadcrumbs.jsx";
import classes from "../styles/messModule.module.css";
import UpdatePayments from "./UpdatePayments.jsx";
import Registration from "./registration.jsx";
import Deregistration from "./deregistration.jsx";
import ViewMenu from "./ViewMenu.jsx";
import StudentFeedback from "./StudentFeedback.jsx";
import RequestTabs from "./RebateAndSpecialFoodRequests.jsx";
import ViewBillPayments from "./ViewBillsAndPayments.jsx";

function Student() {
  const [activeTab, setActiveTab] = useState("0");
  const tabsListRef = useRef(null);

  const tabItems = [
    { title: "View Menu" },
    { title: "View Bill and Payments" },
    { title: "Registration" },
    { title: "Feedback" },
    { title: "Applications" },
    { title: "Update Payment" },
    { title: "Deregistration" },
  ];

  const handleTabChange = (direction) => {
    const newIndex =
      direction === "next"
        ? Math.min(+activeTab + 1, tabItems.length - 1)
        : Math.max(+activeTab - 1, 0);
    setActiveTab(String(newIndex));
    tabsListRef.current.scrollBy({
      left: direction === "next" ? 50 : -50,
      behavior: "smooth",
    });
  };

  // Function to render content based on active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "0":
        return <ViewMenu />;
      case "1":
        return <ViewBillPayments />;
      case "2":
        return <Registration />;
      case "3":
        return <StudentFeedback />;
      case "4":
        return <RequestTabs />;
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
        <Flex justify="flex-start" align="center" gap="1rem" mt="1.5rem">
          <Button
            onClick={() => handleTabChange("prev")}
            variant="default"
            p={0}
            bd={0}
            bg="transparent"
          >
            <CaretCircleLeft
              className={classes.fusionCaretCircleIcon}
              weight="light"
            />
          </Button>

          <div className={classes.fusionTabsContainer} ref={tabsListRef}>
            <Tabs value={activeTab} onChange={setActiveTab}>
              <Tabs.List style={{ display: "flex", flexWrap: "nowrap" }}>
                {tabItems.map((item, index) => (
                  <Tabs.Tab
                    value={`${index}`}
                    key={index}
                    className={
                      activeTab === `${index}`
                        ? classes.fusionActiveRecentTab
                        : ""
                    }
                  >
                    <Flex gap="4px">
                      <Text>{item.title}</Text>
                    </Flex>
                  </Tabs.Tab>
                ))}
              </Tabs.List>
            </Tabs>
          </div>

          <Button
            onClick={() => handleTabChange("next")}
            variant="default"
            p={0}
            bd={0}
            bg="transparent"
          >
            <CaretCircleRight
              className={classes.fusionCaretCircleIcon}
              weight="light"
            />
          </Button>
        </Flex>
      </Flex>

      {/* Main content */}
      <Container fluid>{renderTabContent()}</Container>
    </>
  );
}

export default Student;
