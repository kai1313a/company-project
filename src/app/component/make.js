'use client';

import { Input } from "postcss";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from 'react';
import ProductImage from './productImage/productImage.js';


export default function Make() {

    const [productImg, setproductImg] = useState("../../../image/make/upload_basic.png");

    const convertDataURLToFile = async (dataURL, fileName) => {
        const response = await axios.get(dataURL, {
            responseType: "blob",
        })

        const blob = response.data;

        const profileImgFile = new File([blob], fileName, { type: blob.type});

        return profileImgFile;

    }

    const onCLickSubmitBtn = async () => {
        const formData = new FormData()

        if(productImg) {
            console.log("파일 객체로 변한 전 이미지", productImg);

            const profileImgFile = await convertDataURLToFile(
                productImg,
                `productImg`
            );

            FormData.append("image", profileImgFile);
            console.log("파일 객체로 변환 후 이미지", profileImgFile);
            
        }

        try {
            const response = await axios.post(
                `mongodb+srv://admin:dnstjq13@unseop.be9440o.mongodb.net/teamproject`,
                formData,
                {
                    headers: {
                        "Content-Type" : "multipart/form-data",
                        "ngrok-skip-browser-warning": "69420",
                    }
                }
            )
            console.log(response);
            
        } catch (error) {
            console.log(error);
            
        }

    }



    const [selectedOption, setselectedOption] = useState('');
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
                            <ul className="info_list info_list_add">
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

                                {/* <div className='list_pic'>
                                    <ProductImage
                                        productImg={productImg}
                                        setproductImg={setproductImg}
                                    />

                                </div> */}
                            </ul>

                            <ul className="info_list info_list_add">
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

                                {/* <div className='list_pic'>
                                    <productImage
                                        productImg={productImg}
                                        setproductImg={setproductImg}
                                    />

                                </div> */}
                            </ul>

                            <button type="button" className="add_btn"><img src="../../../image/make/list_add_ico.png" /></button>
                        </div>
                        <div className="info_area" style={{display: "none"}}>
                            <input type="text" name="check" value={0} required />
                        </div>
                        <div className="info_area" style={{display: "none"}}>
                            <input type="text" name="username" value={userName} required />
                        </div>
                        <div className="info_area" style={{display: "none"}}>
                            <input type="text" name="date" value={true} required />
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
                    <button type="button" className="close_btn"><img src="../../../image/make/modal_close.png" /></button>
                </div>
            </div>
        </div>
    );
}
