import FooterSection from "./Footer";

import MainSec from "./MainSection";
import SecondSec from "./SecondSection";
import ThirdSec from "./ThirdSection";
import FourthSec from "./FourthSection";
import BrandSec from "./BrandSection";
import DownloadSec from "./DownloadSection";
import { Container } from "./ClipboardStyles";
import Navbar from "./components/Navbar";

function ClipBoard() {
  return (
    <div>
      <Container>
        <Navbar/>
        <MainSec />
        <SecondSec />
        <ThirdSec />
        <FourthSec />
        <BrandSec />
        <DownloadSec />
        <FooterSection />
      </Container>
    </div>
  );
}

export default ClipBoard;
