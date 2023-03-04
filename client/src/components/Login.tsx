import useAppContext from "../hooks/useAppContext";
import "../styles/Login.css";
import SendData from "../utils/SendData";

const Login = () => {
  const { contextValues, setContextValue } = useAppContext();
  const { email, password, checked } = contextValues;
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
            SendData(email, password, checked);
          }}
        >
          Send
        </button>
      </div>
    </>
  );
};

export default Login;
