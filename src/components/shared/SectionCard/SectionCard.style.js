import styled from 'styled-components';

export const CardWrapper = styled.div`
  background-color: ${(props) => props?.theme?.color?.fg};
  padding: ${(props) => props?.theme?.gap?.md};
`;

export const CardTitle = styled.h3`
  margin-bottom: ${(props) => props?.theme?.gap?.md};
`;
