import React from 'react';
import ChargeStationHolder from "./components/ChargestationHolder"
import './App.css';

function App() {
  return (
    <div className="App">
      <p>DISCLAIMER: This is a test version it still lacks opton menu, so far its using default settings and its not connected to google map yet.</p>
      <p>It will display charging stations for electric cars near you!</p>
      <ChargeStationHolder></ChargeStationHolder>
    </div>
  );
}

export default App;
