import {
  Paratag,
  Items,
  FourthSection,
  FourthSectionDivison,
  StyledPara,
  Heading3,
  StyledHeading,
} from "./ClipboardStyles";
import blacklist from "./svgs/icon-blacklist.svg";
import text from "./svgs/icon-text.svg";
import preview from "./svgs/icon-preview.svg";

const FourthSec = () => {
  return (
    <FourthSection>
      <div>
        <StyledHeading>Supercharge your workflow</StyledHeading>
        <StyledPara>We’ve got the tools to boost your productivity.</StyledPara>
      </div>
      <FourthSectionDivison>
        <Items>
          <img src={blacklist} alt="blacklist svg" />
          <Heading3>Create blacklists </Heading3>
          <Paratag>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </Paratag>
        </Items>
        <Items>
          <img src={text} alt="text svg" />
          <Heading3>Plain text snippets </Heading3>
          <Paratag>
            Remove unwanted formatting from copied text for a consistent look.
          </Paratag>
        </Items>
        <Items>
          <img src={preview} alt="text svg" />
          <Heading3>Sneak preview </Heading3>
          <Paratag>
            Quick preview of all snippets on your Clipboard for easy access.{" "}
          </Paratag>
        </Items>
      </FourthSectionDivison>
    </FourthSection>
  );
};
export default FourthSec;
