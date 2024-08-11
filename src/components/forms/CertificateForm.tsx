
import React from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

const CertificateForm = ({ certificate, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Certificate Name"
      name="name"
      value={certificate.name}
      onChange={onChange}
      error={errors.name}
    />
    <TextInput
      label="Description"
      name="description"
      value={certificate.description}
      onChange={onChange}
      error={errors.description}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default CertificateForm;
