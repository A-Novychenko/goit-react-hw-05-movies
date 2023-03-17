import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: inline-block;
`;
export const Input = styled.input`
  width: 500px;
  font-size: 20px;
  padding: 8px;
  border-radius: 8px;
  outline: transparent;
  border: none;
`;
export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-50%, 50%);
  background-color: transparent;
  border: none;
  line-height: 0;
  cursor: pointer;

  :hover {
    color: green;
  }
`;
