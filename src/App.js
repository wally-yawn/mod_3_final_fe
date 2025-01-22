import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header"
import ItineraryContainer from './ItineraryContainer/ItineraryContainer';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header 
                  key={"header"}
                />
                <ItineraryContainer
                  key={"itinerarycontainer"}
                />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
