const MyPageCard = () => {
  return (
    <ul id="cardContainer" className="w-[1000px] grid grid-cols-5">
      <li>
        <div className="relative w-[155px] h-[155px] rounded-[35px] shadow-lg duration-300 hover:scale-110">
          <img
            className="w-full h-full relative rounded-[35px] bg-contain bg-no-repeat backdrop-blur-sm backdrop-brightness-90"
            alt="cardImg"
            src="https://cdn.pixabay.com/photo/2022/12/29/13/42/winter-7684976_960_720.jpg"
          ></img>
          <div
            id="textArea"
            className="absolute inset-0 flex flex-col items-center justify-center "
          >
            <h2
              id="city"
              className="text-[#fbfbfb] text-xl font-bold drop-shadow-lg shadow-black "
            >
              전주
            </h2>
            <div
              id="dateInfo"
              className="text-base text-[#fbfbfb] drop-shadow-lg shadow-black"
            >
              2023.01.01
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default MyPageCard;
