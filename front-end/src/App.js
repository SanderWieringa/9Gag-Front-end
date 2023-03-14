import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import { Post } from "./Post";

function App() {
 
  return (
    <div className="App">
      <div className="Border">
          <Routes>
            <Route exact path="/" element={<Post/>} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
