import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
export default function CreateCard(props) {
  return (
    <div className="App-main-Card">
      <button className="App-main-Card-Bookmark">
        <FontAwesomeIcon icon={faBookmark} />
      </button>
      <div className="App-main-Card-Question">
        <p>{props.question}</p>
      </div>
      <div className="App-main-Card-Button">
        <button className="App-main-Card-Button-Button">Show Answer</button>
        <div className="App-main-Card-Button-QuizAnswer">
          <p>{props.answer}</p>
        </div>
      </div>
      <div className="App-main-Card-Tags">
        <ul className="App-main-Card-Tags-UL">
          <li>
            <a href="/#" className="App-main-Card-Tags-UL-A red">
              {props.tag}
            </a>
          </li>
          <li>
            <a href="/#" className="App-main-Card-Tags-UL-A green">
              {props.tag2}
            </a>
          </li>
          <li>
            <a href="/#" className="App-main-Card-Tags-UL-A blue">
              {props.tag3}
            </a>
          </li>
          <li>
            <a href="/#" className="App-main-Card-Tags-UL-A yellow">
              {props.tag4}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
