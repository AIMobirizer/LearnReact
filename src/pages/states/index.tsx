
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStates } from '../../redux/slices/stateSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const StatesPage = () => {
  const dispatch = useDispatch();
  const states = useSelector((state: any) => state.state.states);
  const loading = useSelector((state: any) => state.state.loading);

  useEffect(() => {
    dispatch(fetchStates());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">States</h1>
      <Link href="/states/create">
        <a className="text-blue-500">Create New State</a>
      </Link>
      <ul>
        {states.map((state: any) => (
          <li key={state.id}>
            {state.name} - <Link href={`/states/${state.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default StatesPage;
