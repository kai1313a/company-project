'use client';

import Link from 'next/link'
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';

export default function join() {

    const userName = 'Yenny'
    const [mealCategories, setMealCategories] = useState([]);

    useEffect(() => {
        setMealCategories([
            { title: '커피, 음료,<br> 디저트', image: './image/join/meal-item01-greencoffee.png', alt: '커피' },
            { title: '아침', image: './image/join/meal-item02-toster.png', alt: '토스트' },
            { title: '점심', image: './image/join/meal-item03-rice.png', alt: '밥' },
            { title: '저녁, 회식', image: './image/join/meal-item04-beer.png', alt: '맥주' },
        ]);
    }, []);

    return (
        <div className="flex flex-col items-center min-h-screen bg-white">
            <main className="meal">
                <h2 className="meal__title text-black font-semibold jua">
                    오늘도 존버 <span className='userName'>{userName}</span>님<br />건강한 <span className='companyUser relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[10px] after:bg-[#4DF5C3] after:z-[-1]'>회사세끼</span> 되세요.
                </h2>

                <ul className="meal-list grid gap-8 grid-cols-2 my-9">
                    {mealCategories.map((item, i) => (
                        <li
                            key={item.title}
                            className={`meal-item relative rounded-lg font-semibold relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-tr after:from-[#e2e2e2] after:to-[#666666] after:opacity-20 after:rounded-[10px] ${i === 2 ? 'meal-item--color' : ''}`}
                        >
                            <Link href="/" className='relative w-[166px] h-[115px] p-5 pb-11 block z-10'>
                                <h3 className="text-black text-lg">
                                    {parse(item.title)}
                                </h3>
                                <div className="img-box md:w-auto h-20 absolute w-20 bottom-[-17px] right-0">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                    />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <textarea className='meal__banner w-full p-5 rounded-xl text-black font-semibold rerative text-lg opacity-20 bg-gradient-to-tr from-[#e2e2e2] to-[#666666] ' defaultValue="광고배너" ></textarea>
            </main>
        </div >
    );
}
