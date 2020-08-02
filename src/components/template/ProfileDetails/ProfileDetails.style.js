import styled from 'styled-components';

const ProfileWrapper = {};

ProfileWrapper.Grid = styled.div`
  background-color: ${(props) => props?.theme?.color?.bg};
  display: grid;
  grid-template-columns: 1fr 1fr [f] 1fr 1fr 1fr 1fr;
  grid-template-rows: 0.7fr 1.3fr 1fr;
  gap: 25px 20px;
  grid-template-areas: 'header header header header header header' 'feed feed feed feed sidebar sidebar' 'feed feed feed feed sidebar sidebar';
`;

ProfileWrapper.Header = styled.div`
  grid-area: header;
`;

ProfileWrapper.Feed = styled.div`
  grid-area: feed;
`;

ProfileWrapper.Sidebar = styled.div`
  grid-area: sidebar;
`;

export default ProfileWrapper;
