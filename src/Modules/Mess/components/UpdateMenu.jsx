import React, { useState } from "react";
import { Button, Divider, TextInput, Group, Text } from "@mantine/core";
import FusionTable from "../../../components/FusionTable"; // Assuming FusionTable is imported correctly
import classes from "../styles/messModule.module.css";

function UpdateMenu() {
  const initialMenu = {
    Monday: {
      breakfast: "Sprouts, Idli Sambhar, Nariyal Chutney",
      lunch: "Sprouts, Idli Sambhar, Nariyal Chutney",
      dinner: "Sprouts, Idli Sambhar, Nariyal Chutney",
    },
    Tuesday: {
      breakfast: "Idli Sambhar, Nariyal Chutney",
      lunch: "Idli Sambhar, Nariyal Chutney",
      dinner: "Idli Sambhar, Nariyal Chutney",
    },
    Wednesday: {
      breakfast: "Idli Sambhar, Nariyal Chutney",
      lunch: "Idli Sambhar, Nariyal Chutney",
      dinner: "Idli Sambhar, Nariyal Chutney",
    },
    Thursday: {
      breakfast: "Idli Sambhar, Nariyal Chutney",
      lunch: "Idli Sambhar, Nariyal Chutney",
      dinner: "Idli Sambhar, Nariyal Chutney",
    },
    Friday: {
      breakfast: "Idli Sambhar, Nariyal Chutney",
      lunch: "Idli Sambhar, Nariyal Chutney",
      dinner: "Idli Sambhar, Nariyal Chutney",
    },
    Saturday: {
      breakfast: "Idli Sambhar, Nariyal Chutney",
      lunch: "Idli Sambhar, Nariyal Chutney",
      dinner: "Idli Sambhar, Nariyal Chutney",
    },
    Sunday: {
      breakfast: "Idli Sambhar, Nariyal Chutney",
      lunch: "Idli Sambhar, Nariyal Chutney",
      dinner: "Idli Sambhar, Nariyal Chutney",
    },
  };

  const [menu1, setMenu1] = useState(initialMenu);
  const [menu2, setMenu2] = useState(initialMenu);
  const [activeMess, setActiveMess] = useState("Mess 1");

  const handleChange = (day, mealType, value) => {
    if (activeMess === "Mess 1") {
      setMenu1((prevMenu) => ({
        ...prevMenu,
        [day]: { ...prevMenu[day], [mealType]: value },
      }));
    } else {
      setMenu2((prevMenu) => ({
        ...prevMenu,
        [day]: { ...prevMenu[day], [mealType]: value },
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Menu:", activeMess === "Mess 1" ? menu1 : menu2);
  };

  // Prepare data for FusionTable
  const tableData = Object.keys(activeMess === "Mess 1" ? menu1 : menu2).map(
    (day) => ({
      Day: day,
      Breakfast: (
        <TextInput
          value={
            activeMess === "Mess 1"
              ? menu1[day].breakfast
              : menu2[day].breakfast
          }
          onChange={(e) => handleChange(day, "breakfast", e.target.value)}
          placeholder="Breakfast"
          style={{ width: "100%", padding: "5px", backgroundColor: "#f0f4ff" }}
        />
      ),
      Lunch: (
        <TextInput
          value={activeMess === "Mess 1" ? menu1[day].lunch : menu2[day].lunch}
          onChange={(e) => handleChange(day, "lunch", e.target.value)}
          placeholder="Lunch"
          style={{ width: "100%", padding: "5px", backgroundColor: "#f0f4ff" }}
        />
      ),
      Dinner: (
        <TextInput
          value={
            activeMess === "Mess 1" ? menu1[day].dinner : menu2[day].dinner
          }
          onChange={(e) => handleChange(day, "dinner", e.target.value)}
          placeholder="Dinner"
          style={{ width: "100%", padding: "5px", backgroundColor: "#f0f4ff" }}
        />
      ),
    }),
  );

  return (
    <div
      className={classes.fusionText}
      style={{ padding: "20px", textAlign: "center" }}
    >
      <Group position="center" mb="xl">
        <Text
          onClick={() => setActiveMess("Mess 1")}
          style={{
            fontWeight: activeMess === "Mess 1" ? "bold" : "normal",
            color: activeMess === "Mess 1" ? "#15abff" : "#aaa",
            cursor: "pointer",
            backgroundColor:
              activeMess === "Mess 1" ? "#15abff13" : "transparent",
            borderBottom:
              activeMess === "Mess 1" ? "2px solid #15abff" : "none",
            padding: "5px",
          }}
        >
          Mess-1
        </Text>
        <Text
          onClick={() => setActiveMess("Mess 2")}
          style={{
            fontWeight: activeMess === "Mess 2" ? "bold" : "normal",
            color: activeMess === "Mess 2" ? "#15abff" : "#aaa",
            cursor: "pointer",
            backgroundColor:
              activeMess === "Mess 2" ? "#15abff13" : "transparent",
            borderBottom:
              activeMess === "Mess 2" ? "2px solid #15abff" : "none",
            padding: "5px",
          }}
        >
          Mess-2
        </Text>
      </Group>

      <Divider my="sm" />

      <form onSubmit={handleSubmit}>
        {/* FusionTable Component */}
        <FusionTable
          caption="Weekly Menu"
          columnNames={["Day", "Breakfast", "Lunch", "Dinner"]}
          elements={tableData}
          headerBgColor="#be4bdb26"
          scrollableX={false}
        />

        <Button
          type="submit"
          style={{
            marginTop: "20px",
            backgroundColor: "#15abff",
            color: "white",
            padding: "10px 20px",
            borderRadius: "4px",
          }}
        >
          Save
        </Button>
      </form>
    </div>
  );
}

export default UpdateMenu;
