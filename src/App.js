import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResetPass from "./Container/HeadersPage/reset/ResetPass";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deshboard from "./Components/Deshboard";
import History from "./Components/History";
import Profile from "./Components/Profile";
import Station from "./Components/Station";
import Payment from "./Components/Payment";
import Help from "./Components/Help";
import Location from "./Components/Location";
import Contact from "./Components/Contact";
import SignUpvarification from "./Container/HeadersPage/login-register/SignUpvarification";
import ResetVarification from "./Container/HeadersPage/reset/ResetVarification";
import Login from "./Container/HeadersPage/login-register/Login";
import Register from "./Container/HeadersPage/login-register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="ragister" element={<Register />} />
        <Route path="resetpass" element={<ResetPass />} />
        <Route path="deshboard" element={<Deshboard />} />
        <Route path="history" element={<History />} />
        <Route path="profile" element={<Profile />} />
        <Route path="station" element={<Station />} />
        <Route path="payment" element={<Payment />} />
        <Route path="help" element={<Help />} />
        <Route path="location" element={<Location />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signvarification" element={<SignUpvarification />} />
        <Route path="resetvarification" element={<ResetVarification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
