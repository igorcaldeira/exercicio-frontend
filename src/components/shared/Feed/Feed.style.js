import styled from 'styled-components';

export const FeedContent = styled.div`
  width: 100%;
  display: block;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
`;

export const Divisor = styled.hr`
  width: 100%;
  display: block;
  border: none;
  height: 0.1rem;
  margin-top: ${(props) => props?.theme?.gap?.lg};
  margin-bottom: ${(props) => props?.theme?.gap?.lg};
  background-color: ${(props) => props?.theme?.color?.light};
`;
