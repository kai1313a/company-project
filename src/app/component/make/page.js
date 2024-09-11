import { Input } from "postcss";
import Image from "next/image";

export default function make() {

    return (
      <div className="sec_make">
        <div className="inner">
            <form action="/api/post/new" method="POST">
                <div className="info_area">
                    <p className="info_title">방정보</p>
                    <ul className="info_list">
                        <li className="list_item">
                            <label className="item_tit" for="title"></label>
                            <input type="text" placeholder="방제목" id="title" required/>
                        </li>
                        <li className="list_item">
                            <label className="item_tit" for="tag"></label>
                            <input type="text" placeholder="#태그 (5개까지 입력)" id="tag" required/>
                        </li>
                    </ul>
                </div>
                <div className="info_area">
                    <p className="info_title">메뉴등록</p>
                    <ul className="info_list">
                        <li className="list_item">
                            <label className="item_tit" for="name">1.</label>
                            <input type="text" placeholder="메뉴이름" id="name" required/>
                        </li>
                        <li className="list_item">
                            <label className="item_tit" for="price"></label>
                            <input type="text" placeholder="예상금액" id="price" required/>
                        </li>
                        <li className="list_item">
                            <label className="item_tit" for="adressurl"></label>
                            <input type="text" placeholder="URL" id="adressurl" required/>
                        </li>
                        {/* <a href="#" >
                            <Image  width={150} height={150} alt="프로필 이미지" />
    	                </a>
                    
                        <label htmlFor="input-file" >이미지 선택</label> */}

                        <input type="file" name="image_URL" id="input-file" accept='image/*'/>
                    </ul>
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
                        <li className="list_item">
                            <label className="item_tit" for="roomtag"></label>
                            <input type="text" placeholder="예상금액" id="roomtag" required/>
                        </li>
                        <li className="list_item">
                            <label className="item_tit" for="roomtag"></label>
                            <input type="text" placeholder="URL" id="roomtag" required/>
                        </li>
                    </ul>
                </div>
                
                <button type="submit" className="btn_submit">등록완료</button>
            </form>
            <button type="button"><image src=""/></button>
        </div>
      </div>
    );
  }
  