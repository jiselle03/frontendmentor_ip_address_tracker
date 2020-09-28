import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import baseUrl from '../config';
import ResultBox from './ResultBox';
import MapContainer from './MapContainer';

const App = () => {
  const [result, setResult] = useState({});
  
  const handleSearch = event => {
    event.preventDefault();
    const input = document.querySelector("input").value;
    trackIp(input);
  };

  const trackIp = input => {
    Axios.get(`${baseUrl}${input}`).then(response => {
      setResult(response.data);
    });
  };
  
  useEffect(() => {
    trackIp("128.32.255.255");
  }, []);

  return (
    <div className="App">
      <header>
        <h1>IP Address Tracker</h1>

        <div className="searchbar">
          <input
            type="text" 
            placeholder="Search for any IP address or domain" 
          />
          <div 
            className="arrow-container"
            onClick={event => handleSearch(event)}
          >
            <div className="arrow"></div>
          </div>
        </div>
      </header>

      <main> 
        <ResultBox result={result} />
        
        {result.location && (
          <MapContainer position={[result.location.lat, result.location.lng]} />
        )}
      </main>
    </div>
  );
};

export default App;
