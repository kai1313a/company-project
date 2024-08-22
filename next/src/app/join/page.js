import Link from 'next/link'

export default function join() {
    return (
        <div className="flex flex-col items-center min-h-screen p-20 bg-white">
            <div className='company'>
                <h2 className='company__title mb-8 text-left text-black'>오늘도 존버 <span className="color">Yenny</span>님<br />건강한 <span className="bt-color">회사세끼</span> 되세요</h2>

                <ul className='company__list grid grid-cols-2 gap-x-8 gap-y-8'>
                    <li className='company__item company__item--1 p-5 bg-zinc-600 rounded-xl'>
                        <Link href="/">
                            <h3 className='text-black'>커피, 음료, <br /> 디저트</h3>
                        </Link>
                    </li>
                    <li className='company__item company__item--2 p-5 bg-zinc-600 rounded-xl'>
                        <Link href="/">
                            <h3 className='text-black'>아침</h3>
                        </Link>
                    </li>
                    <li className='company__item company__item--3 p-5 bg-zinc-600 rounded-xl'>
                        <Link href="/">
                            <h3 className='text-black'>점심</h3>
                        </Link>
                    </li>
                    <li className='company__item company__item--4 p-5 bg-zinc-600 rounded-xl'>
                        <Link href="/">
                            <h3 className='text-black'>저녁, 회식</h3>
                        </Link>
                    </li>
                    <li className='company__item company__item--5 p-5s bg-zinc-600 rounded-xl'>
                        광고배너
                    </li>
                </ul>
            </div>
        </div >
    );
}
