import Main from "./components/Main";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<Main />}></Route>
      </Routes>
    </>
  );
};
export default App;
