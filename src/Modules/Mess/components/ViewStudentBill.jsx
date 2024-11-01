import React, { useState } from "react";
import {
  TextInput,
  Button,
  Container,
  Title,
  Paper,
  Group,
  Select,
  Space,
  Modal,
} from "@mantine/core"; // Mantine UI components
import { MagnifyingGlass, Money, Receipt } from "@phosphor-icons/react"; // Phosphor icons
import FusionTable from "../../../components/FusionTable"; // Import your FusionTable component

// Dummy Data for students
const studentsData = [
  {
    id: 1,
    first_name: "Karthik",
    last_name: "Padarthi",
    student_id: "22BCS177",
    programme: "B.Tech",
    status: "Registered",
    balance: 5000,
    mess_option: "Mess 1",
  },
  {
    id: 2,
    first_name: "Utkarsh",
    last_name: "Purohit",
    student_id: "22BCS260",
    programme: "M.Tech",
    status: "Deregistered",
    balance: 2000,
    mess_option: "Mess 2",
  },
  {
    id: 3,
    first_name: "Swaran",
    last_name: "Tej",
    student_id: "22BCS263",
    programme: "B.Tech",
    status: "Registered",
    balance: 3000,
    mess_option: "Mess 1",
  },
  // Add more student objects as needed
];

// Dummy Data for bills
const billsData = [
  {
    month: "January",
    year: 2024,
    baseAmount: 3000,
    rebateCount: 1,
    rebateAmount: 500,
    yourAmount: 2500,
  },
  {
    month: "February",
    year: 2024,
    baseAmount: 3000,
    rebateCount: 0,
    rebateAmount: 0,
    yourAmount: 3000,
  },
  {
    month: "March",
    year: 2024,
    baseAmount: 3000,
    rebateCount: 2,
    rebateAmount: 1000,
    yourAmount: 2000,
  },
  // Add more bill objects as needed
];

// Dummy Data for payments
const paymentData = [
  { month: "January", year: "2024", amountPaid: 3000 },
  { month: "February", year: "2024", amountPaid: 3000 },
  { month: "March", year: "2024", amountPaid: 2000 },
  // Add more payment objects as needed
];

function UpdateStudentBill() {
  const [filteredStudents, setFilteredStudents] = useState(studentsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [programFilter, setProgramFilter] = useState("All");
  const [messFilter, setMessFilter] = useState("All");

  const [openedBillModal, setOpenedBillModal] = useState(false);
  const [openedPaymentModal, setOpenedPaymentModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Function to handle filtering
  const handleFilter = () => {
    let filtered = studentsData;

    // Check if search query is present
    if (searchQuery) {
      // Filter by search query (roll number)
      filtered = filtered.filter((student) =>
        student.student_id.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    } else {
      // Filter by status if no search query is present
      if (statusFilter !== "All") {
        filtered = filtered.filter(
          (student) => student.status === statusFilter,
        );
      }

      // Filter by program
      if (programFilter !== "All") {
        filtered = filtered.filter(
          (student) => student.programme === programFilter,
        );
      }

      // Filter by mess option
      if (messFilter !== "All") {
        filtered = filtered.filter(
          (student) => student.mess_option === messFilter,
        );
      }
    }

    setFilteredStudents(filtered);
  };

  // Open Bill Modal
  const handleViewBill = (student) => {
    setSelectedStudent(student);
    setOpenedBillModal(true);
  };

  // Open Payment Modal
  const handleViewPayments = (student) => {
    setSelectedStudent(student);
    setOpenedPaymentModal(true);
  };

  return (
    <Container
      size="lg"
      style={{
        maxWidth: "800px", // Limit maximum width
        width: "750px", // Set fixed width
        marginTop: "25px", // Top margin
      }}
    >
      <Paper
        shadow="md"
        radius="md"
        p="xl"
        withBorder
        style={{ padding: "30px" }}
      >
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          Student Bill Management
        </Title>

        <form>
          {/* Search section */}
          <TextInput
            label="Search by Roll Number"
            placeholder="Enter Roll Number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            radius="md"
            size="md"
            mb="lg"
            icon={<MagnifyingGlass size={18} />}
          />

          <Space h="md" />

          {/* Filter section */}
          <Group grow mb="lg">
            <Select
              label="Filter by Status"
              placeholder="Select Status"
              value={statusFilter}
              onChange={(value) => setStatusFilter(value)}
              data={["Registered", "Deregistered", "All"]}
              radius="md"
              size="md"
            />
            <Select
              label="Filter by Program"
              placeholder="Select Program"
              value={programFilter}
              onChange={(value) => setProgramFilter(value)}
              data={["B.Tech", "M.Tech", "All"]}
              radius="md"
              size="md"
            />
            <Select
              label="Filter by Mess"
              placeholder="Select Mess"
              value={messFilter}
              onChange={(value) => setMessFilter(value)}
              data={["Mess 1", "Mess 2", "All"]}
              radius="md"
              size="md"
            />
          </Group>

          <Button
            fullWidth
            size="md"
            radius="md"
            color="blue"
            onClick={handleFilter}
          >
            Apply Filters
          </Button>

          <Space h="lg" />

          {/* Students Table replaced with FusionTable */}
          <FusionTable
            caption="List of Students"
            columnNames={[
              "Name",
              "Roll No",
              "Program",
              "Status",
              "Balance",
              "Mess",
              "View Bill",
              "View Payments",
            ]}
            elements={filteredStudents.map((student) => ({
              Name: `${student.first_name} ${student.last_name}`,
              "Roll No": student.student_id,
              Program: student.programme,
              Status: student.status,
              Balance: student.balance,
              Mess: student.mess_option,
              "View Bill": (
                <Button
                  variant="outline"
                  size="xs"
                  radius="md"
                  onClick={() => handleViewBill(student)}
                  leftIcon={<Receipt size={16} />}
                >
                  View Bills
                </Button>
              ),
              "View Payments": (
                <Button
                  variant="outline"
                  size="xs"
                  radius="md"
                  onClick={() => handleViewPayments(student)}
                  leftIcon={<Money size={16} />}
                >
                  View Payments
                </Button>
              ),
            }))}
            scrollableX
          />
        </form>
      </Paper>

      {/* Bill Modal */}
      <Modal
        opened={openedBillModal}
        onClose={() => setOpenedBillModal(false)}
        title={`Bills for ${selectedStudent?.first_name} ${selectedStudent?.last_name}`}
        centered
        size="lg"
      >
        <Paper shadow="sm" radius="md" withBorder p="md">
          <FusionTable
            caption="Bill Details"
            columnNames={[
              "Month",
              "Year",
              "Monthly Base Amount",
              "Rebate Count",
              "Rebate Amount",
              "Your Amount",
            ]}
            elements={billsData.map((bill) => ({
              Month: bill.month,
              Year: bill.year,
              "Monthly Base Amount": bill.baseAmount,
              "Rebate Count": bill.rebateCount,
              "Rebate Amount": bill.rebateAmount,
              "Your Amount": bill.yourAmount,
            }))}
            scrollableX
          />
        </Paper>
      </Modal>

      {/* Payment Modal */}
      <Modal
        opened={openedPaymentModal}
        onClose={() => setOpenedPaymentModal(false)}
        title={`Payments for ${selectedStudent?.first_name} ${selectedStudent?.last_name}`}
        centered
        size="lg"
      >
        <Paper shadow="sm" radius="md" withBorder p="md">
          <FusionTable
            caption="Payment Details"
            columnNames={["Month", "Year", "Amount Paid"]}
            elements={paymentData.map((payment) => ({
              Month: payment.month,
              Year: payment.year,
              "Amount Paid": payment.amountPaid,
            }))}
            scrollableX
          />
        </Paper>
      </Modal>
    </Container>
  );
}

export default UpdateStudentBill;
