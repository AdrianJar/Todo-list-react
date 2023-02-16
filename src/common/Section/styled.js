import styled, { css } from "styled-components";

export const SectionDiv = styled.section`
    max-width: 750px;
    background-color: ${({ theme }) => theme.color.white};
    margin: auto;
    margin-bottom: 20px;
    display: grid;
`;

export const Header = styled.header`
    padding-left: 20px;
    margin: 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.gallery};

    ${({ show }) => show && css`
        display: grid;
        grid-template-columns: 1fr auto auto;

        @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
        }
    `}
`;

export const Div = styled.div`
    padding: 20px;
`;