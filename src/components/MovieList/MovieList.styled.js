import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  margin-top: 20px;
  color: green;
  list-style: circle;
`;

export const Item = styled.li`
  margin-bottom: 8px;

  border-radius: 12px;
`;
export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 8px;
  text-decoration: none;
  color: black;
  border-radius: 12px;

  :hover {
    background-color: green;
    box-shadow: -1px -1px 52px -8px rgba(0, 128, 0, 0.75);
    -webkit-box-shadow: -1px -1px 52px -8px rgba(0, 128, 0, 0.75);
    -moz-box-shadow: -1px -1px 52px -8px rgba(0, 128, 0, 0.75);

    font-weight: 700;
    color: white;
  }
`;
