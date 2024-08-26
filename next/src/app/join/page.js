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
        <div className="flex flex-col items-center min-h-screen p-20 bg-white">
            <main className="meal">
                <h2 className="meal__title text-black my-9 text-2xl">
                    오늘도 존버 <span>{userName}</span>님<br />건강한 회사세끼 되세요.
                </h2>

                <ul className="meal-list grid gap-8 grid-cols-2 my-9">
                    {mealCategories.map((item, i) => (
                        <li
                            key={item.title}
                            className={`meal-item relative rounded-lg bg-slate-300 p-5 pb-11 w-[166px] h-[115px] ${i === 2 ? 'meal-item--color' : ''}`}
                        >
                            <Link href="/">
                                <h3 className="text-black text-lg">
                                    {parse(item.title)}
                                </h3>
                                <div className="img-box w-20 h-20 absolute bottom-[-17px] right-0">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                    />
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>

            </main>
        </div>
    );
}
