import React from "react";
import { Card, Tabs, Table, Text, Container } from "@mantine/core";
import { DownloadSimple } from "@phosphor-icons/react";

function MyComponent() {
  return (
    <Container size="lg" padding="md">
      <Card shadow="sm" padding="lg">
        <Card.Section>
          <Tabs defaultValue="leaveRequest">
            <Tabs.List>
              <Tabs.Tab
                value="leaveRequest"
                icon={<DownloadSimple size={16} />}
              >
                Leave Requests
              </Tabs.Tab>
              <Tabs.Tab value="vacationFoodRequests">
                Vacation Food Requests
              </Tabs.Tab>
              <Tabs.Tab value="specialFoodRequests">
                Special Food Requests
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="leaveRequest" pt="md">
              <Table withBorder highlightOnHover>
                <thead>
                  <tr>
                    <th style={{ textAlign: "center" }}>Date</th>
                    <th style={{ textAlign: "center" }}>Type</th>
                    <th style={{ textAlign: "center" }}>From</th>
                    <th style={{ textAlign: "center" }}>To</th>
                    <th style={{ textAlign: "center" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ textAlign: "center" }}>2023-11-22</td>
                    <td style={{ textAlign: "center" }}>Vacation</td>
                    <td style={{ textAlign: "center" }}>2023-11-23</td>
                    <td style={{ textAlign: "center" }}>2023-11-25</td>
                    <td style={{ textAlign: "center" }}>
                      <DownloadSimple size={16} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Tabs.Panel>

            <Tabs.Panel value="vacationFoodRequests" pt="md">
              <Text>Vacation Food Requests content goes here.</Text>
            </Tabs.Panel>

            <Tabs.Panel value="specialFoodRequests" pt="md">
              <Text>Special Food Requests content goes here.</Text>
            </Tabs.Panel>
          </Tabs>
        </Card.Section>
      </Card>
    </Container>
  );
}

export default MyComponent;
