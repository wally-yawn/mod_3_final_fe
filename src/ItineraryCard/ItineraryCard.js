import './ItineraryCard.css';
import React, { useState, useEffect } from "react";

function ItineraryCard(props){
  return (
    <section className="itinerary-card">
      <h2 className="title">{props.title} - {props.date}</h2>
      <img className="itinerary-img" src = {props.img_url} alt={`${props.title} image`}></img>
    </section>
  )
}

export default ItineraryCard;