
import React from 'react';
import TextInput from '../TextInput';
import SelectBox from '../SelectBox';
import Button from '../Button';

const ProfileForm = ({ profile, onChange, onSubmit, errors, boards }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Student Name"
      name="student_name"
      value={profile.student_name}
      onChange={onChange}
      error={errors.student_name}
    />
    <TextInput
      label="School Name"
      name="school_name"
      value={profile.school_name}
      onChange={onChange}
      error={errors.school_name}
    />
    <TextInput
      label="Age"
      name="age"
      value={profile.age}
      onChange={onChange}
      error={errors.age}
    />
    <SelectBox
      label="Board"
      name="board_id"
      options={boards}
      value={profile.board_id}
      onChange={onChange}
      error={errors.board_id}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default ProfileForm;
