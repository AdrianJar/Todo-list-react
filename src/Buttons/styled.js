import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
`;

export const StyledButton = styled.button`
    border: none;
    padding: 15px;
    background-color: white;
    color: teal;
    font-size: 15px;
    transition: 0.5s;
    cursor: pointer;

    &:hover{
        color: hsl(180, 100%, 35%);
    }

    ${({ disabled }) => disabled && css`
        color: #ddd;
        cursor: default;

        &:hover{
            color: #ddd;
        }
    `}
`;