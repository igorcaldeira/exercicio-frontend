import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as profileUseCases from 'store/profile/profile.useCases';
import Header from 'components/shared/Header';
import SectionCard from 'components/shared/SectionCard';
import Contact from 'components/shared/Contact';
import Skills from 'components/shared/Skills';
import ProfileWrapper from './ProfileDetails.style';

const ProfileDetails = (props) => {
  const dispatch = useDispatch();

  const profileDetails = useSelector(({ profile }) => profile.getProfile);

  useEffect(() => {
    dispatch(profileUseCases.getProfile());
  }, []);

  return (
    <ProfileWrapper.Grid>
      <ProfileWrapper.Header>
        <Header />
      </ProfileWrapper.Header>
      <ProfileWrapper.Sidebar>
        <SectionCard title="About me">
          <Skills />
        </SectionCard>
        <SectionCard title="Skills">
          <Skills />
        </SectionCard>
      </ProfileWrapper.Sidebar>
      <ProfileWrapper.Feed>
        <SectionCard title="About me">Lorem</SectionCard>
        <SectionCard title="Latest projects">{JSON.stringify(profileDetails)}</SectionCard>
      </ProfileWrapper.Feed>
    </ProfileWrapper.Grid>
  );
};

export default ProfileDetails;
