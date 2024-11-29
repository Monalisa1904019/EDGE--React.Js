import React, {useState} from "react";
import {Box, Button, TextField } from "@mui/material";

function ComponentPostApiCall(){
    const [textValue, setTextValue] = useState("");
    const valueAdd =()=>{
        console.log(textValue);
    };
    return (
        <Box Component ="section" sx ={{p:2, border: "1px dashed grey"}}>
            <TextField>
                varient= "outlined"
                value={textValue}
                onChange= {(e) => {setTextValue(e.target.value);
                }}
            </TextField>
            <Button
                varient="contained" 
                sx={{marginLeft: "10px"}}
                onClick={valueAdd}
            >
                Add Text
            </Button>
        </Box>
    )
}

export default ComponentPostApiCall;