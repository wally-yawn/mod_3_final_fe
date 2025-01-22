import './ItineraryCard.css';
import React, { useState, useEffect } from "react";

function ItineraryCard(props){
  return (
    <section className="itinerary-card">
      <h3 className="title">{props.title} - {props.date}</h3>
      <img className="itinerary-img" src = {props.img_url} alt={`${props.title} image`}></img>
    </section>
  )
}

export default ItineraryCard;