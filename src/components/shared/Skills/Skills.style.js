import styled from 'styled-components';

export const Paragraph = styled.p`
  display: block;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
`;

export const Title = styled.h4`
  display: inline-block;
  text-align: left;
`;

export const Description = styled.p`
  float: right;
  color: ${(props) => props?.theme?.color?.light};
`;
