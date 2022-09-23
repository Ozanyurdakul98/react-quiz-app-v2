import Card from "../../components/Cards/Card";
import CreateCard from "./CreateCard";

export default function Cards({ card, createForm }) {
  return (
    <>
      {console.log("cards(db): ")}
      {console.log("card(state): ", card)}
      <section className="App-main-section">
        {card.map(({ question, answer, tags, id, style }) => (
          <Card
            key={id}
            question={question}
            answer={answer}
            tags={tags}
            style={style}
          />
        ))}
      </section>
      <CreateCard createForm={createForm} />
    </>
  );
}
