// import { TagsInput } from "react-tag-input-component";
import "./tag.css";
function DiaryHashtag() {
  return (
    <div className="inputContainer w-full h-fit mb-10">
      <span className="whitespace-nowrap">해시태그 :</span>
      <div className="ml-[10px] w-full">
        {/* <TagsInput name="HashTag" placeHolder="태그를 입력해주세요." /> */}
      </div>
    </div>
  );
}
export default DiaryHashtag;
