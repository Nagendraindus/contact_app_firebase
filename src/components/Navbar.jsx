import React from 'react';

const Navbar = () => {
  return (
    <div className='my-4 flex justify-center items-center h-[60px] bg-slate-500 m-4 rounded-lg'>
      {/* Logo and app title */}
      <div className="flex justify-center items-center text-xl font-medium">
        <img src="/icon.svg" alt="" />
        <h1>contact app</h1>
      </div>
    </div>
  );
};

export default Navbar;
