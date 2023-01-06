import { AiOutlineSearch } from "react-icons/ai";

const MyPageSearch = () => {
  return (
    <div className="flex flex-col w-[1000px] mt-[100px] ">
      <div className="w-[366px] h-fit py-[10px] px-5 rounded-[35px] shadow-md shadow-[#63aeae] my-[18px] flex items-center bg-white">
        <AiOutlineSearch color="#63aeae" size="20" />
        <input
          type="text"
          placeholder="지역을 입력해주세요."
          className="w-full ml-[5px] border-none outline-none text-sm"
        />
      </div>
    </div>
  );
};

export default MyPageSearch;
