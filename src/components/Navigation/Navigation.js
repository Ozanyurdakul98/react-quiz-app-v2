import { NavHashLink as NavLink } from "react-router-hash-link";
import styled from "styled-components";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faBookmark,
  faUser,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <nav className="App-Navigation">
      <ul className="App-Navigation-Nav">
        <LinkButton to="/" end>
          <FontAwesomeIcon
            className="App-Navigation-Nav-Li-A-Icon"
            icon={faHouseUser}
          />
        </LinkButton>
        <LinkButton to="/bookmarked">
          <FontAwesomeIcon
            className="App-Navigation-Nav-Li-A-Icon"
            icon={faBookmark}
          />
        </LinkButton>
        <Wrapper>
          <LinkButton to="/#main-Cards-CreateCard-H2" id="linkHome">
            <FontAwesomeIcon
              className="App-Navigation-Nav-Li-A-Icon"
              icon={faPlus}
            />
          </LinkButton>
        </Wrapper>
        <LinkButton to="/profile">
          <FontAwesomeIcon
            className="App-Navigation-Nav-Li-A-Icon"
            icon={faUser}
          />
        </LinkButton>
      </ul>
    </nav>
  );
}

const LinkButton = styled(NavLink)`
  width: 100%;
  display: inline-block;
  height: 79px;
  &.active {
    background-color: hotpink;
  }
  &:visited {
    color: black;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: inline-block;
  height: 79px;
  #linkHome {
    background-color: inherit;
  }
`;
