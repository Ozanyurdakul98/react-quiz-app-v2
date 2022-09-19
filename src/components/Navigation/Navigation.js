import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
export default function Navigation() {
  return (
    <>
      <nav className="App-Navigation">
        <ul className="App-Navigation-Nav">
          <li className="App-Navigation-Nav-Li">
            <a href="/#" className="App-Navigation-Nav-Li-A">
              <FontAwesomeIcon
                className="App-Navigation-Nav-Li-A-Icon"
                icon={faHouseUser}
              />
            </a>
          </li>
          <li className="App-Navigation-Nav-Li">
            <a href="/#" className="App-Navigation-Nav-Li-A">
              <FontAwesomeIcon
                className="App-Navigation-Nav-Li-A-Icon"
                icon={faBookmark}
              />
            </a>
          </li>
          <li className="App-Navigation-Nav-Li">
            <a href="/#" className="App-Navigation-Nav-Li-A">
              <FontAwesomeIcon
                className="App-Navigation-Nav-Li-A-Icon"
                icon={faUser}
              />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
