import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as profileUseCases from 'store/profile/profile.useCases';
import Header from 'components/shared/Header';
import SectionCard from 'components/shared/SectionCard';
import Contact from 'components/shared/Contact';
import Skills from 'components/shared/Skills';
import Feed from 'components/shared/Feed';
import Profile from './ProfileDetails.style';

const ProfileDetails = (props) => {
  const dispatch = useDispatch();

  const profileDetails = useSelector(({ profile }) => profile.getProfile.content);

  useEffect(() => {
    dispatch(profileUseCases.getProfile());
  }, []);

  return (
    <>
      <Profile.Header>
        <Profile.HeaderContent>
          <Header
            name={profileDetails?.name}
            occupation={profileDetails?.occupation}
            cta={profileDetails?.cta}
            social={profileDetails?.social}
          />
        </Profile.HeaderContent>
      </Profile.Header>
      <Profile.Grid>
        <Profile.Sidebar>
          <SectionCard title="About me">
            <Contact content={profileDetails?.contacts} />
          </SectionCard>
          <SectionCard title="Skills">
            <Skills content={profileDetails?.skills} />
          </SectionCard>
        </Profile.Sidebar>
        <Profile.Feed>
          <SectionCard title="About me">{profileDetails?.about}</SectionCard>
          <SectionCard title="Latest projects">
            <Feed content={profileDetails?.feed} />
          </SectionCard>
        </Profile.Feed>
      </Profile.Grid>
    </>
  );
};

export default ProfileDetails;
