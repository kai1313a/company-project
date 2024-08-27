export default function intro() {
    return (
        <div className="intro jua flex min-h-screen flex-col items-center justify-between p-24">
            <div className="cover">
                <h1 className="cover__title">우리 회사 건강한 식문화</h1>
                <div className="cover__wrap">
                    <div className="cover__img-wrap">
                        <img className="cover__img cover__img--01" src="./image/intro/intro-text01.png" alt="회"/>
                        <img className="cover__img cover__img--01-1" src="./image/intro/intro-meal.png" alt="밥그릇"/>
                    </div>
                    <img className="cover__img cover__img--02" src="./image/intro/intro-text02.png" alt="사"/>
                    <img className="cover__img cover__img--03" src="./image/intro/intro-text03.png" alt="세"/>
                    <div className="cover__img-wrap">
                        <img className="cover__img cover__img--04" src="./image/intro/intro-text04.png" alt="끼"/>
                        <img className="cover__img cover__img--04-1" src="./image/intro/intro-tie.png" alt="넥타이"/>
                    </div>
               </div>
            </div>
        </div>
    );
}
