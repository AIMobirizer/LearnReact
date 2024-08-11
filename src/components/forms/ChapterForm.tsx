
import React from 'react';
import TextInput from '../TextInput';
import SelectBox from '../SelectBox';
import Button from '../Button';

const ChapterForm = ({ chapter, onChange, onSubmit, errors, subjects }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Chapter Name"
      name="name"
      value={chapter.name}
      onChange={onChange}
      error={errors.name}
    />
    <SelectBox
      label="Subject"
      name="subject_id"
      options={subjects}
      value={chapter.subject_id}
      onChange={onChange}
      error={errors.subject_id}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default ChapterForm;
