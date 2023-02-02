import React from "react";
import profilePic from "../img/profile-pic.jpeg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chit Chat</span>
      <div className="user">
        <img className="profilePic" src={profilePic}></img>
        <span>Jake</span>
        <button>Log Out</button>
      </div>
    </div>
  );
};

export default Navbar;
