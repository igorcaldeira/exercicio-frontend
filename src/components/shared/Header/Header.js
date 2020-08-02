import React from 'react';
import { GrTwitter, GrLinkedinOption } from 'react-icons/gr';
import { FaYandexInternational, FaGithubAlt } from 'react-icons/fa';
import { AiOutlineGooglePlus } from 'react-icons/ai';
import Button from 'components/shared/Button';
import { ProfileHeader, Image } from './Header.style';

const icons = {
  twitter: <GrTwitter />,
  google: <AiOutlineGooglePlus />,
  linkedin: <GrLinkedinOption />,
  github: <FaGithubAlt />,
  yandex: <FaYandexInternational />,
};

const Header = ({ picture, name, occupation, cta, social }) => {
  return (
    <ProfileHeader.Wrapper>
      <ProfileHeader.Picture>
        <Image src={require(`assets/img/${picture}`)} />
      </ProfileHeader.Picture>
      <ProfileHeader.BasicInfo>
        <h1>{name}</h1>
        <h2>{occupation}</h2>
        <div>{cta}</div>
        <div>
          {social.map(({ name, link }) => (
            <Button>{icons[name]}</Button>
          ))}
        </div>
      </ProfileHeader.BasicInfo>
    </ProfileHeader.Wrapper>
  );
};

Header.defaultProps = {
  name: '',
  occupation: '',
  cta: '',
  social: [],
};

export default Header;
