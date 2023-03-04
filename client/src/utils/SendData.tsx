import { LOG_USER } from "../GraphQL/Mutations";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router";
import useAppContext from "../hooks/useAppContext";

const SendData = (email: string, password: string, checked: boolean) => {
  const { contextValues, setContextValue } = useAppContext();
  const navigate = useNavigate();

  const [loginUser] = useMutation(LOG_USER, {
    update() {
      navigate("/panel");
    },
    onCompleted: (data) => {
      setContextValue({ ...contextValues, token: data });
    },
  });
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

export default SendData;
