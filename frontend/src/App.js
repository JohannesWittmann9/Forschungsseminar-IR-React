import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Consent from "./pages/Consent";
import PreStudy from "./pages/PreStudy";
import Introduction from "./pages/Introduction";
import React from "react";
import PostTask from "./pages/PostTask";
import PreTask from "./pages/PreTask";
import Main from "./pages/Main";
import PostStudy from "./pages/PostStudy";
import tasksData from "./tasks/tasks.json";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Consent />} />
          <Route path="/prestudy" element={<PreStudy />} />
          <Route path="/introduction" element={<Introduction />} />

          {tasksData.tasks.map((task) => (
            <React.Fragment key={task.id}>
              <Route
                path={`/pretask/${task.id}`}
                element={<PreTask task={task} />}
              />
              <Route path={`/main/${task.id}`} element={<Main task={task} />} />
              <Route
                path={`/posttask/${task.id}`}
                element={<PostTask task={task} tasks={tasksData.tasks} />}
              />
            </React.Fragment>
          ))}

          <Route path="/poststudy" element={<PostStudy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
