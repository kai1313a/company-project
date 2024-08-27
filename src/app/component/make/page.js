
export default function make() {

    return (
      <div className="sec_make">
        <div className="inner">
            <form action="/api/post/new" method="POST">
                <div className="info_area">
                    <p className="info_title">방정보</p>
                    <ul className="info_list">
                        <li className="list_item">
                            <label className="item_tit" for="roomtitle">방제목</label>
                            <input type="text" placeholder="방제목" id="roomtitle" required/>
                        </li>
                        <li className="list_item">
                            <label className="item_tit" for="managerName">담당자명 <em className="fc_blue">*</em></label>
                            <input type="text" placeholder="홍길동" id="managerName" required/>
                        </li>
                    </ul>
                </div>
                
                <button type="submit" className="btn_submit">SUBMIT</button>
            </form>
        </div>
      </div>
    );
  }
  