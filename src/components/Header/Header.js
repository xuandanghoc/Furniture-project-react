import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../assets/Logo.png";
import LogoPage from "./Logo";
import HeaderIcon from "./HeaderIcon";
import Icon1 from "../../assets/contact.png";
import Icon2 from "../../assets/search.png";
import Icon3 from "../../assets/heart.png";
import Icon4 from "../../assets/shopping-cart-outlined.png";
import { Link } from "react-router-dom";



const Header = () => {
  return (
    <div className="header">
      <div className="header-container container d-flex justify-content-between align-items-center">
        <LogoPage logo={Logo} />
        <Nav activeKey="/home">
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Shop">Shop</Link>
          </Nav.Item>
          <Nav.Item>
            <Link>About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link>Contact</Link>
          </Nav.Item>
        </Nav>
        <div className="header-icon">
          <HeaderIcon icon={Icon1} />
          <HeaderIcon icon={Icon2} />
          <HeaderIcon icon={Icon3} />
          <HeaderIcon icon={Icon4} />
        </div>
      </div>
    </div>
  );
};

export default Header;
