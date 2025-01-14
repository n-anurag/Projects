import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  // Handle form submission
  const loginHandle = (e) => {
    e.preventDefault();

    if (!userErr && !emailErr && !passErr && user && email && password) {
      alert("Form submitted successfully!");
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  // Handle username input
  const userHandler = (e) => {
    const item = e.target.value;
    setUser(item);

    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
  };

  // Handle email input
  const emailHandler = (e) => {
    const item = e.target.value;
    setEmail(item);

    if (!item.includes("@") || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(item)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
  };

  // Handle password input
  const passwordHandler = (e) => {
    const item = e.target.value;
    setPassword(item);

    if (item.length < 8) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>Registration Form</h1>
        <form onSubmit={loginHandle}>
          {/* Username */}
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={userHandler}
            />
            {userErr ? (
              <span className="error">Username must be at least 3 characters long.</span>
            ) : (
              ""
            )}
          </div>

          {/* Email */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              onChange={emailHandler}
            />
            {emailErr ? <span className="error">Please enter a valid email address.</span> : ""}
          </div>

          {/* Password */}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={passwordHandler}
            />
            {passErr ? (
              <span className="error">Password must be at least 8 characters long.</span>
            ) : (
              ""
            )}
          </div>

          {/* Submit Button */}
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default App;
