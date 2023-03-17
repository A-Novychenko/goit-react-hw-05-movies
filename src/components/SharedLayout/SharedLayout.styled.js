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
  margin-bottom: 40px;
  padding: 40px;
  background-color: green;

  box-shadow: 1px 25px 39px -9px rgba(0, 128, 0, 0.75);
  -webkit-box-shadow: 1px 25px 39px -9px rgba(0, 128, 0, 0.75);
  -moz-box-shadow: 1px 25px 39px -9px rgba(0, 128, 0, 0.75);
`;
export const Nav = styled.nav`
  display: flex;
  gap: 32px;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 12px;

  border: none;
  border-radius: 4px;

  color: black;
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;

  &.active {
    color: white;
    box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);
    -webkit-box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);
    -moz-box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);
  }
`;
