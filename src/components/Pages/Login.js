import React, { useEffect, } from "react";


import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import "../Styles/Login.css";



function Login() {
  useEffect(() => {
    document.title = "bS | Login";
  }, []);


    return (
    <div class="head">
      <header className="Login-header">

        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
              Login
            </Typography>
          </Box>
        </Container>

        <center>
          <p></p>
        </center>

    
      </header>
      <header className="Login-body">
        <div className="body">
 
        
    

        </div>
      </header>
    </div>
  );
}

export default Login;
