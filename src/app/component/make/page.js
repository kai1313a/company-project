'use client';

import { Input } from "postcss";
import Image from "next/image";
import { useEffect, useState } from 'react';
// import Controller from '../controller/Controller.js';

export default function Make() {

    const [selectedOption, setselectedOption] = useState('');

    // const controllerValue = Controller('intro');

    const defaultImageUrl = '/image/make/upload_basic.png'; //기본 이미지 경로

    // 프로필 이미지 업로드
    const [image, setImage] = useState(defaultImageUrl);
    const [file, setFile] = useState(null);

    // 이미지 파일을 선택했을 때 호출되는 함수
    const handleImageChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
                setFile(selectedFile);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    // 취소 버튼을 클릭했을 때 호출되는 함수
    const handleCancel = () => {
        setImage(defaultImageUrl);
        setFile(null);
    };

    const [userName, setUserName] = useState('');

    useEffect(() => {
        if (localStorage.getItem('users')) {
            const name = JSON.parse(localStorage.getItem('users'))
            setUserName(name.loginName)
        
        } else {
            Router.push('/intro')
        }
    });
    
    

    return (
        <div className="sec_make">
            <div className="wrap">
                <div className="container">
                    <form action="/api/post/make" method="POST">
                        <div className="info_area">
                            <p className="info_title">카테고리</p>
                            <ul className="info_cate">
                                <li className="list_item">
                                    <label>
                                        <input
                                            name="category"
                                            type="radio"
                                            value="0"
                                            checked={selectedOption === '0'}
                                            onChange={(e) => setselectedOption(e.target.value)}
                                        />
                                        <span className="peer">아침</span>
                                    </label>
                                </li>
                                <li className="list_item">
                                    <label>
                                        <input
                                            name="category"
                                            type="radio"
                                            value="1"
                                            checked={selectedOption === '1'}
                                            onChange={(e) => setselectedOption(e.target.value)}
                                        />
                                        <span className="peer">점심</span>
                                    </label>
                                </li>
                                <li className="list_item">
                                    <label>
                                        <input
                                            name="category"
                                            type="radio"
                                            value="2"
                                            checked={selectedOption === '2'}
                                            onChange={(e) => setselectedOption(e.target.value)}
                                        />
                                        <span className="peer">저녁·회식</span>
                                    </label>
                                </li>
                                <li className="list_item">
                                    <label>
                                        <input
                                            name="category"
                                            type="radio"
                                            value="3"
                                            checked={selectedOption === '3'}
                                            onChange={(e) => setselectedOption(e.target.value)}
                                        />
                                        <span className="peer">음료·디저트</span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div className="info_area">
                            <p className="info_title">방정보</p>
                            <ul className="info_list">
                                <li className="list_item">
                                    <input type="text" name="title" placeholder="방제목" id="title" required />
                                </li>
                                <li className="list_item">
                                    <input type="text" name="hash" placeholder="#맛집,#폭주,#집안가 (5개까지 입력)" id="tag" required />
                                </li>
                            </ul>
                        </div>
                        <div className="info_area">
                            <p className="info_title">메뉴등록</p>
                            <ul className="info_list">
                                <li className="list_item">
                                    <label className="item_tit" htmlFor="name">1. </label>
                                    <input type="text" name="menu" placeholder="메뉴이름" id="name" required />
                                </li>
                                <li className="list_item">
                                    <input type="text" name="price" placeholder="예상금액 (1인당 / 금액만 입력)" id="price" required />
                                </li>
                                <li className="list_item">
                                    <input type="text" name="url" placeholder="URL" id="adressurl" required />
                                </li>

                                <div className='list_pic' onChange={handleImageChange}>
                                    <div className='img_wrap'>
                                        <img className='list_img' src={image} alt="리스트 업로드 이미지" />
                                        <label htmlFor="loginImgInput" className='img_label'>
                                        </label>
                                        <button className={`img_delete ${!file ? '' : 'show'}`} type="button" onClick={handleCancel} title="기본 이미지로 변경"></button>
                                    </div>
                                    <input id='loginImgInput' className='img_input' type="file" accept="image/*" multiple />

                                </div>
                            </ul>

                            <ul className="info_list">
                                <li className="list_item">
                                    <label className="item_tit" htmlFor="name">1. </label>
                                    <input type="text" name="menu" placeholder="메뉴이름" id="name" required />
                                </li>
                                <li className="list_item">
                                    <input type="text" name="price" placeholder="예상금액 (1인당 / 금액만 입력)" id="price" required />
                                </li>
                                <li className="list_item">
                                    <input type="text" name="url" placeholder="URL" id="adressurl" required />
                                </li>

                                <div className='list_pic' onChange={handleImageChange}>
                                    <div className='img_wrap'>
                                        <img className='list_img' src={image} alt="리스트 업로드 이미지" />
                                        <label htmlFor="loginImgInput" className='img_label'>
                                        </label>
                                        <button className={`img_delete ${!file ? '' : 'show'}`} type="button" onClick={handleCancel} title="기본 이미지로 변경"></button>
                                    </div>
                                    <input id='loginImgInput' className='img_input' type="file" accept="image/*" multiple />

                                </div>
                            </ul>
                        </div>
                        <div className="info_area" style={{display: "none"}}>
                            <input type="text" name="check" value={0} required />
                        </div>
                        <div className="info_area" style={{display: "none"}}>
                            <input type="text" name="username" value={userName} required />
                        </div>
                        <div className="info_area">
                            <p className="info_title">마감시간</p>
                            <ul className="info_list">
                                <li className="list_item">
                                    <select>
                                        <option>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                        <option>06</option>
                                        <option>07</option>
                                        <option>08</option>
                                        <option>09</option>
                                        <option>10</option>
                                        <option>11</option>
                                        <option>12</option>
                                        <option>13</option>
                                        <option>14</option>
                                        <option>15</option>
                                        <option>16</option>
                                        <option>17</option>
                                        <option>18</option>
                                        <option>19</option>
                                        <option>20</option>
                                        <option>21</option>
                                        <option>22</option>
                                        <option>23</option>
                                        <option>24</option>
                                    </select>
                                    <p>시</p>
                                    <select>
                                        <option>00</option>
                                        <option>01</option>
                                        <option>02</option>
                                        <option>03</option>
                                        <option>04</option>
                                        <option>05</option>
                                    </select>
                                    <p>분</p>
                                </li>
                            </ul>
                        </div>

                        <button type="submit" className="btn_submit">등록완료</button>
                    </form>
                    <button type="button" className="close_btn"><img src="/image/make/modal_close.png" /></button>
                </div>
            </div>
        </div>
    );
}
