import React, { useState } from "react";
import {
  TextInput,
  Button,
  Container,
  Title,
  Paper,
  Space,
  Group,
  Select,
} from "@mantine/core";
import { MagnifyingGlass, FunnelSimple } from "@phosphor-icons/react";
import FusionTable from "../../../components/FusionTable"; // Adjust the path as needed

// Dummy Data for mess registrations
const studentsData = [
  {
    id: 1,
    first_name: "Karthik",
    last_name: "Padarthi",
    student_id: "22BCS177",
    programme: "B.Tech",
    status: "Registered",
    mess_option: "Mess 1",
  },
  {
    id: 2,
    first_name: "Utkarsh",
    last_name: "Purohit",
    student_id: "22BCS260",
    programme: "M.Tech",
    status: "Deregistered",
    mess_option: "Mess 2",
  },
  {
    id: 3,
    first_name: "Swaran",
    last_name: "Tej",
    student_id: "22BCS263",
    programme: "B.Tech",
    status: "Registered",
    mess_option: "Mess 1",
  },
];

function ViewRegistrations() {
  const [filteredStudents, setFilteredStudents] = useState(studentsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [programFilter, setProgramFilter] = useState("All");
  const [messFilter, setMessFilter] = useState("All");

  const handleFilter = () => {
    let filtered = studentsData;

    if (searchQuery) {
      filtered = filtered.filter((student) =>
        student.student_id.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    } else {
      if (statusFilter !== "All")
        filtered = filtered.filter(
          (student) => student.status === statusFilter,
        );
      if (programFilter !== "All")
        filtered = filtered.filter(
          (student) => student.programme === programFilter,
        );
      if (messFilter !== "All")
        filtered = filtered.filter(
          (student) => student.mess_option === messFilter,
        );
    }

    setFilteredStudents(filtered);
  };

  return (
    <Container size="lg" style={{ maxWidth: "800px", marginTop: "25px" }}>
      <Paper shadow="md" radius="md" p="xl" withBorder>
        <Title order={2} align="center" mb="lg" style={{ color: "#1c7ed6" }}>
          View Mess Registrations
        </Title>

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

        <Group grow mb="lg">
          <Select
            label="Filter by Status"
            value={statusFilter}
            onChange={(value) => setStatusFilter(value)}
            data={["Registered", "Deregistered", "All"]}
            radius="md"
            size="md"
            icon={<FunnelSimple size={18} />}
          />
          <Select
            label="Filter by Program"
            value={programFilter}
            onChange={(value) => setProgramFilter(value)}
            data={["B.Tech", "M.Tech", "All"]}
            radius="md"
            size="md"
            icon={<FunnelSimple size={18} />}
          />
          <Select
            label="Filter by Mess"
            value={messFilter}
            onChange={(value) => setMessFilter(value)}
            data={["Mess 1", "Mess 2", "All"]}
            radius="md"
            size="md"
            icon={<FunnelSimple size={18} />}
          />
        </Group>

        <Button
          fullWidth
          size="md"
          radius="md"
          color="blue"
          onClick={handleFilter}
          leftIcon={<FunnelSimple size={18} />}
        >
          Apply Filters
        </Button>
        <Space h="lg" />

        <FusionTable
          caption="List of Mess Registrations"
          columnNames={[
            "first_name",
            "last_name",
            "student_id",
            "programme",
            "status",
            "mess_option",
          ]}
          elements={filteredStudents}
          headerBgColor="#be4bdb26"
          scrollableX
          width="100%"
        />
      </Paper>
    </Container>
  );
}

export default ViewRegistrations;
