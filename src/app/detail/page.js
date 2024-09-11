export default function detail() {
    return (
        <div className="wrap">
            <div className="detail">
                <div className="header">
                    <button className="btn_share">
                        <span className="blind">공유하기</span>
                    </button>

                    <span className="title">떡볶이 먹을사람 괌</span>

                    <button className="btn_write">
                        <span className="blind">글쓰기</span>
                    </button>
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
                                            <button className="btn_vote">투표 하기</button>
                                            <button className="icon_person">
                                                <span className="person_num">1</span>
                                            </button>
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
