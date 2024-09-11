'use client';

import { useState } from 'react';

export default function popup() {
    const [isOpen, setIsOpen] = useState(false);

    const openModalHandler = () => {
        setIsOpen(!isOpen);
    };

  return (
    <div className='sec_modal'>
        <div className='sec_modal_inner'>
            <button onClick={openModalHandler}>
                {isOpen ? null : "Open Modal"}
            </button>
            
            <div className={isOpen ? 'sec_modal__section openModal' : 'sec_modal__section'}>
                {isOpen ? 
                    <button onClick={openModalHandler} className='sec_modal__btn--open'>
                        <div className='sec_modal__body'>
                            <button onClick={openModalHandler} className='sec_modal__btn--close'>닫기</button>
                            <div>Hello World</div>
                        </div>
                    </button> 
                : null}
            </div>
        </div>

        <div className={isOpen ? 'dimm' : ''}></div>
    </div>
  );
}
