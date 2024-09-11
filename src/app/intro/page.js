'use client'

import 'animate.css';
import { useState, useEffect, useRef } from 'react';

export default function intro() {

    const defaultImageUrl = '/image/intro/profile-common.png'; //기본 이미지 경로
    
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

    // cover 나타났다가 사라지게 하는 함수
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3200);

        return () => clearTimeout(timer);
    }, []);
    
    return (
        <div className='intro wrap min-h-screen items-center'>
           
            <div className={`cover flex-col items-center justify-center ${!visible ? 'off' : ''}`}>
                <h1 className='cover__title jua animate__animated animate__fadeIn'>우리 회사 건강한 식문화</h1>
                <div className='cover__wrap items-center justify-center'>
                    <div className='cover__img-wrap cover__img-wrap--01 animate__animated animate__zoomIn'>
                        <img className='cover__img cover__img--01' src='./image/intro/intro-text01.png' alt='회'/>
                        <img className='cover__img cover__img--01-1 absolute animate__animated animate__swing' src='./image/intro/intro-meal.png' alt='밥그릇'/>
                    </div>
                    <div className='cover__img-wrap'>
                        <img className='cover__img cover__img--02 animate__animated animate__zoomIn' src='./image/intro/intro-text02.png' alt='사'/>
                        <img className='cover__img cover__img--03 animate__animated animate__zoomIn' src='./image/intro/intro-text03.png' alt='세'/>
                    </div>
                    <div className='cover__img-wrap cover__img-wrap--03'>
                        <img className='cover__img cover__img--04 absolute animate__animated animate__zoomIn' src='./image/intro/intro-text04.png' alt='끼'/>
                        <img className='cover__img cover__img--04-1 absolute animate__animated animate__fadeInDownBig' src='./image/intro/intro-tie.png' alt='넥타이'/>
                    </div>
               </div>
            </div>

            <div className='login'>
                <h2 className='login__title text-6xl eㄷ다'>프로필 사진과<br/>닉네임을 등록해주세요.</h2>
                <div className='login__profile' onChange={handleImageChange}>
                    <div className='login__img-wrap' >
                        <img className='login__img' src={image} alt="프로필 이미지"/>
                    </div>
                    <input id='loginImgInput' className='login__img-input' type="file" accept="image/*"/>
                    <label htmlFor="loginImgInput" className='login__img-label'></label>
                    <button className={`login__img-delete ${!file ? '' : 'show'}`} type="button" onClick={handleCancel} title="기본 이미지로 변경"></button>
                </div>
                <div className='login__name'>
                    <input className='login__name-input' type='text' placeholder='닉네임을 입력해주세요.'></input>
                    <p className='login__name-check'>사용 가능한 닉네임 입니다.</p>
                </div>
                <button className='login__btn'>입장하기</button>
            </div>

        
        </div>
    );
}






