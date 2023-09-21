import { Container } from "react-bootstrap";
import Nav from "./Navigation";
import Email from "./Email";

const navLink = ["Home", "Shop", "About", "Contact"];
const helpLink = ["Payment Options", "Returns", "Privacy Policies"];

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-wrapper container">
          <div className="footer-wrapper-top d-flex">
            <div className="footer-wrapper-top-title">
              <p className="text-fs24">Funiro.</p>
              <p>400 University Drive Suite 200 Coral Gables,<br />FL 33134 USA</p>
            </div>
            <Nav title="Links" listNav={navLink} />
            <Nav title="Help" listNav={helpLink} />
            <Email />
          </div>
          <p className="footer-wrapper-bottom text-fs16">2023 furino. All rights reverved</p>
        </div>
    </div>
  );
};

export default Footer;
