import Auth from "./Auth";
import Search from "../img/images.svg";
import Basket from "../img/shopping_basket.svg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.sass";
import "./buttonStyles/ButtonStyles.sass";

const Header = (props) => {
  const [isSpanHovered, setIsSpanHovered] = useState(false);

  const SpanMouseEnterHandler = () => {
    setIsSpanHovered(true);
  };

  const SpanMouseLeaveHandler = () => {
    setIsSpanHovered(false);
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleFormSubmit = (event) => {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию
    if (searchValue.trim()) {
      console.log("Значение поля ввода:", searchValue);
      navigate(`/search/${searchValue}`);
      setSearchValue("");
    }
    
    // Здесь вы можете выполнить другие операции или отправить данные на сервер
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="container">
      <div className="Header">
        <div className="Header__logo">
          <Link
            to="/"
            className="Header__title"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            ECO
            {isHovered && (
              <div className="Header__tooltip">
                <p className="Header__tooltip__main-text">
                  Вернуться на главную
                </p>
              </div>
            )}
          </Link>
          <Link to="catalog">
            <button className="Header-button button-main"> Каталог</button>
          </Link>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="Header__navigation">
            <input
              className={`Header__input ${isSpanHovered ? "hovered-span" : ""}`}
              type="text"
              name="search"
              placeholder="Поиск по сайту"
              onMouseEnter={SpanMouseEnterHandler}
              onMouseLeave={SpanMouseLeaveHandler}
              value={searchValue}
              onChange={handleInputChange}
            ></input>
            <button type="submit">
              <span
                className="Header__span"
                onMouseEnter={SpanMouseEnterHandler}
                onMouseLeave={SpanMouseLeaveHandler}
              >
                <img className="Header__search" src={Search} alt="SVG" />
              </span>
            </button>
          </div>
        </form>
        <div className="Header__cart">
          <Link to="cart">
            <button className="Header__cart-button">
              <img className="Header__cart-basket" src={Basket} alt="SVG" />
            </button>
          </Link>
        </div>
        <Auth />
      </div>
    </div>
  );
};

export default Header;
