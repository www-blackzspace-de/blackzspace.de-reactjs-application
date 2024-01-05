import React from "react";
import ReactPlayer from "react-player";

import { Grid, Box } from "@mui/material";

import "../Styles/Stream.css";




function GridComponent() {
    return (
        <React.Fragment>
            <Grid item xs={4}>
                <Box sx={{ backgroundColor: 'lightblue',
                padding: 0, textAlign: 'center', display: "auto", border: '4px solid green', }}>



<ReactPlayer url="<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>" />
                
                </Box>
                <Box sx={{ backgroundColor: 'lightblue',
                padding: 0, textAlign: 'left', display: "flex", border: '4px solid green', }}>



<ReactPlayer url="<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>" />
                
                </Box>
            </Grid>
                
           
            
        </React.Fragment>
    )
}

const Stream = () => {
  return (
    <div className="Stream-Header">
            <GridComponent />
            
      
<Grid container spacing={2}>
<Box sx={{ backgroundColor: 'lightblue',
                padding: 0, textAlign: 'left', display: "flex", border: '4px solid green', }}>



<ReactPlayer url="<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>" />
                
                </Box>
                <Box sx={{ backgroundColor: 'lightblue',
                padding: 0, textAlign: 'left', display: "flex", border: '4px solid green', }}>



<ReactPlayer url="<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>" />
                
                </Box>
                <Box sx={{ backgroundColor: 'lightblue',
                padding: 0, textAlign: 'left', display: "flex", border: '4px solid green', }}>



<ReactPlayer url="<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>" />
                
                </Box>
</Grid>
    </div>
  );
};

export default Stream;
