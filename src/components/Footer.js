import { Link } from "react-router-dom";
import About from "./About";
import App from "../App";
import "./Footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p>&copy; {new Date().getFullYear()} "OOO EcoMarket"</p>

        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link to="/about">О нас</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/contacts">Контакты</Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/privacy">Оферта</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
