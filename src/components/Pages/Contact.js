/* Import Modules */
import React, { useEffect, } from "react";

/* Import Style-Modules/Bootstrap */

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
// import { Helmet } from "react-helmet"

/* Style-file: */
import "../Styles/Contact.css";

/* FUNCTION:: */


function Contact() {
  useEffect(() => {
    /* JS-Func to do stuff */
    document.title = "bS | News";

    console.log(
      "Console > You got into the downloads section! Have fun by loading our stuff. :3"
    );


  }, []);


    return (
    <div class="head">
      <header className="Contact-header">

        <Container maxWidth="sm">
          <Box sx={{ my: 4 }}>
            <Typography align="center" variant="h4" component="h1" gutterBottom>
              Contact
            </Typography>
          </Box>
        </Container>

        <center>
          <p>Contact me over Discord:</p>
        </center>

        <div>
          <iframe
            title="discord"
            class="discord"
            src="https://discord.com/widget?id=1129804960805175357&theme=dark"
            width="350"
            height="500"
            allowtransparency="true"
            frameborder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          ></iframe>
        </div>
      </header>
      <header className="Contact-body">
        <div className="body">
 
        
    

        </div>
      </header>
    </div>
  );
}

export default Contact;
