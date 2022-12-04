import { useNavigate } from "react-router";
import "../styles/Main.css";
const Main = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="title">DeepLearn</div>
        <div>
          <button onClick={() => navigate("login")}>Log In</button>
          <button onClick={() => navigate("register")}>Sign In</button>
        </div>
      </div>
      <div className="footer">
        <p>powered by</p>
        <img src="https://cdn.iconscout.com/icon/free/png-256/mongodb-5-1175140.png"></img>
      </div>
    </>
  );
};

export default Main;
