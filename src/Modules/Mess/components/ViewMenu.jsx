// ViewMenu.jsx
import React, { useState } from 'react';
import { Divider, Button } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';  // Importing the download icon from Mantine
import classes from '../styles/messModule.module.css'; // Importing the provided CSS module

const ViewMenu = () => {
  // Define separate menus for Mess-1 and Mess-2
  const menuMess1 = {
    Monday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
    Tuesday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
    Wednesday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
    Thursday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
    Friday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
    Saturday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
    Sunday: { breakfast: 'Sprouts, Idli Sambhar, Nariyal Chutney', lunch: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice', dinner: 'Aaloo Jeera Sabji, Dal Makhni, Jeera Rice, Chapati, Suji halwa' },
  };

  const menuMess2 = {
    Monday: { breakfast: 'Poha, Jalebi, Tea', lunch: 'Rajma, Rice, Chapati', dinner: 'Shahi Paneer, Dal Tadka, Chapati' },
    Tuesday: { breakfast: 'Puri Bhaji, Chai', lunch: 'Chhole Bhature, Rice', dinner: 'Mixed Veg, Dal Fry, Jeera Rice' },
    Wednesday: { breakfast: 'Upma, Sambhar, Chutney', lunch: 'Chana Masala, Rice, Chapati', dinner: 'Matar Paneer, Dal, Jeera Rice' },
    Thursday: { breakfast: 'Aloo Paratha, Curd', lunch: 'Kadhi Pakora, Rice, Chapati', dinner: 'Paneer Butter Masala, Dal, Chapati' },
    Friday: { breakfast: 'Bread Butter, Chai', lunch: 'Lauki Sabji, Rice, Chapati', dinner: 'Baingan Bharta, Dal Makhni, Jeera Rice' },
    Saturday: { breakfast: 'Dosa, Sambhar, Chutney', lunch: 'Rajma Rice, Chapati', dinner: 'Aloo Gobi, Dal Fry, Jeera Rice' },
    Sunday: { breakfast: 'Pancakes, Syrup', lunch: 'Chole, Rice, Chapati', dinner: 'Malai Kofta, Dal Makhni, Jeera Rice' },
  };

  const [activeMess, setActiveMess] = useState('Mess 1');

  // Choose menu based on activeMess
  const menu = activeMess === 'Mess 1' ? menuMess1 : menuMess2;

  const tableStyle = {
    width: '100%',
    margin: '20px auto',
    borderCollapse: 'collapse',
  };

  const cellStyle = {
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
  };

  const thStyle = {
    backgroundColor: '#f9f9f9',
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    fontWeight: 'bold',
  };

  const activeTabStyle = {
    fontWeight: 'bold',
    backgroundColor: '#15abff13', 
    cursor: 'pointer',
    padding: '5px', 
    borderRadius: '2px', 
    borderBottom: '2px solid #15abff',
    color: '#15abff',
  };

  const inactiveTabStyle = {
    fontWeight: 'normal',
    borderBottom: '2px solid transparent',
    cursor: 'pointer',
    padding: '5px',
    color: '#aaa',
  };

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

  return (
    <div className={classes.fusionText} style={{ padding: '20px', textAlign: 'center' }}>
      {/* Mess 1 and Mess 2 Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <div
          onClick={() => setActiveMess('Mess 1')}
          style={activeMess === 'Mess 1' ? activeTabStyle : inactiveTabStyle}
        >
          Mess-1
        </div>
        <div
          onClick={() => setActiveMess('Mess 2')}
          style={activeMess === 'Mess 2' ? activeTabStyle : inactiveTabStyle}
        >
          Mess-2
        </div>
      </div>

      <Divider my="sm" />

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
          {Object.keys(menu).map((day) => (
            <tr key={day}>
              <td style={cellStyle}>{day}</td>
              <td style={cellStyle}>{menu[day].breakfast}</td>
              <td style={cellStyle}>{menu[day].lunch}</td>
              <td style={cellStyle}>{menu[day].dinner}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Download Button with Icon */}
      <Button
        onClick={downloadMenu}
        style={{
          marginTop: '20px',
          backgroundColor: '#15abff',
          color: 'white',
          padding: '5px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        <IconDownload size={24} />
      </Button>
    </div>
  );
};

export default ViewMenu;
