import styled, { css } from "styled-components";

export const SectionDiv = styled.section`
    max-width: 750px;
    background-color: white;
    margin: auto;
    margin-bottom: 20px;
    display: grid;
`;

export const Header = styled.header`
    border-bottom: 2px solid #eeeeee;
    padding-left: 20px;
    margin: 0;

    ${({ display }) => display && css`
        display: grid;
        grid-template-columns: 1fr auto auto;
        grid-gap: 20px;
        border-bottom: 2px solid #eeeeee;

        @media (max-width: 767px) {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
    `}
`;