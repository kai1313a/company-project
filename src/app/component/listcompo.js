'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import Modal from '../component/Modal';
import { useRouter, usePathname } from "next/navigation";
import HomeButton from '../component/HomeBtn';
import Make from '../component/make';

export default function ListPage({ data }) {
    const Router = useRouter();
    const pathname = usePathname();

    // 기본 프로필 이미지 URL 설정
    const defaultImageUrl = '/image/intro/profile-common.png';

    const [image, setImage] = useState(defaultImageUrl);
    const [userInfo, setUserInfo] = useState(null);

    // 사용자 이름 생성
    let users = data.map((username, index) => data[index].username);

    // 사용자 정보 체크
    useEffect(() => {
        const storedUserInfo = users;

        if (!storedUserInfo) {
            Router.push('/intro');
        } else {
            const parsedUserInfo = users;

            setUserInfo(parsedUserInfo);
            setImage(parsedUserInfo.image && parsedUserInfo.image[0] && typeof parsedUserInfo.image[0] === 'string'
                ? parsedUserInfo.image[0]
                : defaultImageUrl);
        }
    }, [Router]);

    const [dummyData, setDummyData] = useState(data);

    // 검색어, 필터, 카테고리 상태 설정
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('전체');
    const [selectedCategory, setSelectedCategory] = useState('2'); // 기본값 '점심'

    // URL 변경 감지 및 카테고리 동기화
    useEffect(() => {
        const category = pathname.split('/').pop();
        if (['0', '1', '2', '3'].includes(category)) {
            setSelectedCategory(category);
        }
    }, [pathname]);

    // 날짜와 시간 문자열을 Date 객체로 변환
    const parseTime = (timeString) => {
        if (!timeString) {
            return new Date();
        }

        const hours = parseInt(timeString.substring(0, 2));
        const minutes = parseInt(timeString.substring(2));

        if (isNaN(hours) || isNaN(minutes)) {
            return new Date();
        }

        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    };

    // 현재 시간 반환
    const getCurrentTime = () => {
        return new Date();
    };

    // 항목의 만료 여부
    const isExpired = (timeString) => {
        const itemDateTime = parseTime(timeString);
        const now = getCurrentTime();
        return now > itemDateTime;
    };

    // 시간 포맷
    const formatTime = (timeString) => {
        const hours = timeString.substring(0, 2);
        const minutes = timeString.substring(2);
        return `${hours}:${minutes}`;
    };

    // 실시간으로 만료 상태 업데이트
    useEffect(() => {
        const interval = setInterval(() => {
            const updatedData = dummyData.map(item => ({
                ...item,
                isExpired: isExpired(item.date)
            }));
            setDummyData(updatedData);
        }, 100); // 1분마다 체크

        return () => clearInterval(interval);
    }, [dummyData]);

    // 검색어, 카테고리, 필터에 따른 데이터 필터링
    const filteredData = dummyData
        .filter(item => item.category === selectedCategory)
        .filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (item.hash && item.hash.toLowerCase().includes(searchTerm.toLowerCase()))
        )
        .filter(item => {
            if (selectedFilter === '전체') return true;
            if (selectedFilter === '진행중') return !item.isExpired;
            if (selectedFilter === '종료') return item.isExpired;
            return true;
        });

    console.log("Filtered data:", filteredData);

    // 카테고리 변경 처리
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        Router.push(`/list/${category}`);
    };

    return (
        <div className="wrap list flex flex-col min-h-screen">
            <div className="Header-list w-full flex flex-col items-center ">
                <div className="Header-list__select">
                    <select
                        className="Header-list__menu"
                        value={selectedCategory}
                        onChange={(e) => handleCategoryChange(e.target.value)}
                    >
                        <option value="0">아침</option>
                        <option value="1">점심</option>
                        <option value="2">저녁·회식</option>
                        <option value="3">음료·디저트</option>
                    </select>
                </div>
                <div className="Header-list__search flex relative">
                    <input
                        className='Header-list__input'
                        type="text"
                        placeholder="검색어를 입력하세요"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            <div className="inner">
                <div className="filter-sort flex items-center">
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
                        <li key={item._id} className={`mem-item relative flex items-center ${item.isExpired ? 'disabled' : ''}`}>
                            <Link href={"/detail/" + item._id} style={{ width: "100%" }}>
                                <div className="mem-item__profile flex flex-col items-center">
                                    <div className="img-box">
                                        <img src={image} alt="프로필 이미지" width={56} height={56} className="profile-image" />
                                    </div>
                                    <span className='profile-name'>{userInfo?.loginName || item.username}</span>
                                </div>
                                <div className="mem-item__content">
                                    <div className="mem-item__wrap relative">
                                        <div className="mem-item__box flex justify-between">
                                            <h3 className="mem-item__title text-black">{item.title}</h3>
                                            <p className='mem-item__prcpation text-black'>참여 <span>{item.check.length}</span>명</p>
                                        </div>
                                        <div className="mem-item__box flex justify-between">
                                            {item.price && <p className="mem-item__price text-black">예상금액 : 1인당 {item.price[0]}원</p>}
                                            <p className="mem-item__time text-black">
                                                {item.isExpired ? (
                                                    <span className="expired-label text-black">종료</span>
                                                ) : (
                                                    <>마감 <span>{formatTime(item.date)}</span>까지</>
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                    {item.hash && item.hash.split(',').map((tag, index) =>
                                        <span key={index} className="mem-item__tags text-black">{tag.trim()}</span>
                                    )}
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='btn-box'>
                <HomeButton />

                <Modal>
                    <Make></Make>
                </Modal>
            </div>
        </div>
    );
}