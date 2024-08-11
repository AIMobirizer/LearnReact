
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTestResults } from '../../redux/slices/testResultSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const TestResultsPage = () => {
  const dispatch = useDispatch();
  const results = useSelector((state: any) => state.testResult.results);
  const loading = useSelector((state: any) => state.testResult.loading);

  useEffect(() => {
    dispatch(fetchTestResults());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Test Results</h1>
      <Link href="/test_results/create">
        <a className="text-blue-500">Create New Test Result</a>
      </Link>
      <ul>
        {results.map((result: any) => (
          <li key={result.id}>
            {result.score} - <Link href={`/test_results/${result.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default TestResultsPage;
