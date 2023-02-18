import { useState } from "react";
import { useNavigate } from "react-router";
import "../styles/Login.css";

const Login = () => {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    checked: false,
  });
  const { email, password, checked } = formState;
  const navigate = useNavigate();

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
        <label>Remember me</label>
        <input
          type="checkbox"
          onClick={() => setFormState({ ...formState, checked: !checked })}
          checked={checked}
        ></input>
        <button
          className="inputButton"
          onClick={() => {
            // SendData(email, password);
            navigate("/panel");
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Login;
