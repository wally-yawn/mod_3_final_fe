import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header"
import ItineraryContainer from './ItineraryContainer/ItineraryContainer';
import Details from './Details/Details';

function App() {
  const [itineraries, setItineraries] = useState([]);
  const [error, setError] = useState(null);
  const [selectedOption, setSelectedOption] = useState('all');

  useEffect(() => {
    fetchItineraries();
  }, []);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

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

    console.log("itineraries in app: ", itineraries)
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
                <section className="radio-selectors">
                  <h2>See selected days</h2>
                  <label>
                    <input 
                      type="radio" 
                      value="all" 
                      checked={selectedOption === 'all'} 
                      onChange={handleChange} 
                    />
                    All
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      value='2025-02-01'
                      checked={selectedOption === '2025-02-01'} 
                      onChange={handleChange} 
                    />
                    Day 1
                  </label>
                  <label>
                    <input 
                      type="radio" 
                      value='2025-02-02'
                      checked={selectedOption === '2025-02-02'} 
                      onChange={handleChange} 
                    />
                    Day 2
                  </label>
                </section>
                <ItineraryContainer
                  key={"itinerarycontainer"}
                  itineraries={itineraries}
                  filter={selectedOption}
                />
              </>
            }
          />
          <Route
            path="itinerary/:id"
            element={
              <>
                <Header 
                  key={"header"}
                />
                <Details>
                  key={"details"}
                </Details>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
