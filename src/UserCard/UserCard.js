import './UserCard.css';
import React, { useState, useEffect } from "react";

function UserCard(props){

  return (
    <section className="user-card">
      <h3 className="name">{`${props.first_name} ${props.last_name}`}</h3>
      <p className="email">{props.email}</p>
    </section>
  )
}

export default UserCard;
