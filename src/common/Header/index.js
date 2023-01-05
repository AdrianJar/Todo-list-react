import { StyledHeader, Headline } from "./styled";

const Header = ({title}) => (
  <StyledHeader>
    <Headline>{title}</Headline>
  </StyledHeader>
);

export default Header;