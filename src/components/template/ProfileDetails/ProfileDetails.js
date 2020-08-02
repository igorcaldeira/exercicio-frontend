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

  const { content, loading } = useSelector(({ profile }) => profile.getProfile);
  const shouldShowInfo = Boolean(content && !loading);

  useEffect(() => {
    dispatch(profileUseCases.getProfile());
  }, []);

  return (
    shouldShowInfo && (
      <>
        <Profile.Header>
          <Profile.HeaderContent>
            <Header
              picture={content?.picture}
              name={content?.name}
              occupation={content?.occupation}
              cta={content?.cta}
              social={content?.social}
            />
          </Profile.HeaderContent>
        </Profile.Header>
        <Profile.Grid>
          <Profile.Sidebar>
            <SectionCard>
              <Contact content={content?.contacts} />
            </SectionCard>
            <SectionCard title="Skills">
              <Skills content={content?.skills} />
            </SectionCard>
          </Profile.Sidebar>
          <Profile.Feed>
            <SectionCard title="About me">{content?.about}</SectionCard>
            <SectionCard title="Latest projects">
              <Feed content={content?.feed} />
            </SectionCard>
          </Profile.Feed>
        </Profile.Grid>
      </>
    )
  );
};

export default ProfileDetails;
