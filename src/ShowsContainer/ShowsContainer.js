import ShowCard from '../ShowCard/ShowCard';
import './ShowsContainer.css';
import React, { useState, useEffect } from "react";

function ShowsContainer(shows){

  let allCards = null;

  if (shows.shows.length > 0) {
    allCards = shows.shows.map((show) => {
      return (
        <div className="show-card" key={show.id}>
          <ShowCard
            id={show.id}
            name={show.name}
            time={show.time}
          />
        </div>
      )
    })
  }

  return(
    <section className="shows-container">
      <h3>Shows</h3>
      <section>
        {allCards === null ?(
          <p className="null-message">No shows to show</p>
        ) : (
          <div className="all-cards">{allCards}</div>
        )}
      </section>
    </section>
  )
}

export default ShowsContainer;