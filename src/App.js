import React, { useState } from "react";
import { DB } from "./components/DB/DB.js";
import Header from "./components/Header/Header";
import Cards from "./pages/Cards/Cards";
import Profile from "./pages/Profile/Profile.js";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");

  return (
    <div className="App">
      <Header />
      <main style={{ overflowY: "scroll", paddingBottom: "150px" }}>
        {page === "Home" && <Cards cards={DB} />}
        {page === "Profile" && <Profile />}
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
