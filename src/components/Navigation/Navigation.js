import "./Navigation.css";
export default function Navigation() {
  return (
    <>
      <nav className="App-Navigation">
        <ul class="header__navbar__liste">
          <li class="header__navbar__liste__items">
            <a href="index.html" class="header__navbar__liste__items__link">
              <div class="header__navbar__liste__items__link--HomeIsActive">
                <i class="fa-solid fa-house-user"></i>
              </div>
            </a>
          </li>
          <li class="header__navbar__liste__items">
            <a href="bookmark.html" class="header__navbar__liste__items__link">
              <div class="header__navbar__liste__items__link__div">
                <i class="fa-solid fa-bookmark"></i>
              </div>
            </a>
          </li>
          <li class="header__navbar__liste__items">
            <a href="user.html" class="header__navbar__liste__items__link">
              <div class="header__navbar__liste__items__link__div">
                <i class="fa-solid fa-user"></i>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
