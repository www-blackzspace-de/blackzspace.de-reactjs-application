import React, { useEffect, } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "../Styles/Register.css";



function Register() {
  useEffect(() => {
    document.title = "bS | Register";


  }, []);


    return (
    <div class="head">
      <header className="Register-header">

        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
              Register
            </Typography>
          </Box>
        </Container>

        <center>
          <p></p>
        </center>

    
      </header>
      <header className="Register-body">
        <div className="body">
 
        
    

        </div>
      </header>
    </div>
  );
}

export default Register;
