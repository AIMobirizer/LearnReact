
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createCountry } from '../../redux/slices/countrySlice';
import { useRouter } from 'next/router';
import CountryForm from '../../components/forms/CountryForm';
import Layout from '../../components/Layout';

const CreateCountryPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [country, setCountry] = useState({ name: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCountry({ ...country, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createCountry(country))
      .unwrap()
      .then(() => {
        router.push('/countries');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Create Country</h1>
      <CountryForm country={country} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </Layout>
  );
};

export default CreateCountryPage;
