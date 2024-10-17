import React, { useState } from 'react';
import { Divider, Button, Table, Group, Text } from '@mantine/core';
import { DownloadSimple } from '@phosphor-icons/react';
import classes from '../styles/messModule.module.css';

const ViewMenu = () => {
  const menuMess1 = {
    Monday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
    Tuesday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
    // ... rest of the week
  };

  const menuMess2 = {
    Monday: { breakfast: 'Poha, Jalebi, Tea', lunch: 'Rajma, Rice, Chapati', dinner: 'Shahi Paneer, Dal Tadka, Chapati' },
    Tuesday: { breakfast: 'Puri Bhaji, Chai', lunch: 'Chhole Bhature, Rice', dinner: 'Mixed Veg, Dal Fry, Jeera Rice' },
    // ... rest of the week
  };

  const [activeMess, setActiveMess] = useState('Mess 1');
  const menu = activeMess === 'Mess 1' ? menuMess1 : menuMess2;

  const downloadMenu = () => {
    let menuContent = `Menu for ${activeMess}\n\n`;
    for (const day in menu) {
      menuContent += `${day}:\n`;
      menuContent += `Breakfast: ${menu[day].breakfast}\n`;
      menuContent += `Lunch: ${menu[day].lunch}\n`;
      menuContent += `Dinner: ${menu[day].dinner}\n\n`;
    }

    const blob = new Blob([menuContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${activeMess}-menu.txt`;
    link.click();
  };

  // Inline styles for the table
  const tableStyles = {
    borderCollapse: 'collapse',
    width: '80%',
    margin: '0 auto',
  };

  const thStyles = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#f9f9f9',
  };

  const tdStyles = {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'center',
  };

  return (
    <div className={classes.fusionText} style={{ padding: '10px', textAlign: 'center' }}>
      <Group position="center" mb="xl">
        <Text
          onClick={() => setActiveMess('Mess 1')}
          style={{
            fontWeight: activeMess === 'Mess 1' ? 'bold' : 'normal',
            color: activeMess === 'Mess 1' ? '#15abff' : '#aaa',
            cursor: 'pointer',
            backgroundColor: activeMess === 'Mess 1' ? '#15abff13' : 'transparent',
            borderRadius: '2px',
            borderBottom: activeMess === 'Mess 1' ? '2px solid #15abff' : 'none',
            padding: '5px',
          }}
        >
          Mess-1
        </Text>
        <Text
          onClick={() => setActiveMess('Mess 2')}
          style={{
            fontWeight: activeMess === 'Mess 2' ? 'bold' : 'normal',
            color: activeMess === 'Mess 2' ? '#15abff' : '#aaa',
            cursor: 'pointer',
            backgroundColor: activeMess === 'Mess 2' ? '#15abff13' : 'transparent',
            borderRadius: '2px',
            borderBottom: activeMess === 'Mess 2' ? '2px solid #15abff' : 'none',
            padding: '5px',
          }}
        >
          Mess-2
        </Text>
      </Group>

      <Divider my="sm" />

      {/* Menu table */}
      <Table striped highlightOnHover style={tableStyles}>
        <thead>
          <tr>
            <th style={thStyles}>Day</th>
            <th style={thStyles}>Breakfast</th>
            <th style={thStyles}>Lunch</th>
            <th style={thStyles}>Dinner</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(menu).map((day) => (
            <tr key={day}>
              <td style={tdStyles}>{day}</td>
              <td style={tdStyles}>{menu[day].breakfast}</td>
              <td style={tdStyles}>{menu[day].lunch}</td>
              <td style={tdStyles}>{menu[day].dinner}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Download button */}
      <Button
      onClick={downloadMenu}
      style={{
        marginTop: '20px', backgroundColor: '#15abff',color: 'white',padding: '5px 20px',border: 'none',borderRadius: '4px',cursor: 'pointer',
      }}
     >
      <DownloadSimple size={24} weight="bold" />
      </Button>
    </div>
  );
};

export default ViewMenu;