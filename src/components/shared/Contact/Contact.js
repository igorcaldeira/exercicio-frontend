import React from 'react';

function Contact({ content }) {
  return (
    <>
      {content.map(({ name }) => (
        <div>{name}</div>
      ))}
    </>
  );
}

Contact.defaultProps = {
  content: [],
};

export default Contact;
