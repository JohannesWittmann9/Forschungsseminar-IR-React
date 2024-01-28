import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import PostStudy from "./pages/PostStudy";
import PreStudy from "./pages/PreStudy";
import Introduction from "./pages/Introduction";
import PostTask from "./pages/PostTask";
import PreTask from "./pages/PreTask";
import Consent from "./pages/Consent";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Consent />} />
          <Route path="/prestudy" element={<PreStudy />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/pretask" element={<PreTask />} />
          <Route path="/main" element={<Main />} />
          <Route path="/posttask" element={<PostTask />} />
          <Route path="/poststudy" element={<PostStudy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
