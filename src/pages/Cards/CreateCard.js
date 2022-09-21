import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./CreateCard.css";
export default function CreateCard() {
  return (
    <section className="main-Cards-CreateCard">
      <h2 id="main-Cards-CreateCard-H2">Contribute your own Quiz</h2>
      <div className="main-Cards-CreateCard-FlexDiv">
        <div className="App-main-Card">
          <button className="App-main-Card-Bookmark">
            <FontAwesomeIcon icon={faBookmark} />
          </button>
          <div className="App-main-Card-Question"></div>
          <div className="App-main-Card-Button">
            <button className="App-main-Card-Button-Button"> </button>
            <div></div>
          </div>
          <div className="App-main-Card-Tags">
            <ul className="App-main-Card-Tags-UL"></ul>
          </div>
        </div>
        <div class="body-s__main-s__createQuiz-s__createQuiz-c__form">
          <form class="createCardForm" data-js="createCardForm">
            <fieldset>
              <legend>Do you have a good Question?</legend>
              <label for="quizQuestion">Question here:</label>
              <input
                type="text"
                name="quizQuestion"
                id="quizQuestion"
                minlength="20"
                maxlength="150"
                placeholder="Your Question goes here"
                required
                data-js="quizQuestionInput"
              />
              <p data-js="question-counter" class="form__counter">
                150 characters left
              </p>
              <label for="quizAnswer">Answer here:</label>
              <textarea
                type="text"
                name="quizAnswer"
                id="quizAnswer"
                cols="30"
                rows="3"
                minlength="25"
                maxlength="200"
                placeholder="Your Answer goes here"
                required
                data-js="quizAnswerInput"
              ></textarea>
              <p data-js="answer-counter" class="form__counter">
                200 characters left
              </p>
              <fieldset class="tagFieldset">
                <div>
                  <label for="newTag">1.</label>
                  <input
                    type="text"
                    name="newTag"
                    id="newTag"
                    minlength="2"
                    maxlength="15"
                    placeholder="Tag#1 here"
                    class="formTag"
                    data-js="newTagInput"
                  />
                </div>
                <div>
                  <label for="newTag2">2.</label>
                  <input
                    type="text"
                    name="newTag2"
                    id="newTag2"
                    minlength="2"
                    maxlength="15"
                    placeholder="Tag#2 here"
                    class="formTag"
                    data-js="newTagInput2"
                  />
                </div>
                <div>
                  <label for="newTag">3.</label>
                  <input
                    type="text"
                    name="newTag3"
                    id="newTag3"
                    minlength="2"
                    maxlength="15"
                    placeholder="Tag#3 here"
                    class="formTag"
                    data-js="newTagInput3"
                  />
                </div>
                <div>
                  <label for="newTag">4.</label>
                  <input
                    type="text"
                    name="newTag4"
                    id="newTag4"
                    minlength="2"
                    maxlength="15"
                    placeholder="Tag#4 here"
                    class="formTag"
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
