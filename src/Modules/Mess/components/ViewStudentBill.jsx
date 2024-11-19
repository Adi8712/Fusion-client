import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Paper,
  Group,
  Select,
  Table,
  Space,
  Button,
  TextInput,
  Modal,
} from "@mantine/core";
import { MagnifyingGlass } from "@phosphor-icons/react";

function StudentBillManagement() {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [programFilter, setProgramFilter] = useState("all");
  const [messFilter, setMessFilter] = useState("all");
  const [errorMessage, setErrorMessage] = useState("");
  const [bills, setBills] = useState([]);
  const [payments, setPayments] = useState([]);
  const [billsModalOpen, setBillsModalOpen] = useState(false);
  const [paymentsModalOpen, setPaymentsModalOpen] = useState(false);

  const API_URL = "http://127.0.0.1:8000/mess/api/get_mess_students";
  const token = localStorage.getItem("authToken");

  const handleFilter = async () => {
    try {
      const response = await axios.post(
        API_URL,
        {
          type: "filter",
          status: statusFilter,
          program: programFilter,
          mess_option: messFilter,
          student_id: searchQuery.trim() ? searchQuery.toUpperCase() : null,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        },
      );

      if (response.data.payload) {
        setStudents(response.data.payload);
        setErrorMessage("");
      } else {
        setStudents([]);
        setErrorMessage("No students found with the given criteria.");
      }
    } catch (error) {
      console.error(
        "Error applying filters:",
        error.response?.data || error.message,
      );
      setErrorMessage("Failed to fetch filtered data. Please try again.");
    }
  };

  const viewBills = async (studentId) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/mess/api/get_student_bills",
        { student_id: studentId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        },
      );
      setBills(response.data.payload || []);
      setBillsModalOpen(true);
    } catch (error) {
      console.error("Error fetching bills:", error);
    }
  };

  const viewPayments = async (studentId) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/mess/api/get_student_payments",
        { student_id: studentId },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        },
      );
      setPayments(response.data.payload || []);
      setPaymentsModalOpen(true);
    } catch (error) {
      console.error("Error fetching payments:", error);
    }
  };

  return (
    <Container size="lg" style={{ marginTop: "25px" }}>
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        withBorder
        style={{ width: "100%", maxWidth: "100%" }}
      >
        <Title order={2} align="center" style={{ color: "#1c7ed6" }}>
          Student Bill Management
        </Title>

        <Space h="lg" />

        <TextInput
          label="Search by Roll Number"
          placeholder="Enter Roll Number"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toUpperCase())}
          radius="md"
          icon={<MagnifyingGlass size={18} />}
        />
        <Space h="sm" />

        <Group grow>
          <Select
            label="Filter by Status"
            placeholder="Select Status"
            value={statusFilter}
            onChange={(value) => setStatusFilter(value)}
            data={["all", "Registered", "Deregistered"]}
          />
          <Select
            label="Filter by Program"
            placeholder="Select Program"
            value={programFilter}
            onChange={(value) => setProgramFilter(value)}
            data={["all", "B.Tech", "M.Tech"]}
          />
          <Select
            label="Filter by Mess"
            placeholder="Select Mess"
            value={messFilter}
            onChange={(value) => setMessFilter(value)}
            data={["all", "mess1", "mess2"]}
          />
        </Group>

        <Space h="lg" />

        <Button fullWidth onClick={handleFilter}>
          Apply Filters
        </Button>

        <Space h="lg" />

        {errorMessage && (
          <div style={{ color: "red", textAlign: "center" }}>
            {errorMessage}
          </div>
        )}

        <Table
          striped
          highlightOnHover
          withBorder
          style={{ width: "100%", maxWidth: "100%" }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Program</th>
              <th>Balance</th>
              <th>Mess</th>
              <th>View Bills</th>
              <th>View Payments</th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((student, index) => {
                const {
                  first_name,
                  last_name,
                  student_id,
                  program,
                  balance,
                  mess_option,
                } = student;
                return (
                  <tr key={index}>
                    <td>{`${first_name} ${last_name}`}</td>
                    <td>{student_id}</td>
                    <td>{program}</td>
                    <td>{balance}</td>
                    <td>{mess_option}</td>
                    <td>
                      <Button
                        size="xs"
                        style={{
                          backgroundColor: "#2196f3",
                          color: "#fff",
                          borderRadius: "12px",
                        }}
                        onClick={() => viewBills(student_id)}
                      >
                        View Bills
                      </Button>
                    </td>
                    <td>
                      <Button
                        size="xs"
                        style={{
                          backgroundColor: "#2196f3",
                          color: "#fff",
                          borderRadius: "12px",
                        }}
                        onClick={() => viewPayments(student_id)}
                      >
                        View Payments
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Paper>

      <Modal
        opened={billsModalOpen}
        onClose={() => setBillsModalOpen(false)}
        title="Student Bills"
        size="lg"
      >
        <Table withBorder highlightOnHover>
          <thead>
            <tr>
              <th>Bill ID</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bills.length > 0 ? (
              bills.map((bill, index) => (
                <tr key={index}>
                  <td>{bill.id}</td>
                  <td>{bill.date}</td>
                  <td>{bill.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No bills available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Modal>

      <Modal
        opened={paymentsModalOpen}
        onClose={() => setPaymentsModalOpen(false)}
        title="Student Payments"
        size="lg"
      >
        <Table withBorder highlightOnHover>
          <thead>
            <tr>
              <th>Payment ID</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.length > 0 ? (
              payments.map((payment, index) => (
                <tr key={index}>
                  <td>{payment.id}</td>
                  <td>{payment.date}</td>
                  <td>{payment.amount}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" style={{ textAlign: "center" }}>
                  No payments available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Modal>
    </Container>
  );
}

export default StudentBillManagement;
