
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLanguages } from '../../redux/slices/languageSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const LanguagesPage = () => {
  const dispatch = useDispatch();
  const languages = useSelector((state: any) => state.language.languages);
  const loading = useSelector((state: any) => state.language.loading);

  useEffect(() => {
    dispatch(fetchLanguages());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Languages</h1>
      <Link href="/languages/create">
        <a className="text-blue-500">Create New Language</a>
      </Link>
      <ul>
        {languages.map((language: any) => (
          <li key={language.id}>
            {language.name} - <Link href={`/languages/${language.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default LanguagesPage;
