import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        {/* <Route path="*" element={<Main />}></Route> */}
      </Routes>
    </>
  );
};
export default App;
