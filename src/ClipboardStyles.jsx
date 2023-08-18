import styled from "styled-components";

const centerFlex = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

const textStyles = `
  text-align: center;
  color: hsl(210, 10%, 33%);
`;

const maxSectionWidth = "100%";

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url("./assets/bg-header-desktop.png");
  background-repeat: no-repeat;
  height: 100vh;
  font-size: 18px;
  font-family: "Bai Jamjuree";

  @media (max-width: 480px) {
    body {
      ${centerFlex}
      flex-direction: column;
      min-height: 100vh;
    }
  }
`;
export const BrandLogo = styled.img``;

export const MainSection = styled.div`
  ${centerFlex}
  flex-direction: column;
`;

export const LogoContainer = styled.div`
  margin: 150px 0 15px;
`;

export const Heading = styled.h1`
  margin: 0;
  max-width: 100%;
  text-wrap: balance;
  ${textStyles}
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

export const CommonButton = styled.button`
  color: white;
  border: none;
  height: 40px;
  border-radius: 25px;
  width: 150px;
  font-weight: bold;

  @media (max-width: 480px) {
    width: 80vw;
    height: 60px;
    margin: 8px;
  }
`;

export const IosButton = styled(CommonButton)`
  background-color: hsl(171, 66%, 44%);
`;

export const MacButton = styled(CommonButton)`
  background-color: hsl(233, 100%, 69%);
  box-shadow: 0px 4px 6px rgba(97, 115, 254, 0.2);
`;

export const Para = styled.p`
  max-width: 600px;
  ${textStyles}
  color: hsl(201, 11%, 66%);
  font-weight: 600;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-weight: 400;
    max-width: 80vw;
    font-size: 18px;
  }
`;

export const SecondSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0;
  ${maxSectionWidth};

  @media (max-width: 480px) {
    width: 100vw;
    ${centerFlex}
  }
`;
export const SecondHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;

  @media (max-width: 480px) {
    max-width: 78%;
    text-align: center;
    text-wrap: wrap;
  }
`;
export const SecondSectionDivison = styled.div`
  display: flex;
  margin-top: 50px;
  ${maxSectionWidth};

  @media (max-width: 480px) {
    flex-direction: column;
    ${centerFlex}
  }
`;
export const SecondImgCon = styled.div`
  width: 80%;
  margin-left: 0;

  @media (max-width: 480px) {
    width: 100px;
    ${centerFlex}
    max-height: 80vh;
    max-width: 70%;
  }
`;
export const SecondSectionDivisionImg = styled.img`
  width: auto;
  max-width: 100%;
  height: auto;
  max-height: calc(100vh - 100px);
  margin-left: -5%;

  @media (max-width: 480px) {
    margin-left: 0;
    max-height: 80vh;
    max-width: 70vw;
  }
`;
export const computerImg = styled.img`
      @media(max-width:480px){
        width:50vw;
        heigth:50vh:
      }
`;
export const FeaturePara = styled.p`
  ${centerFlex}
  color: hsl(201, 11%, 66%);

  @media (max-width: 600px) {
    text-align: center;
  }
`;
export const Heading3 = styled.h3`
  color: hsl(210, 10%, 33%);
`;
export const FeatureWrapper = styled.div`
  margin-left: -300px;
  margin-top: 60px;
  @media (max-width: 480px) {
    margin: auto;
  }
`;
export const FeatureWrapperItems = styled.div`
  margin: 0px;
`;
export const FeatureWrapperPtag = styled.p`
  max-width: 380px;
  line-height: 1.8;
  color: hsl(201, 11%, 66%);
`;
export const FourthSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 60px;
`;
export const FourthSectionDivison = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  ${maxSectionWidth};

  @media (max-width: 480px) {
    flex-direction: column;
    ${centerFlex}
  }
`;
export const Items = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Paratag = styled.p`
  max-width: 380px;
  text-align: center;
  line-height: 1.5;
  color: hsl(201, 11%, 66%);
`;
export const StyledPara = styled.p`
  color: hsl(210, 10%, 33%);
  max-width: 650px;
  ${centerFlex}
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
  color: hsl(201, 11%, 66%);

  @media (max-width: 480px) {
    width: 90vw;
    font-weight: 600;
  }
`;
export const ThirdSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  ${maxSectionWidth};
`;
export const StyledHeading = styled.h2`
  font-weight: 600px;
  text-align: center;
  color: hsl(210, 10%, 33%);
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
  }
`;
export const ThirdSectionHeading = styled.h2`
  text-align: center;
  margin-top: 50px;
  color: hsl(210, 10%, 33%);
`;
export const ThirdSectionPtag = styled.p`
  max-width: 600px;
  text-align: center;
  margin-left: 110px;
  margin-bottom: 100px;
  line-height: 1.5;
  color: hsl(201, 11%, 66%);
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    text-wrap: wrap;
  }
`;
export const ThirdSectionImg = styled.img`
  text-align: center;
  ${centerFlex}
  @media (max-width: 480px) {
    width: 90vw;
  }
`;

export const BrandSection = styled.div`
  display: flex;
  margin: 80px;
  gap: 80px;
  justify-content: center;
  align-items: center;
  ${maxSectionWidth};

  @media (max-width: 480px) {
    flex-direction: column;
    ${centerFlex}
  }
`;
export const DownloadSection = styled.div`
  ${centerFlex}
  flex-direction: column;
  margin: 150px;
  text-align: center;
  ${maxSectionWidth};
`;
export const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  background-color: hsl(220, 18%, 97%);
  color: grey;
  ${maxSectionWidth};

  @media (max-width: 480px) {
    flex-direction: column;
    ${centerFlex}
    width: 100vw;
    height: 70vh;
    font-size: 24px;
  }
`;

export const FooterLogo = styled.img`
  height: 60px;
  @media (max-width: 480px) {
  }
`;
export const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 40px;
  place-items: center;
  margin: 5px;
  line-height: 1px;
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin: 2px;
    justify-content: center;
    align-items: center;
    padding: 0px;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  @media (max-width: 480px) {
    gap: 40px;
  }
`;
