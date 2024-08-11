
import React from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

const SubjectForm = ({ subject, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Subject Name"
      name="name"
      value={subject.name}
      onChange={onChange}
      error={errors.name}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default SubjectForm;
