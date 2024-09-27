import React from 'react';
import Link from 'next/link';

const HomeButton = () => {
    return (
        <div className='btn-box'>
            <Link href="/" className='btn-box__link fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300'>
            </Link>
        </div>
    );
};

export default HomeButton;