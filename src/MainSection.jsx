import logo from "./svgs/logo.svg";
import { Link } from "react-router-dom";
import {
  MainSection,
  LogoContainer,
  Heading,
  Para,
  ButtonContainer,
  IosButton,
  MacButton,
} from "./ClipboardStyles";

const MainSec = () => {
  return (
    <MainSection>
      <div>
         <Link to="/TransactionPage"> TransactionPage </Link>
         <Link to="/LoginPage"> Login </Link>
      </div>
      <LogoContainer>
        <img src={logo} alt="logo" />
      </LogoContainer>
      <div>
        <Heading>A history of everything you copy</Heading>
      </div>
      <div>
        <Para>
          Clipboard allows you to track and organise everything you
          copy.Instanly access your clipboard on all your devices.
        </Para>
      </div>
      <ButtonContainer>
        <div>
          <IosButton >Download for iOS</IosButton>
        </div>
        <div>
          <MacButton>Download for Mac</MacButton>
        </div>
      </ButtonContainer>
    </MainSection>
  );
};
export default MainSec;
