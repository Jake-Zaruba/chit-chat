import React from "react";
import addImage from "../img/addImage.svg";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chit Chat</span>
        <span className="title">Register</span>
        <form className="registerForm">
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input
            style={{ display: "none" }}
            className="file"
            type="file"
            id="file"
          />
          <label className="upload" htmlFor="file">
            <img className="addImage" src={addImage}></img>
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Already Have an account? Log In</p>
      </div>
    </div>
  );
};

export default Register;
