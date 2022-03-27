import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import styled from "styled-components";
// import { FontAwesome } from "react-icons/io";
import { Login } from "./components/login";
import { Home } from "./components/home";
import "./index.css";

const App = () => {
  const [user, setUser] = useState();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} user={user} />} />
        <Route path="/home" element={<Home user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
};

// const Page = styled(BrowserRouter)`
//   width: 100vw;
// `;

export default App;
