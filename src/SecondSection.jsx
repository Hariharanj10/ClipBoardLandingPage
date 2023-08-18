import {
  SecondSection,
  SecondHeading,
  StyledHeading,
  StyledPara,
  SecondSectionDivison,
  SecondImgCon,
  SecondSectionDivisionImg,
  FeatureWrapper,
  FeatureWrapperItems,
  Heading3,
  FeatureWrapperPtag,
} from "./ClipboardStyles";

const SecondSec = () => {
  return (
    <SecondSection>
      <SecondHeading>
        <StyledHeading> Keep track of your snippets</StyledHeading>
        <StyledPara>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </StyledPara>
      </SecondHeading>
      <SecondSectionDivison>
        <SecondImgCon>
          <SecondSectionDivisionImg
            src="./assets/image-computer.png"
            alt="computer img"
          />
        </SecondImgCon>
        <FeatureWrapper>
          <FeatureWrapperItems>
            <Heading3> Quick Search </Heading3>
            <FeatureWrapperPtag>
              Easily search your snippets by content, category, web address,
              application, and more.
            </FeatureWrapperPtag>
          </FeatureWrapperItems>
          <FeatureWrapperItems>
            <Heading3>iCloud Sync</Heading3>
            <FeatureWrapperPtag>
              Instantly saves and syncs snippets across all your devices.{" "}
            </FeatureWrapperPtag>
          </FeatureWrapperItems>
          <FeatureWrapperItems>
            <Heading3> Complete History</Heading3>
            <FeatureWrapperPtag>
              Retrieve any snippets from the first moment you started using the
              app.
            </FeatureWrapperPtag>
          </FeatureWrapperItems>
        </FeatureWrapper>
      </SecondSectionDivison>
    </SecondSection>
  );
};
export default SecondSec;
