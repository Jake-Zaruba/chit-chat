import React from "react";
import Person from "../img/person.jpeg";
import ProfilePic from "../img/profile-pic.jpeg";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img className="profilePic" src={Person} />
        <span>Just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img className="profilePic" src={ProfilePic} />
      </div>
    </div>
  );
};

export default Message;
