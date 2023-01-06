import DiaryEditHashtag from "./DiaryEditHashtag";
import DiaryEditImg from "./DiaryEditImg";
import DiaryEditPlace from "./DiaryEditPlace";
import DiaryEditPrice from "./DiaryEditPrice";
import DiaryEditText from "./DiaryEditText";
import DiaryEditTitle from "./DiaryEditTitle";

function DiaryEdit() {
  return (
    <section
      id="section"
      className="flex flex-col content-center justify-center items-center bg-customBG-white pt-90 text-sm"
    >
      <form id="container" className="w-[700px]">
        <DiaryEditTitle />
        <DiaryEditImg />
        <DiaryEditText />
        <DiaryEditPrice />
        <DiaryEditPlace />
        <DiaryEditHashtag />
        <div className="flex flex-wrap justify-end items-center">
          <button className="h-[30px] w-fit custom-text-gray bg-white border border-solid border-[#91E8E8] rounded-[35px] text-xs px-[26px] cursor-pointer hover:bg-[#F4F6F6] active:bg-[#F4F6F6] mr-5">
            수정
          </button>
          <button>취소</button>
        </div>
      </form>
    </section>
  );
}
export default DiaryEdit;
