import React from 'react';

function Header({ name, occupation, cta, social }) {
  return (
    <>
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
