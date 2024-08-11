
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTests } from '../../redux/slices/testSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const TestsPage = () => {
  const dispatch = useDispatch();
  const tests = useSelector((state: any) => state.test.tests);
  const loading = useSelector((state: any) => state.test.loading);

  useEffect(() => {
    dispatch(fetchTests());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Tests</h1>
      <Link href="/tests/create">
        <a className="text-blue-500">Create New Test</a>
      </Link>
      <ul>
        {tests.map((test: any) => (
          <li key={test.id}>
            {test.name} - <Link href={`/tests/${test.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TestsPage;
