import { Box, Typography, Button , TextField} from '@mui/material';
import { pink } from '@mui/material/colors';
import React,{useState, useEffect} from 'react'


function HwComponent(props){
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleNum1Change = (e) => {
        setNum1(Number(e.target.value));
    }

    const handleNum2Change = (e) => {
        setNum2(Number(e.target.value));
    }

    //perform addition 
    const handleAddition = () => {
        setResult(num1 + num2);
    }

    //perform subtraction 
    const handleSubtraction = () =>{
        setResult(num1-num2);
    }

    const [count, setCount]=useState(() => {
    const savedCount = localStorage.getItem('count');
    return savedCount ? JSON.parse(savedCount) : 0;  // Initialize count from local storage or set to 0 if not available
    });

    // Save the count to localStorage whenever it changes
    useEffect(()=> {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count]);

    const increment=()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        if(count>0){
            setCount(count-1);
        }
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
            height: '10vh',         // Full height of the viewport
            textAlign: 'center',      // Center text
        }}>
            {/* {props.Product.map((products) =>(
                //<p>{products.price}</p>
                <div>{products.price > 45 ? <FirstComponent/>: <FifthComponent/>}</div>
            ))} */}
            <Typography variant="h5">
                Simple Calculator
            </Typography>

            {/* TextField for Number 1 */}
            <TextField
                label = "Number 1"
                variant = "outlined"
                value = {num1}
                onChange = {handleNum1Change}
                sx = {{marginBottom: '16px', width: '200px', backgroundColor: '#FFD7C4'}}
            />

            {/* TextField for Number 2 */}
            <TextField
                label = "Number 2"
                variant = "outlined"
                value = {num2}
                onChange = {handleNum2Change}
                sx = {{marginBottom: '16px', width: '200px', backgroundColor: '#FFD7C4'}}
            />

            {/* Buttons for performing operations */}
            <Box >
                <Button variant= "conatained" onClick = {handleAddition}>                    
                     Add
                </Button>
                <Button variant= "conatained" onClick = {handleSubtraction}>                     
                     Subtract
                </Button>
            </Box>

            {/* Display Result */}
            <Typography variant="h6">
                Result:{result}
            </Typography>



            <br></br>  <br></br>  <br></br>
            
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

export default HwComponent;