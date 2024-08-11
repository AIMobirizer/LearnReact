
import React from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

const UserProgressForm = ({ progress, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="User ID"
      name="user_id"
      value={progress.user_id}
      onChange={onChange}
      error={errors.user_id}
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

export default UserProgressForm;
