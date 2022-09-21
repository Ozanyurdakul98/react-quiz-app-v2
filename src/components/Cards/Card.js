import React, { useState } from "react";
import "./Cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export default function Card({ question, answer, tags, style }) {
  const [isShown, setIsShown] = useState(false);
  const toggle = () => setIsShown((isShown) => !isShown);
  return (
    <div className="App-main-Card">
      <button className="App-main-Card-Bookmark">
        <FontAwesomeIcon icon={faBookmark} />
      </button>
      <div className="App-main-Card-Question">
        <p>{question}</p>
      </div>
      <div className="App-main-Card-Button">
        <button className="App-main-Card-Button-Button" onClick={toggle}>
          {isShown ? "Hide Answer" : "Show Answer"}
        </button>
        <div
          className={
            isShown
              ? "App-main-Card-Button-QuizAnswer--active"
              : "App-main-Card-Button-QuizAnswer"
          }
        >
          {isShown && <p>{answer}</p>}
        </div>
      </div>
      <div className="App-main-Card-Tags">
        <ul className="App-main-Card-Tags-UL">
          {tags.map((tag, index) => (
            <li key={index}>
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
