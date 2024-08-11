
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTopicProgress } from '../../redux/slices/topicProgressSlice';
import { useRouter } from 'next/router';
import TopicProgressForm from '../../components/forms/TopicProgressForm';

const CreateTopicProgressPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [progress, setProgress] = useState({ topic_id: '', user_id: '', progress: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProgress({ ...progress, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createTopicProgress(progress))
      .unwrap()
      .then(() => {
        router.push('/topic_progress');
      })
      .catch((error) => setErrors(error));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Topic Progress</h1>
      <TopicProgressForm progress={progress} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
    </div>
  );
};

export default CreateTopicProgressPage;
