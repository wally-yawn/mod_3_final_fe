import UserCard from '../UserCard/UserCard';
import './UsersContainer.css';
import React, { useState, useEffect } from "react";

function UsersContainer(users){
  let allCards = null;

  if (users.users.length > 0) {
    allCards = users.users.map((user) => {
      return (
        <div className="user-card" key={user.id}>
          <UserCard
            id={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
          />
        </div>
      )
    })
  }

  return(
    <section className="users-container">
      <h3>Users</h3>
      <section>
        {allCards === null ?(
          <p className="null-message">No users to show</p>
        ) : (
          <div className="all-cards">{allCards}</div>
        )}
      </section>
    </section>
  )
}

export default UsersContainer;