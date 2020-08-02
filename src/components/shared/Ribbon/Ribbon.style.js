import styled from 'styled-components';

export const Box = styled.div`
  position: relative;
`;

export const RibbonWrapper = styled.div`
  width: 150px;
  height: 150px;
  overflow: hidden;
  position: absolute;
  top: -10px;
  right: -10px;

  &::before,
  &::after {
    position: absolute;
    z-index: -1;
    content: ' ';
    display: block;
    border: 5px solid #39557a;
    border-top-color: transparent;
    border-right-color: transparent;
  }
  &::before {
    top: 0;
    left: 0;
  }
  &::after {
    bottom: 0;
    right: 0;
  }

  span {
    position: absolute;
    display: block;
    width: 225px;
    padding: 15px 0;
    background-color: #4a9fc6;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    color: #fff;
    font: 700 18px/1 'Lato', sans-serif;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    text-align: center;
    left: -25px;
    top: 30px;
    transform: rotate(45deg);
  }
`;
