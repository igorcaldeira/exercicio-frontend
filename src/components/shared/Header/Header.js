import React from 'react';
import { Cover } from './Header.style';

function Header({ picture, name, occupation, cta, social }) {
  return (
    <>
      <Cover src={require(`assets/img/${picture}`)} />
      <h1>{name}</h1>
      <h2>{occupation}</h2>
      <div>{cta}</div>
      <div>
        {social.map(({ name, link }) => (
          <div>
            {name}
            {link}
          </div>
        ))}
      </div>
    </>
  );
}

Header.defaultProps = {
  name: '',
  occupation: '',
  cta: '',
  social: [],
};

export default Header;
