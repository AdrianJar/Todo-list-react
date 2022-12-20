import { HeaderDiv, Content } from "./styled";

const Header = ({title}) => (
  <HeaderDiv>
    <Content>{title}</Content>
  </HeaderDiv>
);

export default Header;