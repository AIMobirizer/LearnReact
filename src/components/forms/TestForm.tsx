
import React from 'react';
import TextInput from '../TextInput';
import SelectBox from '../SelectBox';
import Button from '../Button';

const TestForm = ({ test, onChange, onSubmit, errors, chapters }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Test Name"
      name="name"
      value={test.name}
      onChange={onChange}
      error={errors.name}
    />
    <SelectBox
      label="Chapter"
      name="chapter_id"
      options={chapters}
      value={test.chapter_id}
      onChange={onChange}
      error={errors.chapter_id}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default TestForm;
