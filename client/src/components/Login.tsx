import React from "react";
import "../styles/Login.css";
const Login = () => {
  return (
    <>
      <div className="loginContainer">
        <div className="email">
          <label>Email</label>
          <input type="text" placeholder="j.smith@gmail.com"></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input type="password"></input>
        </div>
      </div>
    </>
  );
};

export default Login;
