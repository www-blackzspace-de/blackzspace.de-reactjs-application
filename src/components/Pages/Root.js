/* Import Modules */
import React, { useEffect } from "react";

/* Import logo */
import logo from "../Images/Main/logo.png";

/* Import styles */
import "../Styles/Root.css";

function Index() {
  useEffect(() => {
    document.title = "bS | Index";
  }, []);

  return (
    <div className="Index">
      <header className="Index-header">
        <img src={logo} className="Index-logo" alt="logo" />

        <p>Join the Space!</p>
        <a
          className="Index-link"
          href="https://board.blackzspace.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit!
        </a>
      </header>
    </div>
  );
}

export default Index;
