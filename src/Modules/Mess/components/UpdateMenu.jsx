import React, { useState } from 'react';
import { Button, Divider, TextInput } from '@mantine/core';
import classes from '../styles/messModule.module.css'; // Import your CSS module

const UpdateMenu = () => {
  const initialMenu = {
    Monday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Sprouts, Idli Sambhar, Nariyal Chutney', dinner: 'Sprouts, Idli Sambhar, Nariyal Chutney' },
    Tuesday: { breakfast: 'Idli Sambhar, Nariyal Chutney', lunch: 'Idli Sambhar, Nariyal Chutney', dinner: 'Idli Sambhar, Nariyal Chutney' },
    Wednesday: { breakfast: 'Idli Sambhar, Nariyal Chutney', lunch: 'Idli Sambhar, Nariyal Chutney', dinner: 'Idli Sambhar, Nariyal Chutney' },
    Thursday: { breakfast: 'Idli Sambhar, Nariyal Chutney', lunch: 'Idli Sambhar, Nariyal Chutney', dinner: 'Idli Sambhar, Nariyal Chutney' },
    Friday: { breakfast: 'Idli Sambhar, Nariyal Chutney', lunch: 'Idli Sambhar, Nariyal Chutney', dinner: 'Idli Sambhar, Nariyal Chutney' },
    Saturday: { breakfast: 'Idli Sambhar, Nariyal Chutney', lunch: 'Idli Sambhar, Nariyal Chutney', dinner: 'Idli Sambhar, Nariyal Chutney' },
    Sunday: { breakfast: 'Idli Sambhar, Nariyal Chutney', lunch: 'Idli Sambhar, Nariyal Chutney', dinner: 'Idli Sambhar, Nariyal Chutney' },
  };

  const [menu1, setMenu1] = useState({ ...initialMenu, Monday: { breakfast: '', lunch: '', dinner: '' } });
  const [menu2, setMenu2] = useState(initialMenu);
  const [activeMess, setActiveMess] = useState('Mess 1');

  const handleChange = (day, mealType, value, messNumber) => {
    if (messNumber === 'Mess 1') {
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
    console.log('Updated Menu:', activeMess === 'Mess 1' ? menu1 : menu2);
  };

  const tableStyle = {
    width: '100%',
    margin: '20px auto',
    borderCollapse: 'collapse',
  };

  const cellStyle = {
    padding: '8px', 
    textAlign: 'center', 
    border: '1px solid #ddd', 
  };

  const thStyle = {
    backgroundColor: '#f9f9f9',
    padding: '8px',
    textAlign: 'center',
    border: '1px solid #ddd', 
  };

  const inputStyle = {
    width: '100%', 
    padding: '5px',
    // border: '1px solid #ccc', // Add thin border for the input
    backgroundColor: '#f0f4ff',
    fontSize: '0.9rem', 
  };

  const buttonStyle = {
    marginTop: '20px',
    backgroundColor: '#15abff',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

  const activeTabStyle = {
    fontWeight: 'bold',
  backgroundColor: '#15abff13', 
  cursor: 'pointer',
  padding: '5px', 
  borderRadius: '2px', 
  borderBottom: '2px solid #15abff',
  color: '#15abff',
//   boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 

  };

  const inactiveTabStyle = {
    fontWeight: 'normal',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    padding: '5px',
    color: '#aaa',
  };

  return (
    <div className={classes.fusionText} style={{ padding: '20px', textAlign: 'center' }}>
      {/* <Title order={3} className={classes.fusionText}>
        {activeMess} Menu
      </Title> */}

      {/* Mess 1 and Mess 2 Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div
          onClick={() => setActiveMess('Mess 1')}
          style={activeMess === 'Mess 1' ? activeTabStyle : inactiveTabStyle}
        >
          Mess 1
        </div>
        <div
          onClick={() => setActiveMess('Mess 2')}
          style={activeMess === 'Mess 2' ? activeTabStyle : inactiveTabStyle}
        >
          Mess 2
        </div>
      </div>

      <Divider my="sm" />

      <form onSubmit={handleSubmit}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Day</th>
              <th style={thStyle}>Breakfast</th>
              <th style={thStyle}>Lunch</th>
              <th style={thStyle}>Dinner</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(activeMess === 'Mess 1' ? menu1 : menu2).map((day) => (
              <tr key={day}>
                <td style={cellStyle}>{day}</td>
                <td style={cellStyle}>
                  <TextInput
                    value={activeMess === 'Mess 1' ? menu1[day].breakfast : menu2[day].breakfast}
                    onChange={(e) => handleChange(day, 'breakfast', e.target.value, activeMess)}
                    placeholder="Breakfast"
                    style={inputStyle}
                  />
                </td>
                <td style={cellStyle}>
                  <TextInput
                    value={activeMess === 'Mess 1' ? menu1[day].lunch : menu2[day].lunch}
                    onChange={(e) => handleChange(day, 'lunch', e.target.value, activeMess)}
                    placeholder="Lunch"
                    style={inputStyle}
                  />
                </td>
                <td style={cellStyle}>
                  <TextInput
                    value={activeMess === 'Mess 1' ? menu1[day].dinner : menu2[day].dinner}
                    onChange={(e) => handleChange(day, 'dinner', e.target.value, activeMess)}
                    placeholder="Dinner"
                    style={inputStyle}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Button type="submit" style={buttonStyle}>
          Save
        </Button>
      </form>
    </div>
  );
};

export default UpdateMenu;
