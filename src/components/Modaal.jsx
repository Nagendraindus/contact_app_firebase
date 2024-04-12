import React from 'react';

const Modaal = ({ onClose, isOpen, children }) => {
  return (
    <>
      {/* Modal overlay and content */}
      {isOpen && (
        <>
          {/* Modal content */}
          <div className='m-auto relative z-50 min-h-[200px] max-w-[80%] bg-white p-4'>
            {/* Close button */}
            <div className='flex justify-end '>
              <img src="/close.svg" alt="" className='h-10 cursor-pointer' onClick={onClose} />
            </div>
            {/* Children components (content of the modal) */}
            {children}
          </div>
          {/* Modal overlay (to close the modal when clicked outside) */}
          {/* <div className='absolute backdrop-blur h-screen w-screen top-0 z-40' onClick={onClose} /> */}
        </>
      )}
    </>
  );
};

export default Modaal;
