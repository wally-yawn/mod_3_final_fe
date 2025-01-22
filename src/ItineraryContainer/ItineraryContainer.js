import ItineraryCard from '../ItineraryCard/ItineraryCard';
import './ItineraryContainer.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ItineraryContainer( {itineraries}){

  let allItineraries = null;

  if (itineraries?.data?.length > 0) {
    allItineraries = itineraries.data.map((itinerary) => {
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
      {console.log("all itineraries: ", allItineraries, ", itineraries: ", itineraries)}
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