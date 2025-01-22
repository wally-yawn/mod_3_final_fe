import ItineraryCard from '../ItineraryCard/ItineraryCard';
import './ItineraryContainer.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItineraryContainer( {itineraries, filter}){

  let allItineraries = null;

  console.log("itineraries in container: ", itineraries, " filter: ", filter)
  
  let filteredItineraries = Array.isArray(itineraries?.data)
    ? itineraries.data.filter((itinerary) => {
      if (filter !== 'all'){
        return itinerary.attributes.date === filter;
      }
        return true;
    })
    : []
  
  // console.log("filteredItineraries: ", filteredItineraries)
  if (filteredItineraries?.length > 0) {
    allItineraries = filteredItineraries.map((itinerary) => {
      return (
        <div key={itinerary.id}>
          <Link to={`/itinerary/${itinerary.id}`}>
            <ItineraryCard
              id={itinerary.id}
              date={itinerary.attributes.date}
              title={itinerary.attributes.title}
              img_url={itinerary.attributes.img_url}
            />
          </Link>
        </div>
      )
    })
  }

  return (
    <section className="itineraries-container">
      <h2>Current Itineraries</h2>
      {itineraries === null ?(
        <p className="null-message">No itineraries to show</p>
      ) : (
        <div className="itineraries">{allItineraries}</div>
      )}
    </section>
  )
}

export default ItineraryContainer;