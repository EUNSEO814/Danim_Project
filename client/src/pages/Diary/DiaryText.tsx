import { MdOutlineChangeCircle } from "react-icons/md";
function DiaryText() {
  return (
    <div className="inputContainer flex flex-col justify-start h-auto p-0 mb-[40px]">
      <div className="text-custom-text-gray w-full flex flex-row justify-between items-center content-center border-solid border-b border-b-[#63aeae] py-[25px] px-[32px]">
        <div className="text-custom-text-gray text-sm">Random Question :</div>
        <div className="flex items-center">
          <div className="mr-[5px]">1/3</div>
          <MdOutlineChangeCircle size="20" color="#63AEAE" />
        </div>
      </div>
      <div className="w-full py-[25px] px-[32px]">
        <textarea className="w-full h-[360px] text-custom-text-gray resize-none overflow-hidden outline-none border-none font-shinb fz-[16px] bg-inherit"></textarea>
      </div>
    </div>
  );
}
export default DiaryText;
