import styled, { css } from "styled-components";

export const List = styled.ul`
  width: 100%;
  padding: 10px;
  list-style-type: none;
`;

export const Items = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  padding: 10px;
  text-decoration: none;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.color.gallery};
  word-break: break-all;

  ${({ hidden }) => hidden && css`
    display: none;
  `}
`;

export const ItemContent = styled.span`
  padding-left: 10px;

  ${({ done }) => done && css`
    text-decoration: line-through;
  
  `}
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  background-color: ${({theme}) => theme.color.forest_green}  ;
  border: none;
  cursor: pointer;
  transition: 1s;

  &:hover{
    filter: brightness(120%);
  }

  ${({ remove }) => remove && css`
    background-color: ${({theme}) => theme.color.pomegranate};
    justify-self: flex-end;

    &:hover{
      filter: brightness(120%);
    }
  `}
`;