import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Mainlayout from "./layout/Mainlayout";
import CreateAccount from "./pages/createAccount/CreateAccount";
import SignIn from "./pages/signIn/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<CreateAccount />} />
          <Route path="login" element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
