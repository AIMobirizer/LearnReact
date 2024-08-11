
import React from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

const LanguageForm = ({ language, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Language Name"
      name="name"
      value={language.name}
      onChange={onChange}
      error={errors.name}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default LanguageForm;
