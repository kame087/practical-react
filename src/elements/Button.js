import styled, { css } from "styled-components";

const Button = styled.button`
  
  font-size: 1.3rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 7px 10px;
  /* background: ${(props) => (props.primary ? "red" : "black")}; */
  /* background: ${(props) => props.theme.primary}; */
  ${(props) =>
    props.color &&
    css`
      background: ${(props) => props.theme[props.color]};
    `}
  color: white;
  &:hover {
    background: ${(props) => props.theme.secondary};
    color: black;
  }
`;

export default Button;
