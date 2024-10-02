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
          <div className="modal__open">
              {children}
              <button className="close_btn" ><img onClick={handleClose} src="../../../image/make/modal_close.png" alt="닫기 버튼" width={41} height={40}/></button>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;