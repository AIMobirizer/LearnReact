
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProfiles } from '../../redux/slices/profileSlice';
import Link from 'next/link';
import Layout from '../../components/Layout';

const ProfilesPage = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state: any) => state.profile.profiles);
  const loading = useSelector((state: any) => state.profile.loading);

  useEffect(() => {
    dispatch(fetchProfiles());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">Profiles</h1>
      <Link href="/profiles/create">
        <a className="text-blue-500">Create New Profile</a>
      </Link>
      <ul>
        {profiles.map((profile: any) => (
          <li key={profile.id}>
            {profile.student_name} - {profile.school_name} - <Link href={`/profiles/${profile.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default ProfilesPage;
