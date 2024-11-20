import React, { useState } from "react";
import {
  TextInput,
  NumberInput,
  Button,
  Container,
  Title,
  Paper,
  FileInput,
  Space,
  Grid,
} from "@mantine/core"; // Import Mantine components
import { DateInput } from "@mantine/dates";

function Registration() {
  const [file, setFile] = useState(null); // State for image upload
  const [paymentDate, setPaymentDate] = useState(null); // State for payment date
  const [txnNo, setTxnNo] = useState(""); // State for transaction number

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
          {/* Transaction Number input */}
          <TextInput
            label="Transaction No."
            placeholder="Transaction No."
            value={txnNo}
            onChange={(e) => setTxnNo(e.target.value)}
            required
            radius="md"
            size="md"
            labelProps={{ style: { marginBottom: "10px" } }}
            mt="xl"
            mb="md"
          />
          <Grid grow>
            <Grid.Col span={6}>
              {/* Amount input */}
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
            <Grid.Col span={6}>
              {/* Image input */}
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
            <Grid.Col span={6}>
              {/* Payment Date select */}
              <DateInput
                label="Payment Date"
                placeholder="MM/DD/YYYY"
                value={paymentDate}
                onChange={setPaymentDate}
                required
                radius="md"
                size="md"
                mb="lg"
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
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <DateInput
                label="Start Date"
                placeholder="MM/DD/YYYY"
                value={paymentDate}
                onChange={setPaymentDate}
                required
                radius="md"
                size="md"
                mb="lg"
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
              />
            </Grid.Col>
          </Grid>

          <Space h="xl" />

          {/* Submit button */}
          <Button fullWidth size="md" radius="md" color="blue">
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default Registration;
