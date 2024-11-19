import React, { useState } from "react";
import {
  TextInput,
  NumberInput,
  Button,
  Container,
  Title,
  Paper,
  Space,
  FileInput,
  Grid,
} from "@mantine/core"; // Import Mantine components
import { DateInput } from "@mantine/dates";
import { User } from "@phosphor-icons/react"; // Import Phosphor Icons
import "@mantine/dates/styles.css"; // Import Mantine DateInput styles
import "dayjs/locale/en"; // Day.js for locale support

function Registration() {
  const [file, setFile] = useState(null); // State for image upload
  const [paymentDate, setPaymentDate] = useState(null); // State for payment date
  const [studentId, setStudentId] = useState(""); // State for student ID

  return (
    <Container
      size="lg"
      style={{
        display: "flex",
        justifyContent: "center", // Centers the form horizontally
        marginTop: "40px",
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
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Registration Form
        </Title>
        <form method="post" action="/path/to/your/registration/endpoint">
          {/* Transaction Number Input */}

          <TextInput
            label="Transaction No."
            placeholder="Transaction No."
            id="TxnNo"
            required
            radius="md"
            size="md"
            icon={<User size={20} />}
            labelProps={{ style: { marginBottom: "10px" } }}
            mb="lg"
          />

          <Grid grow>
            {/* Amount Input */}
            <Grid.Col span={6}>
              <NumberInput
                label="Amount"
                placeholder="Balance Amount"
                id="amount"
                required
                radius="md"
                size="md"
                labelProps={{ style: { marginBottom: "10px" } }}
                min={0}
                step={100}
                mb="lg"
              />
            </Grid.Col>

            {/* Image Input */}
            <Grid.Col span={6}>
              <FileInput
                label="Image"
                placeholder="Choose file"
                value={file}
                onChange={setFile}
                accept="image/*"
                required
                size="md"
                labelProps={{ style: { marginBottom: "10px" } }}
                mb="lg"
              />
            </Grid.Col>

            {/* Payment Date Input */}
            <Grid.Col span={6}>
              <DateInput
                label="Payment Date"
                placeholder="MM/DD/YYYY"
                value={paymentDate}
                onChange={setPaymentDate}
                required
                radius="md"
                size="md"
                labelProps={{ style: { marginBottom: "10px" } }}
                styles={(theme) => ({
                  dropdown: {
                    backgroundColor: theme.colors.gray[0],
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  },
                  day: {
                    "&[data-selected]": {
                      backgroundColor: theme.colors.blue[6],
                    },
                    "&[data-today]": {
                      backgroundColor: theme.colors.gray[2],
                      fontWeight: "bold",
                    },
                  },
                })}
                mb="lg"
              />
            </Grid.Col>

            {/* Start Date Input */}
            <Grid.Col span={6}>
              <DateInput
                label="Start Date"
                placeholder="MM/DD/YYYY"
                value={paymentDate}
                onChange={setPaymentDate}
                required
                radius="md"
                size="md"
                labelProps={{ style: { marginBottom: "10px" } }}
                styles={(theme) => ({
                  dropdown: {
                    backgroundColor: theme.colors.gray[0],
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
                  },
                  day: {
                    "&[data-selected]": {
                      backgroundColor: theme.colors.blue[6],
                    },
                    "&[data-today]": {
                      backgroundColor: theme.colors.gray[2],
                      fontWeight: "bold",
                    },
                  },
                })}
                mb="lg"
              />
            </Grid.Col>
          </Grid>
          {/* Student Id Input */}
          <TextInput
            label="Student ID"
            placeholder="Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            radius="md"
            size="md"
            mb="lg"
          />

          <Space h="xl" />

          {/* Submit Button */}
          <Button fullWidth size="md" radius="md" color="blue">
            Submit
          </Button>
        </form>
      </Paper>
      <Space h="xl" />
    </Container>
  );
}

export default Registration;
