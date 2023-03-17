import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
`;

export const Item = styled.li`
  flex-basis: calc((100% - 10px) / 5);
  border: 1px solid green;
  border-radius: 8px;

  overflow: hidden;

  box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);
  -webkit-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);
  -moz-box-shadow: 9px 7px 19px 7px rgba(42, 79, 42, 0.57);
  transform: scale(1);
  transition: transform 200ms linear;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Div = styled.div`
  height: 100%;
`;
export const ImgWrap = styled.div`
  position: relative;
  overflow: hidden;
`;
export const Img = styled.img`
  width: 100%;
  min-height: 345px;
`;
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  flex-grow: 1;
`;
export const Name = styled.p`
  padding: 8px 0;
  font-size: 20px;
  font-weight: 700;
`;
export const Character = styled.p`
  padding: 8px 0;
`;
