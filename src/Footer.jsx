import {
  Footer,
  FooterLogo,
  FooterIcons,
  FooterLinks,
} from "./ClipboardStyles";
import facebook from "./svgs/icon-facebook.svg";
import instagram from "./svgs/icon-instagram.svg";
import twitter from "./svgs/icon-twitter.svg";
import logo from "./svgs/logo.svg";
const FooterSection = () => {
  return (
    <Footer>
      <FooterLogo src={logo} alt="logo" />
      <FooterLinks>
        <div>
          <h5>FAQs</h5>
        </div>
        <div>
          <h5>Contact Us </h5>
        </div>
        <div>
          <h5>Privacy Policy</h5>
        </div>
        <div>
          <h5>Press Kit</h5>
        </div>
        <div>
          <h5>Install Guide</h5>
        </div>
      </FooterLinks>
      <FooterIcons>
        <div>
          <img src={facebook} alt="facebook-logo" />
        </div>
        <div>
          <img src={twitter} alt="twitter-logo" />
        </div>
        <div>
          <img src={instagram} alt="instagram-logo" />
        </div>
      </FooterIcons>
    </Footer>
  );
};
export default FooterSection;
