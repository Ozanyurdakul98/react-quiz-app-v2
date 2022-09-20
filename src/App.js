import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import CreateCard from "./components/Cards/Cards";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CreateCard
          question="What's your name?"
          answer="Testing this out"
          tag="#1"
          tag2="#2"
          tag3="#3"
          tag4="#4"
        />
      </main>
      <Navigation />
    </div>
  );
}

export default App;
