import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import CreateCard from "./components/Cards/Cards";
import { DB } from "./components/DB/DB.js";

function App() {
  console.log(DB);
  return (
    <div className="App">
      <Header />
      <main style={{ overflowY: "scroll", paddingBottom: "150px" }}>
        <>
          {DB.map(({ question, answer, tags, id, style }) => (
            <CreateCard
              key={id}
              question={question}
              answer={answer}
              tags={tags}
              style={style}
            />
          ))}
        </>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
