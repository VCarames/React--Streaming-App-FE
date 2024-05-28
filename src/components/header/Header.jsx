import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from "/src/assets/assets/logo/logo.svg";
import Avatar from "/src/assets/assets/image-avatar.png";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <Link className="header__logo" to="/" aria-label="Home - Streaming">
          <img className="header__logo-icon icon--logo" src={Logo} alt="" />
        </Link>

        <Navbar />

        <img className="header__user" src={Avatar} alt="User" />
      </div>
    </header>
  );
}

export default Header;
