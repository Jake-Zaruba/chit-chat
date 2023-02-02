import React from "react";
import profilePic from "../img/profile-pic.jpeg";

const Chats = () => {
  return (
    <div className="chats">
      <div className="userChat">
        <img className="profilePic" src={profilePic}></img>
        <div className="userChatInfo">
          <span>Jake</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
