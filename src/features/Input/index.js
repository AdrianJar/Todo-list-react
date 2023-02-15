import styled from "styled-components";

export default styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.silver};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        width: 100%;
    }
`;