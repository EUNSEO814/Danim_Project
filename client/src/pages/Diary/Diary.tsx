import DiaryTitle from "./DiaryTitle";
import DiaryImg from "./DiaryImg";
import DiaryText from "./DiaryText";
import DiaryPrice from "./DiaryPrice";
import DiaryPlace from "./DiaryPlace";
import DiaryHashtag from "./DiaryHashtag";

// import { useState } from "react";

function Diary() {
  // const [tags, setTags] = useState();
  return (
    <section
      id="section"
      className="flex flex-col content-center justify-center items-center bg-customBG-white pt-90 text-sm"
    >
      <form id="container" className="w-[700px]">
        <DiaryTitle />
        <DiaryImg />
        <DiaryText />
        <DiaryPrice />
        <DiaryPlace />
        <DiaryHashtag />
        <div className="flex flex-wrap justify-end items-center">
          <button className="h-[30px] w-fit custom-text-gray bg-white border border-solid border-[#91E8E8] rounded-[35px] text-xs px-[26px] cursor-pointer hover:bg-[#F4F6F6] active:bg-[#F4F6F6] mr-5">
            등록
          </button>
          <button>취소</button>
        </div>
      </form>
    </section>
  );
}
export default Diary;
