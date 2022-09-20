import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
export default function CreateCard({ question, answer, tags, style }) {
  return (
    <div className="App-main-Card">
      <button className="App-main-Card-Bookmark">
        <FontAwesomeIcon icon={faBookmark} />
      </button>
      <div className="App-main-Card-Question">
        <p>{question}</p>
      </div>
      <div className="App-main-Card-Button">
        <button className="App-main-Card-Button-Button">Show Answer</button>
        <div className="App-main-Card-Button-QuizAnswer">
          <p>{answer}</p>
        </div>
      </div>
      <div className="App-main-Card-Tags">
        <ul className="App-main-Card-Tags-UL">
          {tags.map((tag) => (
            <li>
              <a href="/#" className={"App-main-Card-Tags-UL-A " + style}>
                {tag}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
