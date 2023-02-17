import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledList = styled.ul`
    background-color: ${({ theme }) => theme.color.teal};
    margin-top: 0px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 40px;
`;

export const StyledItem = styled.li`
    list-style-type: none;
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 20px;
    
    &.active{
        filter:brightness(120%);
        font-weight: bold;
}
`;