import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faBookmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation({ page, setPage }) {
  return (
    <>
      <nav className="App-Navigation">
        <ul className="App-Navigation-Nav">
          <li className="App-Navigation-Nav-Li">
            <a
              href="/#"
              onClick={() => {
                setPage("Home");
              }}
              className={
                page === "Home"
                  ? "App-Navigation-Nav-Li-A App-Navigation-Nav-Li-A--activeHome"
                  : "App-Navigation-Nav-Li-A"
              }
            >
              <FontAwesomeIcon
                className="App-Navigation-Nav-Li-A-Icon"
                icon={faHouseUser}
              />
            </a>
          </li>
          <li className="App-Navigation-Nav-Li">
            <a
              href="/#"
              onClick={() => {
                setPage("Bookmark");
              }}
              className={
                page === "Bookmark"
                  ? "App-Navigation-Nav-Li-A App-Navigation-Nav-Li-A--activeHome"
                  : "App-Navigation-Nav-Li-A"
              }
            >
              <FontAwesomeIcon
                className="App-Navigation-Nav-Li-A-Icon"
                icon={faBookmark}
              />
            </a>
          </li>
          <li className="App-Navigation-Nav-Li">
            <a
              href="/#"
              onClick={() => {
                setPage("Profile");
              }}
              className={
                page === "Profile"
                  ? "App-Navigation-Nav-Li-A App-Navigation-Nav-Li-A--activeHome"
                  : "App-Navigation-Nav-Li-A"
              }
            >
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
