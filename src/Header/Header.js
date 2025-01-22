import './Header.css';
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

function Header(){

  const navigate = useNavigate();
  const page = useLocation();
  const isMainPage = page.pathname === "/";
  const goHome = () => {
    navigate('/');
  };

  return (
    <header className="header">
      <h1>Welcome to Wally's Wonder Festival App!</h1>

      {!isMainPage && (
        <button onClick={goHome} className="home-btn"aria-labelledby="Home">
          Go Home
        </button>
      )}
    </header>
  )
}

export default Header;