// App.js
import React from 'react';
import Sidebar from './Components/Sidebar';
import './App.css';
import Navigation from './Components/Navigation';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="content">
       <Navigation/>
      </div>
    </div>
  );
}

export default App;
