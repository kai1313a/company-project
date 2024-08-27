
export default function intro() {
    return (
        <div className="intro flex min-h-screen items-center justify-center">
            <div className="cover flex flex-col items-center justify-center">
                <h1 className="cover__title jua">우리 회사 건강한 식문화</h1>
                <div className="cover__wrap flex items-center justify-center">
                    <div className="cover__img-wrap">
                        <img className="cover__img cover__img--01" src="./image/intro/intro-text01.png" alt="회"/>
                        <img className="cover__img cover__img--01-1" src="./image/intro/intro-meal.png" alt="밥그릇"/>
                    </div>
                    <div className="cover__img-wrap">
                        <img className="cover__img cover__img--02" src="./image/intro/intro-text02.png" alt="사"/>
                        <img className="cover__img cover__img--03" src="./image/intro/intro-text03.png" alt="세"/>
                    </div>
                    <div className="cover__img-wrap">
                        <img className="cover__img cover__img--04" src="./image/intro/intro-text04.png" alt="끼"/>
                        <img className="cover__img cover__img--04-1" src="./image/intro/intro-tie.png" alt="넥타이"/>
                    </div>
               </div>
            </div>
        </div>
    );
}
