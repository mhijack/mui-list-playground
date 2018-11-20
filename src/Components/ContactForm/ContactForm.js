import React from 'react';
import { Field, reduxForm } from 'redux-form';

const ContactForm = ({ handleSubmit }) => {
  return <form onSubmit={handleSubmit} />;
};

ContactForm = reduxForm({
  form: 'contact',
})(ContactForm);

export default ContactForm;
