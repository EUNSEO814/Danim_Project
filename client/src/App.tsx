import Main from "./pages/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyList from "pages/MyList";
import "./styles/globals.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mylist" element={<MyList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
