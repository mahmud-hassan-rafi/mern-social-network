import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import FindFriends from "./components/HomePage/FeedSection/FindFriends/FindFriends";
import WatchVideo from "./components/HomePage/FeedSection/WatchVideo/WatchVideo";
import Marketplace from "./components/HomePage/FeedSection/Marketplace/Marketplace";
import Games from "./components/HomePage/FeedSection/Games/Games";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index={true} element={<HomePage />} />
        <Route path="find-friend" element={<FindFriends />} />
        <Route path="watch" element={<WatchVideo />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="game-store" element={<Games />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
