import {
  DownloadSection,
  StyledHeading,
  StyledPara,
  ButtonContainer,
  IosButton,
  MacButton,
} from "./ClipboardStyles";

const DownloadSec = () => {
  return (
    <DownloadSection>
      <StyledHeading>Clipboard for iOS and Mac OS </StyledHeading>
      <StyledPara>
        Available for free on the App Store. Download for Mac or iOS, sync with
        iCloud and you’re ready to start adding to your clipboard.
      </StyledPara>
      <ButtonContainer>
        <IosButton>Download for iOS</IosButton>
        <MacButton>Download for Mac</MacButton>
      </ButtonContainer>
    </DownloadSection>
  );
};

export default DownloadSec;
