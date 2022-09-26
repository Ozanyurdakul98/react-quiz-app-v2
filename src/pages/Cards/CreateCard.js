import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./CreateCard.css";

export default function CreateCard({ newCard }) {
  const [question, setQuestion] = useState("");
  //To change
  const [answer = "Your answer goes here", setAnswer] = useState();
  const [tag, setTag] = useState();
  //strings verwenden

  function createForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let { quizQuestion, quizAnswer, newTag, newTag2, newTag3, newTag4 } =
      Object.fromEntries(formData);
    // console.log({ quizQuestion, quizAnswer });
    // const value = event.target.value;
    newCard(quizQuestion, quizAnswer, newTag, newTag2, newTag3, newTag4);
  }

  return (
    <section className="main-Cards-CreateCard">
      <h2 id="main-Cards-CreateCard-H2">Contribute your own Quiz</h2>
      <div className="main-Cards-CreateCard-FlexDiv">
        <div className="App-main-Card">
          <button className="App-main-Card-Bookmark">
            <FontAwesomeIcon icon={faBookmark} />
          </button>
          <div className="App-main-Card-Question">
            <p>{question === "" ? "Your Question goes here" : question}</p>
          </div>
          <div className="App-main-Card-Button">
            <button className="App-main-Card-Button-Button">Show Answer</button>
            <div className="App-main-Card-Button-QuizAnswer--active">
              <p>{answer}</p>
            </div>
          </div>
          <div className="App-main-Card-Tags">
            <ul className="App-main-Card-Tags-UL"></ul>
          </div>
        </div>
        <div className="body-s__main-s__createQuiz-s__createQuiz-c__form">
          <form className="createForm" onSubmit={createForm}>
            <fieldset>
              <legend>Do you have a good Question?</legend>
              <label htmlFor="quizQuestion">Question here:</label>
              <input
                type="text"
                name="quizQuestion"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                id="quizQuestion"
                minLength="20"
                maxLength="150"
                placeholder="Your Question goes here"
                required
              />
              <p data-js="question-counter" className="form__counter">
                150 characters left
              </p>
              <label htmlFor="quizAnswer">Answer here:</label>
              <textarea
                type="text"
                name="quizAnswer"
                value={answer}
                onChange={(event) => {
                  setAnswer(event.target.value);
                }}
                id="quizAnswer"
                cols="30"
                rows="3"
                minLength="25"
                maxLength="200"
                placeholder="Your Answer goes here"
                required
                data-js="quizAnswerInput"
              ></textarea>
              <p data-js="answer-counter" className="form__counter">
                200 characters left
              </p>
              <fieldset className="tagFieldset">
                <div>
                  <label htmlFor="newTag">1.</label>
                  <input
                    type="text"
                    name="newTag"
                    id="newTag"
                    minLength="2"
                    maxLength="15"
                    placeholder="Tag#1 here"
                    className="formTag"
                    data-js="newTagInput"
                  />
                </div>
                <div>
                  <label htmlFor="newTag2">2.</label>
                  <input
                    type="text"
                    name="newTag2"
                    id="newTag2"
                    minLength="2"
                    maxLength="15"
                    placeholder="Tag#2 here"
                    className="formTag"
                    data-js="newTagInput2"
                  />
                </div>
                <div>
                  <label htmlFor="newTag">3.</label>
                  <input
                    type="text"
                    name="newTag3"
                    id="newTag3"
                    minLength="2"
                    maxLength="15"
                    placeholder="Tag#3 here"
                    className="formTag"
                    data-js="newTagInput3"
                  />
                </div>
                <div>
                  <label htmlFor="newTag">4.</label>
                  <input
                    type="text"
                    name="newTag4"
                    id="newTag4"
                    minLength="2"
                    maxLength="15"
                    placeholder="Tag#4 here"
                    className="formTag"
                    data-js="newTagInput4"
                  />
                </div>
              </fieldset>
              <button type="submit">Contribute</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
}
