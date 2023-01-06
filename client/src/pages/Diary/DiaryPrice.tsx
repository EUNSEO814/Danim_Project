import { BiWon } from "react-icons/bi";
function DiaryPrice() {
  return (
    <div className="inputContainer w-[216px] h-[55px] mb-10">
      <span className="whitespace-nowrap">경비 :</span>
      <input
        className="outline-none border-none bg-inherit w-[70%] text-right appearance-none"
        type="number"
      />
      <BiWon />
    </div>
  );
}
export default DiaryPrice;
