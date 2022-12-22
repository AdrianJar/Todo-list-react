import styled, { css, ThemeConsumer } from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

export const StyledButton = styled.button`
    border: none;
    padding: 15px;
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.teal};
    font-size: 15px;
    transition: 0.5s;
    cursor: pointer;

    &:hover{
        filter:brightness(120%);
    }

    ${({ disabled }) => disabled && css`
        color: ${({ theme }) => theme.color.alto};
        cursor: default;

        &:hover{
            filter: brightness(100%);
        }
    `}
`;