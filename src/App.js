import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<h1>Hi Wally</h1>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
