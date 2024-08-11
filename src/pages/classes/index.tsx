
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchClasses } from '../../redux/slices/classSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const ClassesPage = () => {
  const dispatch = useDispatch();
  const classes = useSelector((state: any) => state.class.classes);
  const loading = useSelector((state: any) => state.class.loading);

  useEffect(() => {
    dispatch(fetchClasses());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Classes</h1>
      <Link href="/classes/create">
        <a className="text-blue-500">Create New Class</a>
      </Link>
      <ul>
        {classes.map((cls: any) => (
          <li key={cls.id}>
            {cls.name} - <Link href={`/classes/${cls.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default ClassesPage;
