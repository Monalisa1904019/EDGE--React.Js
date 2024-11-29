import { Box, Typography, Button , TextField} from '@mui/material';
import React,{useEffect, useState} from 'react'
import FirstComponent from './FirstComponent';
import FifthComponent from './FifthComponent';

function Component3101(props){
    const [count, setCount]=useState(0);

    const [textValue, setTextValue] = useState("");
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    });

    // const handleChange = (e) => {
    //     setTextValue(e.target.value);
    // };


    const increment=()=>{
        setCount(count+1);
    };

    const decrement=()=>{
        setCount(count-1);
    };

    const formSubmit =(e) => {
        e.preventDefault();
        console.log(name);
    }


    // useEffect(() => {
    //     console.log("woking");
    // }, [name]);

    useEffect(() => {
        const fetchData = () => {
            try {
                const response = fetch(
                    'http://10.19.80.72:8081/test_api//search.php?query=app'
                );
                //const data = response.json();
                console.log(response);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);


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
            

            <form onSubmit={formSubmit}>
            <TextField
                type="text"
                onChange={(e) => {
                    setName({...name, lastName: e.target.value}); // Corrected setTargetValue to setTextValue
                }}
                value={name.lastName}
                label = "last Name"
            >
            </TextField>
            <Button type = "submit">submit</Button>
             </form>
         </Box>   

        
    );
}

export default Component3101;