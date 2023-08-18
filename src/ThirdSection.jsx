import {
  ThirdSection,
  StyledHeading,
  FeaturePara,
  ThirdSectionImg,
} from "./ClipboardStyles";

const ThirdSec = () => {
  return (
    <ThirdSection>
      <div>
        <StyledHeading>Access Clipboard anywhere </StyledHeading>
        <FeaturePara>
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </FeaturePara>
        <ThirdSectionImg src="./assets/image-devices.png" alt="deviceimage" />
      </div>
    </ThirdSection>
  );
};

export default ThirdSec;
