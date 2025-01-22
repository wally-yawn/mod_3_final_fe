import './ShowCard.css';
import React, { useState, useEffect } from "react";

function ShowCard(props){
  const [error, setError] = useState(null);
  const [deleted, setDeleted] = useState(false)

  const formatTime = (timeString) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const deleteShow = async( id ) => {
    try {
      fetch(`http://localhost:3000/api/v1/shows/${props.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to delete show. Status: ${response.status}`)
          }
          setDeleted(true);
        })
      }
    catch (error) {
      setError(error.message)
    }
  }

  return (
    <section className="show-card">
      <h3 className="name">{props.name}</h3>
      <p className="time">{formatTime(props.time)}</p>
      {deleted && <p>This show has been deleted</p>}
      {!deleted && <button className="delete-btn" onClick={() => deleteShow(props.id)}>Delete</button>}
    </section>
  )
}

export default ShowCard;