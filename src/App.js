import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header"
import ItineraryContainer from './ItineraryContainer/ItineraryContainer';

function App() {
  const [itineraries, setItineraries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItineraries();
  }, []);

  const fetchItineraries = async () => {
    try {
      fetch("http://localhost:3000/api/v1/itineraries", {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch itineraries. Status: ${response.status}`)
          }
          return response.json();
        })
        .then((data) => {
          setItineraries(data)
        })

      }
    catch (error) {
      setError(error.message)
    }
  }

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
                  itineraries={itineraries}
                />
              </>
            }
          />
          <Route
            path="itinerary/:id"
            element={
              <p>test</p>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
