import React from 'react';
import Items from '../templates/Items';
import { Navbar } from '../components/Navbar';

const ItemsInstitution = () => {
  return (
    <>
      <Items />
      <Navbar authFlow={true} />
    </>
  );
};

export default ItemsInstitution;
