import React, { useState, ReactNode } from "react";
import UserContext, { defaultContext } from "./UserContext";

interface Props {
  children: ReactNode;
}

const UserProvider: React.FC<Props> = ({ children }) => {
  const [contextValues, setContextValue] = useState(defaultContext);

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [token, setToken] = useState("");
  // const [checked, setChecked] = useState(false);

  // const formState = {
  //   email,
  //   setEmail,
  //   password,
  //   setPassword,
  //   checked,
  //   setChecked,
  //   token,
  //   setToken,
  // };

  return (
    <UserContext.Provider value={{ contextValues, setContextValue }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
