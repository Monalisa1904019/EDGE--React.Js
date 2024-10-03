import { Box, Typography, Button , TextField} from '@mui/material';
import React,{useState} from 'react'
import FirstComponent from './FirstComponent';
import FifthComponent from './FifthComponent';

function Component3101(props){
    const [count, setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        setCount(count-1);
    };

    // const handleButtonClick = () =>{
    //     alert("button clicked");
    // };

    // const handleChange = () => {
    //     console.log("okk");
    // };

    
    return(
         <Box  sx={{
            display: 'flex',
            flexDirection: 'column', // Arrange children vertically
            alignItems: 'center',    // Center horizontally
            justifyContent: 'center', // Center vertically
            height: '50vh',         // Full height of the viewport
            textAlign: 'center',      // Center text
        }}>
            {/* {props.Product.map((products) =>(
                //<p>{products.price}</p>
                <div>{products.price > 45 ? <FirstComponent/>: <FifthComponent/>}</div>
            ))} */}

            
            <Button variant ="contained" onClick={increment}>
                 increment
            </Button>
           
            <Typography>
                {/* variant="contained"  */}
                {count}
            </Typography>
            <Button variant ="contained" onClick={decrement}>
                 decrement
            </Button>
            {/* <TextField type="text" onChange={handleChange}></TextField> */}
         </Box>   
    );
}

export default Component3101;