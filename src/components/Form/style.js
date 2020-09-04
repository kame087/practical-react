import styled from "styled-components";

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const FormButton = styled.button`
  margin: 10px;
  font-size: 1.3rem;
  border: none;
  padding: 7px 10px;
  border-radius: 12px;
  background: red;
  color: white;
  cursor: pointer;

  &:hover {
    background: gold;
    color: black;
  }
`;
