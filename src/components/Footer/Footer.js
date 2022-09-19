export default function Footer() {
  return (
    <nav>
      <ul>
        {" "}
        <li className="header__navbar__liste__items">
          <a href="index.html" class="header__navbar__liste__items__link">
            <div className="header__navbar__liste__items__link--HomeIsActive">
              <i className="fa-solid fa-house-user"></i>
            </div>
          </a>
        </li>
        <li className="header__navbar__liste__items">
          <a href="bookmark.html" class="header__navbar__liste__items__link">
            <div className="header__navbar__liste__items__link__div">
              <i className="fa-solid fa-bookmark"></i>
            </div>
          </a>
        </li>
        <li className="header__navbar__liste__items">
          <a href="user.html" class="header__navbar__liste__items__link">
            <div className="header__navbar__liste__items__link__div">
              <i className="fa-solid fa-user"></i>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
}
