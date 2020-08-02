import styled from 'styled-components';

export const ContactItem = styled.div`
  margin-bottom: ${(props) => props?.theme?.gap?.sm};

  svg {
    margin-right: ${(props) => props?.theme?.gap?.sm};
    color: ${(props) => props?.theme?.color?.social};
  }
`;
