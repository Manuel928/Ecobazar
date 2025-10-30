import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Mainlayout from "./layout/Mainlayout";
import CreateAccount from "./pages/createAccount/CreateAccount";
import SignIn from "./pages/signIn/SignIn";
import NotFound from "./pages/notFound/NotFound";
import ProductCategory from "./pages/productCategory/ProductCategory";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<Home />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/category/:category" element={<ProductCategory />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
