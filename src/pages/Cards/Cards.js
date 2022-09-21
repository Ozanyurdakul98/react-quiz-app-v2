import Card from "../../components/Cards/Card";
import CreateCard from "./CreateCard";
export default function Cards({ cards }) {
  return (
    <>
      <section className="App-main-section">
        {cards.map(({ question, answer, tags, id, style }) => (
          <Card
            key={id}
            question={question}
            answer={answer}
            tags={tags}
            style={style}
          />
        ))}
      </section>
      <CreateCard />
    </>
  );
}
