import styled from 'styled-components';

export const Cover = styled.img`
  width: 100%;
  display: block;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
`;

const FeedItemSlot = {};

FeedItemSlot.Wrapper = styled.div`
  width: 100%;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
  display: grid;
  grid-template-columns: 12rem 1fr;
  grid-template-rows: 1fr;
  gap: ${(props) => props?.theme?.gap?.md} ${(props) => props?.theme?.gap?.md};
  grid-template-areas: 'picture picture description description description description';
`;

FeedItemSlot.Picture = styled.div`
  grid-area: picture;
`;

FeedItemSlot.Description = styled.div`
  grid-area: description;
  padding-top: ${(props) => props?.theme?.gap?.sm};
`;

export { FeedItemSlot };
