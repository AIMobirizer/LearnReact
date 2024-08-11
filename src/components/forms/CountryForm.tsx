
import React from 'react';
import TextInput from '../TextInput';
import Button from '../Button';

const CountryForm = ({ country, onChange, onSubmit, errors }) => (
  <form onSubmit={onSubmit}>
    <TextInput
      label="Country Name"
      name="name"
      value={country.name}
      onChange={onChange}
      error={errors.name}
    />
    <Button type="submit" label="Save" />
  </form>
);

export default CountryForm;
