
import React from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

const TestResultForm = ({ result, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Score"
      name="score"
      value={result.score}
      onChange={onChange}
      error={errors.score}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default TestResultForm;
