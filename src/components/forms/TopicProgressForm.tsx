
import React from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

const TopicProgressForm = ({ progress, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Topic ID"
      name="topic_id"
      value={progress.topic_id}
      onChange={onChange}
      error={errors.topic_id}
    />
    <TextInput
      label="Progress"
      name="progress"
      value={progress.progress}
      onChange={onChange}
      error={errors.progress}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default TopicProgressForm;
