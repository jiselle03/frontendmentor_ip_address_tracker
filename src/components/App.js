import React, { useState } from 'react';
import Axios from "axios";

import baseUrl from "../config";

const App = () => {
  const trackIp = event => {
    event.preventDefault();
    const input = document.querySelector("input").value;
    Axios.get(`${baseUrl}${input}`).then(data => console.log(data.data));
  };

  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>

        <div className="searchbar">
          <input
            type="text" 
            placeholder="Enter IP Address" 
          />
          <div 
            className="arrow-container"
            onClick={event => trackIp(event)}
          >
            <div className="arrow"></div>
          </div>
        </div>
      </header>

      <main>
        
        
      </main>
    </div>
  );
};

export default App;
