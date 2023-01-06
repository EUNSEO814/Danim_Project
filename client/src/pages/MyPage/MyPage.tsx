import MyPageCard from "./MyPageCard";
import MyPageSearch from "./MyPageSearch";
// import Map from "./Map";

const MyPage = () => {
  return (
    <div
      id="myPageContainer"
      className="flex flex-col items-center justify-center bg-customBG-white "
    >
      <div id="userEditBox"></div>
      {/* <Map /> */}
      <MyPageSearch />
      <MyPageCard />
    </div>
  );
};

export default MyPage;
