
import React from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

const UserForm = ({ user, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Username"
      name="username"
      value={user.username}
      onChange={onChange}
      error={errors.username}
    />
    <TextInput
      label="Email"
      name="email"
      value={user.email}
      onChange={onChange}
      error={errors.email}
    />
    <TextInput
      label="Password"
      name="password"
      type="password"
      value={user.password}
      onChange={onChange}
      error={errors.password}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default UserForm;
