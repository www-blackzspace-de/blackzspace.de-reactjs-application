import React from "react";
import ReactPlayer from "react-player";

import { Grid, Box } from "@mui/material";
import "../Styles/Stream.css";




function GridComponent() {
    return (
      
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={4}>
                <Box sx={{ backgroundColor: 'lightblue',
                padding: 0, textAlign: 'center', display: "flex", border: '4px solid green', }}>



<ReactPlayer url="<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>" />
                
                </Box>
                </Grid>
                <Grid item xs={4}>
                <Box sx={{ backgroundColor: 'lightblue',
                padding: 0, textAlign: 'left', display: "flex", border: '4px solid green', }}>



<ReactPlayer url="<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>" />
                
                </Box>
            </Grid>
            <Grid item xs={4}>
            <Box sx={{ backgroundColor: 'lightblue',
                padding: 0, textAlign: 'left', display: "flex", border: '4px solid green', }}>



<ReactPlayer url="<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>" />
                
                </Box>
            </Grid>
            <Grid item xs={4}>
            <Box sx={{ backgroundColor: 'lightblue',
                padding: 0, textAlign: 'left', display: "flex", border: '4px solid green', }}>



<ReactPlayer url="<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>" />
                
                </Box>
            </Grid>
            </Grid>
           
            
        </React.Fragment>
    )
}

const Stream = () => {
  return (
    <div className="Stream-Header">
            
            <div className="Header-root">
        <center><h1>Movie Stream</h1></center>
      </div>
      
    <GridComponent />

    </div>
  );
};

export default Stream;
