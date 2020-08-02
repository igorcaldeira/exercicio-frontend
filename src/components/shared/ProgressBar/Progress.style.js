import styled from 'styled-components';

export const Bar = styled.div`
  display: block;
  content: ' ';
  width: 100%;
  height: 1rem;
  margin-top: ${(props) => props?.theme?.gap?.sm};
  margin-bottom: ${(props) => props?.theme?.gap?.sm};
  background-color: ${(props) => props?.theme?.color?.light};

  &::before {
    display: block;
    content: ' ';
    width: ${(props) => props?.progress}%;
    height: 1rem;
    left: 0;
    background-color: ${(props) => props?.theme?.color?.primary};
  }
`;
