import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { ADD_USER } from "../GraphQL/Mutations";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUser] = useMutation(ADD_USER);

  const SendData = (email: string, password: string) => {
    createUser({
      variables: {
        email: email,
        password: password,
      },
    });
  };

  return (
    <>
      <div className="loginContainer">
        <div className="email">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="4324.smith@gmail.com"
          ></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>
        </div>

        <button
          onClick={() => {
            SendData(email, password);
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};
export default Register;
