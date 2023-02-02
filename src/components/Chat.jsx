import React from "react";
import Camera from "../img/camera.svg";
import Friend from "../img/friend.svg";
import More from "../img/more.svg";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Jake</span>
        <div className="chatIcons">
          <img className="icon" src={Camera}></img>
          <img className="icon" src={Friend}></img>
          <img className="icon" src={More}></img>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
