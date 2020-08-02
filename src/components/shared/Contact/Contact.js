import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { AiOutlineMail } from 'react-icons/ai';
import { FiLink } from 'react-icons/fi';
import Link from 'components/shared/Link';
import { ContactItem } from './Contact.style';

const ContactType = ({ type, name }) =>
  ({
    location: (
      <p>
        <MdLocationOn />
        {name}
      </p>
    ),
    email: (
      <>
        <AiOutlineMail />
        <Link showIcon={false}>{name}</Link>
      </>
    ),
    site: (
      <>
        <FiLink />
        <Link showIcon={false}>{name}</Link>
      </>
    ),
  }[type] || null);

const Contact = ({ content }) =>
  content.map(({ name, type }) => (
    <ContactItem key={name}>
      <ContactType name={name} type={type} />
    </ContactItem>
  ));

Contact.defaultProps = {
  content: [],
};

export default Contact;
