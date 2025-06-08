import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

export const Body = () => {
  return (
    <>
      <Header /> {/* Now inside Router context */}
      <div className='flex'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};
