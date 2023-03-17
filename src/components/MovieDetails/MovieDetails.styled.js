import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 24px;
`;
export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  padding-bottom: 24px;
  border-bottom: 1px solid green;
`;
export const Img = styled.img`
  width: 320px;
`;

export const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 32px;
`;

export const Score = styled.p`
  margin-bottom: 32px;
  color: green;
`;

export const SubTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 16px;
`;
export const Inner = styled.div`
  font-size: 20px;
  line-height: 1.3;
  margin-bottom: 24px;
`;
export const Btns = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding-bottom: 24px;
  margin-top: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid green;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  min-width: 80px;
  padding: 8px;
  background-color: #fff;

  text-align: center;

  font-size: 20px;
  text-decoration: none;
  color: green;
  border-radius: 4px;

  :hover {
    color: white;
    background-color: green;
  }
  &.active {
    color: white;
    background-color: green;
    box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);
    -webkit-box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);
    -moz-box-shadow: 0px -1px 13px 7px rgba(255, 255, 255, 0.54);
  }
`;

export const SubTitleCenter = styled.div`
  text-align: center;
`;
