import React, { useState } from "react";
import { DB } from "./components/DB/DB.js";
import Header from "./components/Header/Header";
import Cards from "./pages/Cards/Cards";
import Profile from "./pages/Profile/Profile.js";
import Navigation from "./components/Navigation/Navigation";
import "./App.css";

function App() {
  const [page, setPage] = useState("Home");
  const [card, setCard] = useState(DB);

  function createForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let { quizQuestion, quizAnswer, newTag, newTag2, newTag3, newTag4, id } =
      Object.fromEntries(formData);
    id = Number(id);
    // console.log({ quizQuestion, quizAnswer });
    // const value = event.target.value;
    setCard((card) => [
      ...card,
      { id, question: quizQuestion, answer: quizAnswer, tags: [newTag] },
    ]);
  }

  return (
    <div className="App">
      <Header />
      <main style={{ overflowY: "scroll", paddingBottom: "150px" }}>
        {page === "Home" && <Cards card={card} createForm={createForm} />}
        {page === "Profile" && <Profile />}
      </main>
      <Navigation page={page} setPage={setPage} />
    </div>
  );
}

export default App;
