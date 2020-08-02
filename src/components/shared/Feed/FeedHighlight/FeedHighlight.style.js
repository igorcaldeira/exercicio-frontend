import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  display: block;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
`;
