import React from 'react';
import Profile from '../templates/Profile';
import { Navbar } from '../components/Navbar';

const ProfileInstitution = () => {
  return (
    <>
      <Profile />
      <Navbar authFlow={true} />
    </>
  );
};

export default ProfileInstitution;
