import './Details.css';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import UsersContainer from '../UsersContainer/UsersContainer';
import ShowsContainer from '../ShowsContainer/ShowsContainer';

function Details(props) {
  const [shows, setShows] = useState([]);
  const [users, setUsers] = useState([]);
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const [error, setError] = useState(null);

  useEffect (() => {
    fetchItineraryDetails();
  }, [id])

  const fetchItineraryDetails = async() => {
    try {
      fetch(`http://localhost:3000/api/v1/itineraries/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to fetch itinerary. Status: ${response.status}`)
          }
          return response.json();
        })
        .then((response_data) => {
          setDetails(response_data);
          if (response_data?.data?.attributes?.shows?.length > 0) {
            setShows(response_data.data.attributes.shows);
          }
          if (response_data?.data?.attributes?.users?.length > 0) {
            setUsers(response_data.data.attributes.users);
          }
        })
      }
    catch (error) {
      setError(error.message)
    }
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (!details) {
    return <p className="loading-message">Loading itinerary details...</p>;
  }

  console.log("shows from details: ", shows)
  
  return(
    <section className="details-container">
      <section className="details">
        <h2 className="title">{details.data.attributes.title} - {details.data.attributes.date}</h2>
        <img className="itinerary-img" src = {details.data.attributes.img_url} alt={`${details.data.attributes.title} image`}></img>
      </section>
      <section className="shows-and-users-container">
        <section className="users">
          {users === null ?(
            <p className="null-message">No users to show</p>
            ) : (
              <UsersContainer
                key={"user-container"}
                users={users}
              />
            )
          }
        </section>
        <section className="shows">
          {shows === null ?(
            <p className="null-message">No shows to show</p>
            ) : (
              <ShowsContainer
                key={"show-container"}
                shows={shows}
              />
            )
          }
        </section>
      </section>
    </section>
  )
}

export default Details;