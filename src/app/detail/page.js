'use client';

import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Modal02 from '../component/Modal02';

export default function Detail() {

    const [isActive, setIsActive] = useState(true);
    const toggleIsActive = (i, prev) => {
        setIsActive(i);
    };

    let [check, setcheck] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const fetchCheckes = async () => {
        try {
            setError();
            setLoading(true);
            const count = (check) => {
                check = menuListData.menu.map((item, index) => item.check)
                setcheck(check);
            }

            count(check);

        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchCheckes();
    }, []);

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다.</div>;
    // if (!check) return null;

    const tagSlideData = [
        {
            id: 1,
            text: '#테스트 테스트',
        },
        {
            id: 2,
            text: '#테스트 테스트',
        },
        {
            id: 3,
            text: '#테스트 테스트',
        },
        {
            id: 4,
            text: '#테스트 테스트',
        },
        {
            id: 5,
            text: '#테스트 테스트',
        }
    ];

    const [dummyData] = useState(
        {
            menu: [
                {
                    id: 1,
                    title: '엽기떡볶이',
                    ptcpation: '1',
                    price: '10,000',
                    images: ['../../image/detail/btn_photo.png', '../../image/detail/btn_photo.png'],
                    alts: ['1', '2'],
                    url: 'https://www.naver.com/',
                    check : 10
                },
                {
                    id: 2,
                    title: '죠스떡볶이',
                    ptcpation: '1',
                    price: '30,000',
                    images: ['../../image/detail/btn_photo.png'],
                    alts: ['1'],
                    url: 'https://www.google.com/',
                    check : 20
                },
                {
                    id: 3,
                    title: '죠스떡볶이',
                    ptcpation: '1',
                    price: '15,000',
                    images: [],
                    alts: [],
                    url: 'https://www.google.com/',
                    check : 30
                },
                {
                    id: 4,
                    title: '죠스떡볶이22222',
                    ptcpation: '1',
                    price: '25,000',
                    images: [],
                    alts: [],
                    url: 'https://www.google.com/',
                    check : 40
                },
            ]
        }
    );

    const menuListData = dummyData;

    return (
        <div className="wrap">
            <div className="detail">
                <div className="header">
                    <button className="btn_share">
                        <span className="blind">공유하기</span>
                    </button>

                    <div className="title">
                        떡볶이 먹을사람 괌
                        {/* <input type="text" value="떡볶이 먹을사람 괌" /> */}
                    </div>

                    <button className="btn_write">
                        <span className="blind">수정하기</span>
                    </button>
                </div>

                <div className="tag">
                    <div className="swiper-container tag_list">
                        <Swiper
                            slidesPerView={'auto'} // 보여질 슬라이스 수
                        >
                            {tagSlideData.map((slide) => (
                                <SwiperSlide key={slide.id} className="item">
                                    <div>
                                        <div>{slide.text}</div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="detail_menu">
                    <h3 className="title">메뉴 목록</h3>
                    <ul className="menu_list">
                        {
                            menuListData.menu.map((item, index) => (
                                <li key={index} className="item">
                                    <span className="num">{item.id}</span>

                                    <div className="info">
                                        <div className="top">
                                            <div className="inner">
                                                <strong className="name">{item.title}</strong>

                                                <div className="vote_box">
                                                    {/* <button key={item.id} className={!ischeck ? 'btn_vote' : 'btn_vote active'} onClick={oncheckButtonClick}>
                                                    {!ischeck ? '투표하기' : '투표완료'}
                                                </button> */}

                                                    <button
                                                        value={index}
                                                        onClick={() => {
                                                            toggleIsActive(index);
                                                        }}
                                                        className={isActive === index ? 'btn_vote active' : 'btn_vote'}
                                                    >
                                                        {isActive === index ? '투표완료' : '투표하기'}
                                                    </button>

                                                    {/* <button className="icon_person"></button> */}
                                                    <Modal02 className="icon_person">
                                                        <div>Hello World222</div>
                                                    </Modal02>
                                                    <span className="person_num">{isActive === index ? (check[index] + 1) : (check[index]) }</span>
                                                </div>
                                            </div>

                                            {item.price && <p className="txt">예상금액 : {item.ptcpation}인당 <span className="price">{item.price}</span>원</p>}
                                        </div>

                                        <div className="btm">
                                            <ul className="photo_list">
                                                {
                                                    item.images.length !== 0 ? (
                                                        item.images.map((image, index) =>
                                                            <li key={index}>
                                                                <img src={image} alt={item.alts[index]} />
                                                            </li>
                                                        )
                                                    ) : (
                                                        <li className="photo_none">
                                                            <img src="../../image/detail/icon_camera.png" alt="카메라" />
                                                            <span>등록된사진없음</span>
                                                        </li>
                                                    )
                                                }
                                            </ul>

                                            {
                                                item.images.length !== 0 ? (
                                                    <a href={item.url} target="_blank" className="btn_link active" title="해당 페이지로 이동">
                                                        <span className="blind">공유하기</span>
                                                    </a>
                                                ) : (
                                                    <a href={item.url} className="btn_link disabled">
                                                        <span className="blind">공유하기</span>
                                                    </a>
                                                )
                                            }

                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}