import { FaHeart } from "react-icons/fa";
import { IoIosArrowDropdown } from "react-icons/io";
function Detail() {
  return (
    <section
      id="section"
      className="flex flex-col content-center justify-center items-center bg-customBG-white "
    >
      <div
        id="container"
        className="flex flex-col items-center justify-center content-center w-[700px] "
      >
        <div
          id="titleArea"
          className="flex items-center justify-between w-full mb-[10px]"
        >
          <div id="title" className="font-shinb">
            제목
          </div>
          <div id="dateArea" className="flex">
            <div id="dateInfo" className="flex ml-[5px]">
              <div id="dateText" className="font-shinb">
                년
              </div>
            </div>
            <div id="dateInfo" className="flex ml-[5px]">
              <div id="dateText" className="font-shinb">
                월
              </div>
            </div>
            <div id="dateInfo" className="flex ml-[5px]">
              <div id="dateText" className="font-shinb">
                일
              </div>
            </div>
            <div id="weather" className="font-shinb ml-[10px]"></div>
          </div>
        </div>
        <div
          id="imgArea"
          className="w-[700px] h-[480px] bg-slate-300 mb-[46px]"
        >
          <image></image>
        </div>
        <div
          id="diaryArea"
          className="bg-[#f1f1f1] w-[700px] h-fit py-[18px] px-[30px] rounded-[10px] mb-[26px]"
        >
          <div id="heartAndNickName" className="flex mb-4">
            <button className="border-none">
              <FaHeart color="#DF4949" />
            </button>
            <div
              id="nickname"
              className="text-[15px] font-bold ml-[5px] text-[#378686]"
            >
              nickName
            </div>
          </div>
          <div id="randomQuestion" className="text-[14px] mb-5">
            randomQuestion
          </div>
          <div id="diaryText" className="font-shinb text-sm leading-normal">
            diaryText
          </div>
        </div>
        <div id="placeAndPrice" className="w-[700px] flex">
          <div
            id="placeArea"
            className="inputContainer w-fit h-[34px] mr-6 text-xs"
          >
            <div>서울 </div>
            <div>동작구</div>
          </div>
          <div
            id="priceArea"
            className="inputContainer w-[164px] h-[34px] text-xs"
          >
            총 예산 :
          </div>
        </div>
        <div id="tagArea" className="w-[700px]"></div>
        <div
          id="buttonArea"
          className="flex flex-wrap justify-end items-center text-xs w-[700px] mb-[26px]"
        >
          <button className="text-xs text-[#afafaf] bg-customBG-white border-none outline-none">
            수정
          </button>
          <button>삭제</button>
        </div>
      </div>
      <div
        id="commentContainer"
        className="w-[700px] flex flex-col items-start justify-center content-center"
      >
        <div id="commentTitleArea" className="flex items-center">
          <div
            id="commentTitle"
            className="mr-[10px] my-4 ml-[18px] text-sm text-[#535353]"
          >
            댓글
          </div>
          <IoIosArrowDropdown color="#535353" size="22" />
        </div>
      </div>
    </section>
  );
}
export default Detail;
