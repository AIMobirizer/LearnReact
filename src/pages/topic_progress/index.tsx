
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopicProgresses } from '../../redux/slices/topicProgressSlice';
import Link from 'next/link';

const TopicProgressPage = () => {
  const dispatch = useDispatch();
  const topicProgresses = useSelector((state: any) => state.topicProgress.topicProgresses);
  const loading = useSelector((state: any) => state.topicProgress.loading);

  useEffect(() => {
    dispatch(fetchTopicProgresses());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Topic Progress</h1>
      <Link href="/topic_progress/create">
        <a className="text-blue-500">Create New Topic Progress</a>
      </Link>
      <ul>
        {topicProgresses.map((progress: any) => (
          <li key={progress.id}>
            {progress.progress} - <Link href={`/topic_progress/${progress.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicProgressPage;
