import React from "react";
import Attachment from "../img/attachment.svg";
import Img from "../img/addImage.svg";

const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img className="icon" src={Attachment} />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img className="icon" src={Img} />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
