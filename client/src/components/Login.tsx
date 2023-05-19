import useAppContext from "../hooks/useAppContext";
import "../styles/Login.css";
import { LOG_USER } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";

const Login = () => {
  const { contextValues, setContextValue } = useAppContext();
  const { email, password, checked } = contextValues;
  const navigate = useNavigate();
  
  const [loginUser] = useMutation(LOG_USER, {
    update() {
      navigate("/panel");
    },
    onCompleted: (data) => {
      setContextValue({ ...contextValues, token: data });
    },
  });
  const sendData = (email: string, password: string, checked: boolean) => {
    if (email && password) {
      loginUser({
        variables: {
          email: email,
          password: password,
          checked: checked,
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
              setContextValue({ ...contextValues, email: e.target.value })
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
              setContextValue({ ...contextValues, password: e.target.value })
            }
            type="password"
          ></input>
        </div>
        <label>Remember me</label>
        <input
          type="checkbox"
          onClick={() =>
            setContextValue({ ...contextValues, checked: !checked })
          }
          checked={checked}
        ></input>
        <button
          className="inputButton"
          onClick={() => {
            sendData(email, password, checked);
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Login;
