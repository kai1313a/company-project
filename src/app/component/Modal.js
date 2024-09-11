'use client';

import { useState, useEffect } from 'react';

const Modal = ({ children }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleOpen = () => setIsOpen(true);
  const handleClose = (event) => {
    if (event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button onClick={handleOpen}>모달 열기</button>

      <div className={`modal ${isOpen ? 'isOpen' : '' ? 'dimm' : ''}`}> 
        {isOpen && (
          <div 
            className="inset-0 z-50 flex items-center justify-center" 
            onClick={handleClose}
          > 
            <div className="modal__open">
              <div className="">
                {children}
                <button onClick={handleClose} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">닫기</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;