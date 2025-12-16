import { Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Explore from "../pages/Explore";
import Chat from "../pages/Chat";

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/profile/:id" element={<Profile />} />
    <Route path="/explore" element={<Explore />} />
    <Route path="/chat" element={<Chat />} />
  </Routes>
);

export default AppRouter;
