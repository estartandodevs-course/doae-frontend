import React from 'react';
import Targets from '../templates/Targets/';
import { Navbar } from '../components/Navbar';

const TargetsAndProducts = () => {
  return (
    <>
      <Targets />
      <Navbar authFlow={true} />
    </>
  );
};

export default TargetsAndProducts;
