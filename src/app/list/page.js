'use client';

import { useState } from 'react';

function ListPage() {
    const [dummyData] = useState([
        {
            id: 1,
            userName: 'yenny',
            title: '떡볶이 먹을사람 괌',
            ptcpation: '5',
            price: '10,000',
            time: '2024-11-29T11:30:00',
            tags: ['스트레스', '맵고수', '분식', '배달'],
            status: '진행중',
            image: '/image/list/dummy.png',
        },
        {
            id: 2,
            userName: 'Henry',
            title: '해장이 필요',
            ptcpation: '3',
            price: '30,000',
            time: '2024-12-28T18:30:00',
            tags: ['국물', '해장', '국밥', '배달'],
            status: '진행중',
            image: '/image/list/dummy2.png',
        },
        {
            id: 3,
            userName: 'kai',
            title: '피자 먹을 사람',
            ptcpation: '3',
            price: '20,000',
            time: '2024-08-26T11:30:00',
            tags: ['국물', '해장', '국밥', '배달'],
            status: '종료',
            image: '/image/list/dummy2.png',
        },
        {
            id: 4,
            userName: '백인',
            title: '국밥 먹을 사람',
            ptcpation: '2',
            price: '20,000',
            time: '2024-08-26T11:30:00',
            tags: ['국물', '해장', '국밥', '배달'],
            status: '종료',
            image: '/image/list/dummy2.png',
        },
        {
            id: 5,
            userName: '흑인',
            title: '피자 먹을 사람',
            ptcpation: '5',
            price: '30,000',
            time: '2024-08-26T11:30:00',
            tags: ['국물', '해장', '국밥', '배달'],
            status: '종료',
            image: '/image/list/dummy2.png',
        },
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('전체');
    const [sortBy, setSortBy] = useState('최신순');

    const filteredData = dummyData
        .filter(item =>
            item.title.includes(searchTerm) ||
            item.tags.some(tag => tag.includes(searchTerm))
        )
        .filter(item => selectedFilter === '전체' || item.status === selectedFilter)
        .sort((a, b) => {
            if (sortBy === '최신순') {
                return new Date(b.time) - new Date(a.time);
            } else if (sortBy === '마감임박순') {
                return new Date(a.time) - new Date(b.time);
            }
        });

    const isExpired = (time) => {
        const currentTime = new Date();
        const endTime = new Date(time);
        return currentTime > endTime;
    };

    const formatTime = (time) => {
        const endTime = new Date(time);
        const hours = endTime.getHours().toString().padStart(2, '0');
        const minutes = endTime.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    return (
        <div className="list flex flex-col min-h-screen">
            <div className="Header-list w-full flex flex-col items-center ">
                <span className="Header-list__menu">점심</span>
                <div className="Header-list__search flex relative">
                    <input
                        className='Header-list__input'
                        type="text"
                        placeholder=""
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="inner">
                <div className="filter-sort flex items-center">
                    <div className="sort">
                        <select>

                        </select>
                    </div>
                    <div className="filter flex">
                        <button
                            className={`filter__button ${selectedFilter === '전체' ? 'active' : ''}`}
                            onClick={() => setSelectedFilter('전체')}
                        >
                            전체
                        </button>
                        <button
                            className={`filter__button ${selectedFilter === '진행중' ? 'active' : ''}`}
                            onClick={() => setSelectedFilter('진행중')}
                        >
                            진행중
                        </button>
                        <button
                            className={`filter__button ${selectedFilter === '종료' ? 'active' : ''}`}
                            onClick={() => setSelectedFilter('종료')}
                        >
                            종료
                        </button>
                    </div>
                </div>

                <ul className="mem-list flex flex-col gap-2">
                    {filteredData.map((item) => (
                        <li key={item.id} className={`mem-item relative flex items-center ${isExpired(item.time) ? 'disabled' : ''}`}>
                            <div className="mem-item__profile flex flex-col items-center">
                                <div className="img-box">
                                    <img src={item.image} alt="프로필 이미지" className="profile-image" />
                                </div>
                                <span className='profile-name'>{item.userName}</span>
                            </div>
                            <div className="mem-item__content">
                                <div className="mem-item__wrap relative">
                                    <div className="mem-item__box flex justify-between">
                                        <h3 className="mem-item__title text-black">{item.title}</h3>
                                        <p className='mem-item__prcpation text-black'>참여 <span>{item.ptcpation}</span>명</p>
                                    </div>
                                    <div className="mem-item__box flex justify-between">
                                        {item.price && <p className="mem-item__price text-black">예상금액 : 1인당 {item.price}원</p>}
                                        <p className="mem-item__time text-black">
                                            {isExpired(item.time) ? (
                                                <span className="expired-label text-black">종료</span>
                                            ) : (
                                                <>마감 <span>{formatTime(item.time)}</span>까지</>
                                            )}
                                        </p>
                                    </div>
                                </div>
                                {item.tags.map(tag =>
                                    <span key={tag} className="mem-item__tags text-black">{tag.replace('', '#')}</span>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <button className="add-button">+</button>
        </div >
    );
}


export default ListPage;