import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyList from "pages/MyList";
import "./styles/globals.css";
import Signup from "pages/Signup";
import Login from "pages/Login";
import Diary from "pages/Diary/Diary";
import Detail from "pages/Detail/Detail";
import DiaryEdit from "pages/DiaryEdit/DiaryEdit";
import MyPage from "pages/MyPage/MyPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/diaryedit" element={<DiaryEdit />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
