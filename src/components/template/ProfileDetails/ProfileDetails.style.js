import styled from 'styled-components';

const Profile = {};

Profile.Header = styled.div`
  width: 100%;
  display: block;
  border-top: 0.5rem solid ${(props) => props?.theme?.color?.font?.primary};
  background-color: ${(props) => props?.theme?.color?.fg};
  padding-top: ${(props) => props?.theme?.gap?.md};
  padding-bottom: ${(props) => props?.theme?.gap?.sm};
  margin-bottom: ${(props) => props?.theme?.gap?.lg};
  background-color: #f5f5f5;
`;

Profile.HeaderContent = styled.div`
  max-width: ${(props) => props?.theme?.siteWidth};
  margin: 0 auto;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
  display: block;
`;

Profile.Grid = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: ${(props) => props?.theme?.siteWidth};
  min-height: 100vh;
  grid-template-columns: 1fr;
  gap: ${(props) => props?.theme?.gap?.lg} ${(props) => props?.theme?.gap?.lg};
  grid-template-areas: 'feed' 'sidebar';
  margin-bottom: ${(props) => props?.theme?.gap?.lg};
  padding: ${(props) => props?.theme?.gap?.lg};

  @media (min-width: 1281px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 'feed feed feed feed sidebar sidebar';
    padding: 0;
  }
`;

Profile.Feed = styled.div`
  grid-area: feed;
`;

Profile.Sidebar = styled.div`
  grid-area: sidebar;
`;

export default Profile;
