import React from "react";
import profilePic from "../img/profile-pic.jpeg";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Search users..." />
      </div>
      <div className="userChat">
        <img className="profilePic" src={profilePic}></img>
        <div className="userChatInfo">
          <span>Jake</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
