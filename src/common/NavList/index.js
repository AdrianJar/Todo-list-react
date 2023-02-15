import { StyledItem, StyledList, StyledNavLink } from "./styled";

const NavList = () => {

  return (
    <StyledList>
      <StyledItem>
        <StyledNavLink to="/zadania">Zadania</StyledNavLink>
      </StyledItem>
      <StyledItem>
        <StyledNavLink to="/author">O autorze</StyledNavLink>
      </StyledItem>
    </StyledList>
  );

}

export default NavList;