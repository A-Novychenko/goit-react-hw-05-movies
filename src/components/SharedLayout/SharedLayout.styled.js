import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;

  margin-right: auto;
  margin-left: auto;

  width: 1200px;
`;

export const Header = styled.header`
  padding: 40px;
  background-color: #fff;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 32px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 12px;
  background-color: lightblue;
  border: 1px solid blue;
  border-radius: 4px;

  color: white;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &.active {
    background-color: blue;
  }
`;
