import { useNavigate } from "react-router-dom";
import OpenAI from "../components/OpenAI";
import SearchEngine from "../components/SearchEngine";

const Main = ({ task }) => {
  const navigate = useNavigate();
  const session_id = localStorage.getItem("sessionId");
  const user_id = localStorage.getItem("userId");

  const interaction_id = crypto.randomUUID();

  const saveSessionData = async () => {
    const task_id = task.id;
    const session_start_time = localStorage.getItem("session_start_time");
    const session_end_time = new Date();

    try {
      console.log("Sending session data to the backend...");
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

      return response.ok;
    } catch (error) {
      console.error("An error occurred while saving session data:", error);
      return false;
    }
  };

  const saveChatInteraction = async () => {
    const interaction_type = "openai";
    const messages = sessionStorage.getItem(`messages-${interaction_id}`);

    try {
      console.log("Sending chat interaction data to the backend...");
      const response = await fetch(
        "http://localhost:7000/api/chatinteractions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            interaction_id,
            user_id,
            session_id,
            interaction_type,
            messages: JSON.parse(messages),
          }),
        }
      );

      return response.ok;
    } catch (error) {
      console.error(
        "An error occurred while saving chat interaction data:",
        error
      );
      return false;
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();

    const sessionSaved = await saveSessionData();
    const interactionSaved = await saveChatInteraction();

    if (sessionSaved && interactionSaved) {
      navigate(`/posttask/${task.id}`);
    } else {
      console.error(
        "Failed to save session or interaction data to the database"
      );
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
        <OpenAI interaction_id={interaction_id}/>
      </div>
    </div>
  );
};

export default Main;
