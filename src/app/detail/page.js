

export default function detail() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-between pt-4">
            <div className="detail">
                <div className="flex items-center justify-between detail-tag">
                    <ul className="flex items-center justify-between gap-x-2.5 detail-tag__list">
                        <li className="inline-flex items-center px-2.5 detail-tag__item">#스트레스</li>
                        <li className="inline-flex items-center px-2.5 detail-tag__item">#스트레스</li>
                        <li className="inline-flex items-center px-2.5 detail-tag__item">#스트레스</li>
                        <li className="inline-flex items-center px-2.5 detail-tag__item">#스트레스</li>
                    </ul>
                </div>

                <div className="detail-menu">
                    <h3 className="detail-menu__title">메뉴 목록</h3>
                    <ul className="flex items-center gap-5 detail-menu__list">
                        <li className="inline-flex rounded detail-menu__item">
                            <span className="flex items-center justify-center detail-menu__num">1</span>

                            <div className="detail-menu__info">
                                <div className="detail-menu__top">
                                    <div className="flex items-center justify-between detail-menu__inner">
                                        <strong className="detail-menu__info--name">메뉴 이름</strong>
                                        <button className="inline-flex items-center justify-center rounded detail-menu__info--btn-vote">투표 하기</button>
                                        <p className="detail-menu__info--person">
                                            <span color="inline-flex items-center justify-center">1</span>
                                        </p>
                                    </div>
                                    
                                    <p className="detail-menu__info--txt">예상금액 : 1인당 <span className="detail-menu__info--price">10,000</span>원</p>
                                </div>
                                
                                <div className="flex items-center detail-menu__btm">
                                    <div className="flex detail-menu__inner">
                                        <button className="detail-menu__btn-photo photo01">사진 업로드</button>
                                        <button className="detail-menu__btn-photo photo01">사진 업로드</button>
                                        <button className="detail-menu__btn-photo photo01">사진 업로드</button>
                                    </div>

                                    <a hfre="" className="detail-menu__btn-share">공유하기</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
