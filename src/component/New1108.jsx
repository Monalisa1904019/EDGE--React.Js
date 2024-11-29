import { Box, Typography, Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

function New1108() {
    const [searchValue, setSearchValue] = useState("");
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchdata = async() =>{
            if(!searchValue){
                setResults([]);
                return;
            }

            setIsLoading(true)
        try{
            const response = await fetch (
                'http://10.19.80.76:8081/test_api/search.php?query=${searchValue}'
            );
            const data = response.json();
            setResults(data.results || []);        
        }catch (error) {

            console.log("Error fetching data:", error);
            setResults([]);
        } finally {

        }

        };
    }, [searchValue]);


//     useEffect(() => {
//         console.log("working");
//     }, [searchValue]);

    return (
        <div>
            <TextField
                id="search"
                name="search"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                variant="outlined"
                label="Search"
            />

            {isLoading ? (
                <p>Loading...</p>
             ) : results.length > 0 ? (
             <div>
                {results.map((result, index) => (
                     <p key={index}>{result}</p>
                ))}
            </div>
            ) : searchValue ? (
                <p>No results found</p>
            ) : null}
        </div>

    
    );
 }

export default New1108;
