import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: ${(props) => props?.theme?.gap?.md};
`;

export const CardTitle = styled.h3`
  font-size: 4rem;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
`;
