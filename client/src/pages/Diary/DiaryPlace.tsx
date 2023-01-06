function DiaryPlace() {
  return (
    <div className="flex items-end justify-start mb-10">
      <div className="inputContainer w-[341px] h-[55px]">
        <span className="whitespace-nowrap">다녀온 지역 :</span>
        <div className="ml-[10px] w-full">
          <select className="outline-none border-none mr-2 text-sm bg-inherit">
            <option></option>
          </select>
          <select className="outline-none border-none mr-2 text-sm bg-inherit">
            <option></option>
          </select>
        </div>
      </div>
    </div>
  );
}
export default DiaryPlace;
