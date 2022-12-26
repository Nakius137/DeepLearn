import { useNavigate } from "react-router";
import "../styles/Main.css";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import { useEffect } from "react";

const Main = () => {
  const navigate = useNavigate();
  const { data } = useQuery(LOAD_USERS);

  useEffect(() => {
    console.log(data);
  }, [data]);
  // import React, { useEffect } from "react";
  // import { useQuery, gql } from "@apollo/client";
  // import { LOAD_USERS } from "../GraphQL/Queries";

  // const GetUser = () => {
  //   const { data } = useQuery(LOAD_USERS);

  //   useEffect(() => {
  //     console.log(data);
  //   }, [data]);

  //   return 1;
  // };

  // export default GetUser;

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
