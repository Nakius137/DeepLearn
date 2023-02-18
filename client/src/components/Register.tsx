import { useMutation } from "@apollo/client";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADD_USER } from "../GraphQL/Mutations";
import "../styles/Register.css";
const Register = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formState;
  const navigate = useNavigate();
  const [createUser] = useMutation(ADD_USER, {
    update() {
      navigate("/panel");
    },
  });

  const sendNewUser = (email: string, password: string) => {
    if (email && password) {
      createUser({
        variables: {
          email: email,
          password: password,
        },
      });
    } else {
      alert("Input error");
    }
  };

  return (
    <>
      <div className="loginContainer">
        <div className="email">
          <label>Email</label>
          <input
            value={email}
            onChange={(e) =>
              setFormState({ ...formState, email: e.target.value })
            }
            type="text"
            placeholder="j.smith@gmail.com"
          ></input>
        </div>
        <div className="password">
          <label>Password</label>
          <input
            value={password}
            onChange={(e) =>
              setFormState({ ...formState, password: e.target.value })
            }
            type="password"
          ></input>
        </div>

        <button
          className="inputButton"
          onClick={() => {
            sendNewUser(email, password);
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};
export default Register;
