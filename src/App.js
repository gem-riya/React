import "./App.css";
import Signup from "./Quiz/Signup";
import Login from "./Quiz/Login";
import Home from "./Quiz/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuestionUpload from "./Quiz/QuestionUpload";
import Show from "./Quiz/Show";
import TakeQuiz from "./Quiz/TakeQuiz";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route
          exact
          path="/home/QuestionsUpload"
          element={<QuestionUpload />}
        ></Route>
        <Route exact path="/home/show" element={<Show />}></Route>
        <Route path="/home/show/takeQuiz" element={<TakeQuiz />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
