import UserContext from "../context/UserContext";
import { useContext } from "react";

const useAppContext = () => {
  const { contextValues, setContextValue } = useContext(UserContext);

  if (!contextValues) {
    throw new Error("Missing context");
  }

  return { contextValues, setContextValue };
};

export default useAppContext;
