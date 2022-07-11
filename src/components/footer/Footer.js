import { RiFacebookCircleLine, RiInstagramLine, RiMailSendLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer-div">
    <div className="socials">
    <a className="footer-colors"
        href="#"
      >
        <RiFacebookCircleLine size={"2.2%"} />
      </a>
      <a className="footer-colors"
        href="#"
      >
        <RiInstagramLine size={"2.2%"} />
      </a>
      <a className="footer-colors"
        href="#"
      >
        <RiMailSendLine size={"2.2%"} />
      </a>
    </div>
      <div className="footer-info">
        
        <a href="#"> Privacy Policy |</a>
        <a href="#">Terms & Conditions</a>
        
        <p>© 2022 | Tbilisi | Georgia</p>
      </div>
    </div>
  );
};

export default Footer;
