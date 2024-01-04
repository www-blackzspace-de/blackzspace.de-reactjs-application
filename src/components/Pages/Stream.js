

import React from "react";
import ReactPlayer from 'react-player';

import "../Styles/Stream.css";





const Stream = () => {
    return (
      <div className="Stream-Header">
        <div className="content">
        <ReactPlayer url='<https://www.youtube.com/watch?v=rgqF40Y62uA&t=506s>' />

      
        </div>
      </div>
    );
  }
   
  export default Stream;