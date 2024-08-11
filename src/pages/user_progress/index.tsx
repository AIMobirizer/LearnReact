
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProgresses } from '../../redux/slices/userProgressSlice';
import Link from 'next/link';

const UserProgressPage = () => {
  const dispatch = useDispatch();
  const userProgresses = useSelector((state: any) => state.userProgress.userProgresses);
  const loading = useSelector((state: any) => state.userProgress.loading);

  useEffect(() => {
    dispatch(fetchUserProgresses());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Progress</h1>
      <Link href="/user_progress/create">
        <a className="text-blue-500">Create New Progress</a>
      </Link>
      <ul>
        {userProgresses.map((progress: any) => (
          <li key={progress.id}>
            {progress.progress} - <Link href={`/user_progress/${progress.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProgressPage;
