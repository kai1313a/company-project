'use client'

import 'animate.css';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Intro() {

    const router = useRouter();

    if (localStorage.getItem('users')) { //이미 user 정보가 있을 때ß
        router.push('/join')
    }


    //login시 localstorage에 저장
    const { register, getValues } = useForm();

    const onLoginBtnClick = () => {
        const user = getValues();
        if (localStorage.getItem('users')) { //이미 user 정보가 있을 때ß
            // const users = JSON.parse(localStorage.getItem('users') || '[]');
            // const allUsers = [...users, user]
            // localStorage.setItem('users', JSON.stringify(allUsers));
            
            // router.push('/join')
        } else { //user 정보가 없을 때
            localStorage.setItem('users', JSON.stringify(user));
            router.push('/join')
            
            setTimeout(()=> {
                localStorage.clear('users')
            }, 3000000)
            // 1시간 뒤에 스토리지 삭제
        }


        console.log('user info', user);

    }
   
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
        <div className='intro wrap'>

            <div className={`cover ${!visible ? 'off' : ''}`}>
                <h1 className='cover_title jua animate__animated animate__fadeIn'>우리 회사 건강한 식문화</h1>
                <div className='cover_wrap'>
                    <div className='cover_img_wrap cover_img_wrap01 animate__animated animate__zoomIn'>
                        <img className='cover_img cover_img01' src='./image/intro/intro-text01.png' alt='회' />
                        <img className='cover_img cover_img01-1 animate__animated animate__swing' src='./image/intro/intro-meal.png' alt='밥그릇' />
                    </div>
                    <div className='cover_img_wrap'>
                        <img className='cover_img cover_img02 animate__animated animate__zoomIn' src='./image/intro/intro-text02.png' alt='사' />
                        <img className='cover_img cover_img03 animate__animated animate__zoomIn' src='./image/intro/intro-text03.png' alt='세' />
                    </div>
                    <div className='cover_img_wrap cover_img_wrap03'>
                        <img className='cover_img cover_img04 animate__animated animate__zoomIn' src='./image/intro/intro-text04.png' alt='끼' />
                        <img className='cover_img cover_img04-1 animate__animated animate__fadeInDownBig' src='./image/intro/intro-tie.png' alt='넥타이' />
                    </div>
                </div>
            </div>

            <div className='login'>
                <h2 className='login_title'>프로필 사진과<br />닉네임을 등록해주세요.</h2>
                <div className='login_profile' onChange={handleImageChange}>
                    <div className='login_img_wrap' >
                        <img className='login_img' src={image} alt="프로필 이미지" />
                    </div>
                    <input
                        id='loginImgInput'
                        className='login_img_input'
                        type='file'
                        accept='image/*'
                        {...register('image')}
                    />
                    <label htmlFor='loginImgInput' className='login_img_label'></label>
                    <button className={`login_img_delete ${!file ? '' : 'show'}`} type="button" onClick={handleCancel} title="기본 이미지로 변경"></button>
                </div>
                <div className='login_name'>
                    <input
                        id='loginName'
                        className='login_name_input'
                        type='text'
                        placeholder='닉네임을 입력해주세요.'
                        {...register('loginName')}
                        required
                    />
                    <p className='login_name_check'>사용 가능한 닉네임 입니다.</p>
                </div>
                <button
                    className='login_btn'
                    type='button'
                    onClick={() => onLoginBtnClick()}>
                    입장하기
                </button>
            </div>
        </div>
    );
}






