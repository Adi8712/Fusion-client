import React, { useState } from "react";
import {
  Button,
  TextInput,
  Select,
  Textarea,
  Container,
  Paper,
  Title,
  Group,
  Flex,
  Grid,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import "@mantine/dates/styles.css";
import "dayjs/locale/en";
import { Calendar } from "@phosphor-icons/react";

function ApplyForSpecialFood() {
  const [mess, setMess] = useState("");
  const [food, setFood] = useState("");
  const [timing, setTiming] = useState("");
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [purpose, setPurpose] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Container
      size="lg"
      style={{
        display: "flex",
        justifyContent: "center", // Centers the form horizontally
        marginTop: "10px",
      }}
    >
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        withBorder
        style={{
          width: "100%",
          minWidth: "75rem", // Set the min-width to 75rem
          padding: "2rem", // Add padding for better spacing
        }}
      >
        <Title
          order={2}
          align="center"
          mb="lg"
          style={{ color: "#1c7ed6", fontWeight: 600 }}
        >
          Apply for Special Food
        </Title>

        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="md">
            {/*  Select Mess input  */}
            <TextInput
              label="Mess"
              placeholder="Enter mess"
              value={mess}
              onChange={(event) => setMess(event.currentTarget.value)}
              required
            />

            <Grid grow>
              {/* Select Food input (left side of the grid) */}
              <Grid.Col span={6}>
                <Select
                  label="Select Food"
                  placeholder="Choose food"
                  data={["Dal Chawal", "Paneer Butter Masala", "Chicken Curry"]}
                  value={food}
                  onChange={setFood}
                  required
                />
              </Grid.Col>
              {/* Select Food Timing  input (right side of the grid) */}
              <Grid.Col span={6}>
                <Select
                  label="Select Food Timing"
                  placeholder="Choose timing"
                  data={["Breakfast", "Lunch", "Dinner"]}
                  value={timing}
                  onChange={setTiming}
                  required
                />
              </Grid.Col>
            </Grid>

            <Grid grow>
              {/* Select  start Date  input (left side of the grid) */}
              <Grid.Col span={6}>
                <DateInput
                  label="From"
                  placeholder="Select start date"
                  value={fromDate}
                  onChange={setFromDate}
                  icon={<Calendar />}
                  required
                />
              </Grid.Col>

              {/* select end date input (right side of the grid) */}
              <Grid.Col span={6}>
                <DateInput
                  label="To"
                  placeholder="Select end date"
                  value={toDate}
                  onChange={setToDate}
                  icon={<Calendar />}
                  required
                />
              </Grid.Col>
            </Grid>
            <Textarea
              label="Purpose"
              placeholder="Enter purpose"
              value={purpose}
              onChange={(event) => setPurpose(event.currentTarget.value)}
              required
            />
          </Flex>

          <Group position="right" mt="lg">
            <Button type="submit" color="blue" size="md">
              Submit
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}

export default ApplyForSpecialFood;
