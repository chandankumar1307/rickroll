import React, { useState, useEffect } from "react";
import axios from "axios";
import "./form.css";

const Form = () => {
  const [Name, setName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  // do a post request to the backend

  const handlePost = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/api", data);
      // const response = await axios.post(
      //   "https://8d8c-2409-40d0-1032-f93e-fdf4-1f03-285a-62b6.in.ngrok.io/api",
      //   data
      // );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    const data = {
      name: Name,
      number: PhoneNumber,
    };
    handlePost(data);
    console.log(data);
  };

  useEffect(() => {}, [Name, PhoneNumber]);

  return (
    <div className="signup-form">
      <div className="container">
        <div className="header">
          <h1>
            WELCOME TO RICK ROLL
            {/* <iframe
              src="https://giphy.com/embed/g7GKcSzwQfugw"
              width="48"
              height="40"
              frameBorder="0"
              className="rickrollGiphy"
            ></iframe> */}
          </h1>
          <p>Enter recipients details</p>
        </div>
        <form>
          <div className="input">
            <i className="fa-solid fa-user" />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="input">
            <i className="fa-solid fa-envelope" />
            <input
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Phone Number with Country Code"
            />
          </div>
          <input
            className="signup-btn"
            onClick={handleInput}
            type="submit"
            defaultValue="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
