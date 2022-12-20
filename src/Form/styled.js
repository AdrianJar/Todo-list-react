import styled from "styled-components";

export const FormDiv = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;
    padding: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;

    @media (max-width: 767px) {
        width: 100%;
    }
`;

export const Button = styled.button`
    padding: 10px;
    background-color: hsl(180, 100%, 25%);
    color: white;
    cursor: pointer;
    transition: 1s;
    border: none;

    @media (max-width: 767px){
        width: 100%;
    }

    &:hover{
        background-color: hsl(180, 100%, 35%);
        transform: scale(1.05);
    }
`;