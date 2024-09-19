'use client';

import { useState } from "react";
import Link from 'next/link';

export default function detail() {

    const [like, setLike] = useState(0);
    const [isLike, setIsLike] = useState(false);

    const onLikeButtonClick = () => {
        setLike(like + (isLike ? -1 : 1));
        setIsLike(!isLike);
    }

    return (
        <div className="wrap">
            <div className="detail">
                <div className="header">
                    <button className="btn_share">
                        <span className="blind">공유하기</span>
                    </button>

                    <div className="title">
                       111
                    </div>

                    <Link href="/component/make" className="btn_write">
                        <span className="blind">글쓰기</span>
                    </Link>
                </div>

                <div className="detail_tag">
                    <ul className="detail_list">
                        <div className="item">#스트레스</div>
                    </ul>
                </div>

                <div className="detail_menu">
                    <h3 className="title">메뉴 목록</h3>
                    <ul className="menu_list">
                        <li className="item">
                            <span className="num">1</span>

                            <div className="info">
                                <div className="top">
                                    <div className="inner">
                                        <strong className="name">메뉴 이름</strong>

                                        <div className="vote_box">
                                            <button className={!isLike ? 'btn_vote' : 'btn_vote active'} onClick={onLikeButtonClick}>
                                                {!isLike ? '투표하기' : '투표완료'}
                                            </button>
                                            <button className="icon_person"></button>
                                            <span className="person_num">{like}</span>
                                        </div>
                                    </div>
                                    
                                    <p className="txt">예상금액 : 1인당 <span className="price">10,000</span>원</p>
                                </div>
                                
                                <div className="btm">
                                    <div className="photo_list">
                                        <button className="btn_photo">사진 업로드</button>
                                        <button className="btn_photo">사진 업로드</button>
                                        <button className="btn_photo">사진 업로드</button>
                                    </div>

                                    <a href="" className="btn_link">
                                        <span className="blind">공유하기</span>
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}