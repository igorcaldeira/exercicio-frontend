import styled from 'styled-components';

const Profile = {};

Profile.Header = styled.div`
  width: 100%;
  display: block;
  background-color: ${(props) => props?.theme?.color?.fg};
`;

Profile.HeaderContent = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
  display: block;
  background-color: ${(props) => props?.theme?.color?.fg};
`;

Profile.Grid = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 90rem;
  min-height: 100vh;
  grid-template-columns: 1fr 1fr [f] 1fr 1fr 1fr 1fr;
  grid-template-rows: 1.3fr 1fr;
  gap: 25px 20px;
  grid-template-areas: 'feed feed feed feed sidebar sidebar' 'feed feed feed feed sidebar sidebar';
`;

Profile.Feed = styled.div`
  grid-area: feed;
`;

Profile.Sidebar = styled.div`
  grid-area: sidebar;
`;

export default Profile;
