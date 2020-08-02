import styled from 'styled-components';

export const Cta = styled.div`
  float: right;

  svg {
    margin-right: ${(props) => props?.theme?.gap?.sm};
  }
`;

export const Image = styled.img`
  width: 100%;
  margin-bottom: ${(props) => props?.theme?.gap?.md};
`;

const ProfileHeader = {};

ProfileHeader.Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 0 ${(props) => props?.theme?.gap?.lg};
  grid-template-areas: 'profile-pic basic-info basic-info basic-info';
`;

ProfileHeader.Picture = styled.div`
  grid-area: profile-pic;
`;

ProfileHeader.BasicInfo = styled.div`
  grid-area: basic-info;

  h1 {
    margin-top: ${(props) => props?.theme?.gap?.lg};
  }

  h2 {
    margin-top: ${(props) => props?.theme?.gap?.sm};
    margin-bottom: ${(props) => props?.theme?.gap?.sm};
  }

  button {
    margin-right: ${(props) => props?.theme?.gap?.sm};
  }
`;

export { ProfileHeader };
