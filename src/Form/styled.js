import styled from "styled-components";

export const FormDiv = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.silver};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    color: white;
    cursor: pointer;
    transition: 1s;
    border: none;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px){
        width: 100%;
    }

    &:hover{
        filter: brightness(140%);
        transform: scale(1.05);
    }
`;