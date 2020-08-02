import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  display: block;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
`;

export const Highlight = styled.div`
  h4,
  h5 {
    text-align: center;
  }

  h5 {
    margin-bottom: ${(props) => props?.theme?.gap?.lg};
  }

  svg {
    margin-right: ${(props) => props?.theme?.gap?.sm};
  }

  button {
    display: block;
    margin: 0 auto;
    margin-top: ${(props) => props?.theme?.gap?.lg};
  }
`;
