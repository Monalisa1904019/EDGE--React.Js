import { CircularProgress, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ComponentPostApiCall from "./ComponentPostApiCall.jsx";


function New11081() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchValue) {
        // console.log(data);
        setResults([]);
        return;
      }
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://10.19.80.67:8081/test_api/search.php?query=${searchValue}`
          //'http://10.19.80.76:8081/test_api/search.php?query='+searchValue
          //'http://10.19.80.76:8081/test_api/search.php?query=man'
        );
        const data = await response.json();
        console.log(data);
        setResults(data.results || []);
      } catch (error) {
        console.log("Error fetching data:", error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchValue]);

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
        <CircularProgress/>
      ) : results.length > 0 ? (
        <div>
          {results.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : searchValue ? (
        <p>No results found</p>
      ) : null}

      {/* {isLoading ? (
        
        <p>Loading...</p>
      ) : results.length > 0 ? (
        <div>
          {results.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      ) : searchValue ? (
        <p>No results found</p>
      ) : null} */}

    <ComponentPostApiCall/>
    </div>
  );
}

export default New11081;