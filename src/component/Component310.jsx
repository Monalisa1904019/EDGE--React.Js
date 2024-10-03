import { Box, Typography } from '@mui/material';
import React from 'react'


function Component310({Product}){
    return(
      
            // <div>
        // {ProductList.map((product) =>(

        //         <div key = {product.id} style= {{marginBottom: '20x'}}>
        //             <h2>{product.name}</h2>
        //             <p>{product.details}</p>
        //             <p><strong>Sizes:</strong>{product.size.join(",")}</p>
        //             <p><strong>Colors:</strong>{product.size.join(",")}</p>
        //         </div>
        //     ))}
        // </div>
        <div>
            <Box style={{ marginTop: "16px "}}>
                {Product.map((product) => (
                    <Box
                        key = {product.id}
                        sx = {{
                            border: "1px solid blue",
                            borderRadius: "8px",
                            padding: "16px",
                            textAlign: "left",
                            marginBottom: '16px',

                        }}
                    >
                        <Typography variant = "h6" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {product.details}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Price:BDT {product.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {product.size.join(",")}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {product.color.join(",")}
                        </Typography>
                    </Box>                    
                ))}
            </Box>
        </div>     
    
    );
}

export default Component310