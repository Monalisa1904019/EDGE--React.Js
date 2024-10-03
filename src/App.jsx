import * as React from 'react';
import SecondComponent from "./component/SecondComponent";
import ThirdComponent from "./component/ThirdComponent";
import FourthComponent from "./component/FourthComponent";
import FifthComponent from "./component/FifthComponent";
import SixthComponent from "./component/SixthComponent";
import SeventhComponent from "./component/SeventhComponent";
import FirstComponent from "./component/FirstComponent";
import Box from '@mui/material/Box'; // Import Box for flexbox layout
import Component19b2 from "./component/Component19b2";
import Component310 from "./component/Component310";
import Component3101 from "./component/Component3101";
import TenthComponent from "./component/TenthComponent";
import HwComponent from "./component/HwComponent";

function App() {
  // const studentInfo ={
  //   name: "Monalisa",
  //   email: "mona@gmail.com",
  //   devices: ["mobile  ", "laptop  ", "earphone  "],
  //   emoji:"🤷‍♀️",
  // } 

  const products = [    
    {    
      id: 1,
      name: "Chips",
      details: "Very tasty 👌",
      price: 45,
      size: [33, 34, 35],
      color: ["green", "blue", "red"],
    },
    {    
      id: 2,
      name: "Drinko",
      details: "It's a soft drink item 🤞",
      price: 50,
      size: [33, 34, 35],
      color: ["yellow", "pink", "blue"],
    },
    {    
      id: 3,
      name: "Biscuits",
      details: "Easy to digest 😊",
      price: 65,
      size: [33, 34, 35],
      color: ["purple", "red", "blue"],
    },
    {    
      id: 4,
      name: "Chocolate",
      details: "Sweet 😃",
      price: 80,
      size: [33, 34, 35],
      color: ["purple", "red", "blue"],
    }
  ];




  // Define the handleClick function
  // const handleClick = () => {
  //   alert('Button clicked!');
  // };

  return (
    <>            
      <SecondComponent/>

      {/* Use Box for flexbox to keep ThirdComponent, FourthComponent, and FifthComponent side by side */}
      <Box
        sx={{
          display: 'flex',          
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',            
        }}
      >
        <ThirdComponent />
        <FourthComponent />
        <FifthComponent />
      </Box>

      {/* Wrapper for SixthComponent and SeventhComponent to center them and connect visually */}
      <Box 
        sx={{
          display: 'flex',           // Use flexbox for side by side
          justifyContent: 'center',  // Center both components
          mt: 2,                     // Adds margin-top for spacing
        }}
      >
        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #ccc', // Optional: Adds a border to connect components
            borderRadius: '4px',      // Rounded corners for better aesthetics
            padding: 1,               // Padding around the components
          }}
        >
          <SixthComponent />
          <SeventhComponent />
        </Box>
      </Box>

      {/* Centering the FirstComponent */}
      <Box 
        sx={{
          display: 'flex',
          justifyContent: 'center',  // Center the FirstComponent
          mt: 2,                     // Optional: Adds margin-top for spacing
        }}
      >
        <FirstComponent />
      </Box>

     
      {/* <Component19b2 name="Monalisa" email="mona@gmail.com" device={devices} /> */}
        

      {/* <Component19b2 allinfo={studentInfo}/> */}
      <Component19b2 ProductList={products}/>
      <Component310 Product={products}/>

      {/* <TenthComponent/> */}


      <Component3101 Product={products}/>
        <br></br> <br></br> <br></br><br></br> <br></br> <br></br> <br></br><br></br>
      <HwComponent/>

      <h>Monalisar Shoitan bandhubi Tuly </h>
      
    </>
  );
}

export default App;
