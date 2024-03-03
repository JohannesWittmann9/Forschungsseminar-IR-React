import { useNavigate } from "react-router-dom";
import OpenAI from "../components/OpenAI";
import SearchEngine from "../components/SearchEngine";

const Main = ({ task }) => {
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();
    const session_id = localStorage.getItem("sessionId");
      const user_id = localStorage.getItem("userId");
      const task_id = task.id;
      const session_start_time = localStorage.getItem("session_start_time");
      const session_end_time = new Date();

    try {
      // Send session data to the backend
      console.log("Sending request to backend...");
      const response = await fetch("http://localhost:7000/api/sessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          session_id,
          user_id,
          task_id,
          session_start_time,
          session_end_time,
        }),
      });

      if (response.ok) {
        // If the request was successful, navigate to the next page
        navigate(`/posttask/${task_id}`);
      } else {
        // Handle errors appropriately
        console.error("Failed to save session to the database");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div className="main-container">
      <div className="task">
        <p>{task.desc}</p>
        <button className="continue-btn" onClick={handleClick}>
          Continue
        </button>
      </div>
      <div className="tools">
        <SearchEngine />
        <OpenAI />
      </div>
    </div>
  );
};

export default Main;
