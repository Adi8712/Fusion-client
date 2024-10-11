import React from "react";
import {
  TextInput,
  NumberInput,
  Select,
  Button,
  Container,
  Title,
  Paper,
  Group,
} from "@mantine/core"; // Import Mantine components
// import { IconUser, IconCurrencyDollar, IconCalendar } from "@tabler/icons-react"; // Use Tabler icons for better UX

function UpdateBill() {
  return (
    <Container size="sm" mt="xl">
      {" "}
      {/* Adjust container size and margin */}
      <Paper shadow="md" radius="md" p="xl">
        {" "}
        {/* Card-like appearance with shadow */}
        <Title order={3} align="center" mb="lg">
          Update Bill
        </Title>
        <form method="post" action="/mess/updateBill">
          <Group direction="column" grow>
            {/* Roll Number input with icon */}
            <TextInput
              label="Roll No."
              placeholder="Roll No of Student"
              id="rollNo"
              required
              // icon={<IconUser size={20} />} // Add a user icon
            />

            {/* New Amount input using Mantine NumberInput */}
            <NumberInput
              label="New Amount"
              placeholder="Enter amount"
              id="new_amount"
              required
              // icon={<IconCurrencyDollar size={20} />} // Add a dollar icon
            />

            {/* Month select input with icon */}
            <Select
              label="Month"
              id="Month"
              placeholder="Select month"
              required
              // icon={<IconCalendar size={20} />} // Add calendar icon
              data={[
                { value: "january", label: "January" },
                { value: "february", label: "February" },
                { value: "march", label: "March" },
                { value: "april", label: "April" },
                // Add more months
              ]}
            />

            {/* Year select input */}
            <Select
              label="Year"
              id="Year"
              placeholder="Select year"
              required
              data={[
                { value: "2023", label: "2023" },
                { value: "2024", label: "2024" },
                // Add other years
              ]}
            />
          </Group>

          {/* Submit button */}
          <Button fullWidth mt="xl" size="md">
            Update Bill
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default UpdateBill;
