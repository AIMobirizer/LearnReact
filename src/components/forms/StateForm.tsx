
import React from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

const StateForm = ({ state, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="State Name"
      name="name"
      value={state.name}
      onChange={onChange}
      error={errors.name}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default StateForm;
