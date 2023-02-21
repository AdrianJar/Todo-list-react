import { toAuthor, toTasks } from "../routes";
import { StyledItem, StyledList, StyledNavLink } from "./styled";

const Navigation = () => {

  return (
    <StyledList>
      <StyledItem>
        <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
      </StyledItem>
      <StyledItem>
        <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
      </StyledItem>
    </StyledList>
  );

}

export default Navigation;