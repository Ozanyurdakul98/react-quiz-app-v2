import React, { useState, useEffect } from "react";
import { DB } from "./components/DB/DB.js";
import Header from "./components/Header/Header";
import Cards from "./pages/Cards/Cards";
import CreateCard from "./pages/Cards/CreateCard.js";
import Profile from "./pages/Profile/Profile.js";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");
  const [card, setCard] = useState(() => {
    return JSON.parse(localStorage.getItem("card")) ?? [];
  });

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  function newCard(question, answer, ...tags) {
    const id = Math.random().toString(36).substring(2);
    setCard((card) => [...card, { id, question, answer, tags }]);
  }

  return (
    <div className="App">
      <Header />
      <main style={{ overflowY: "scroll", paddingBottom: "150px" }}>
        {page === "Home" && (
          <>
            <Cards card={card} initial={DB} newCard={newCard} />
            <CreateCard newCard={newCard} />
          </>
        )}
        {page === "Profile" && <Profile />}
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
