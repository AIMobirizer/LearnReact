
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/slices/countrySlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const CountriesPage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state: any) => state.country.countries);
  const loading = useSelector((state: any) => state.country.loading);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Countries</h1>
      <Link href="/countries/create">
        <a className="text-blue-500">Create New Country</a>
      </Link>
      <ul>
        {countries.map((country: any) => (
          <li key={country.id}>
            {country.name} - <Link href={`/countries/${country.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default CountriesPage;
