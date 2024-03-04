import { useNavigate } from "react-router-dom";
import OpenAI from "../components/OpenAI";
import SearchEngine from "../components/SearchEngine";
import { postDataToServer } from "utils/utils";

const Main = ({ task }) => {
  const navigate = useNavigate();
  const session_id = localStorage.getItem("sessionId");
  const user_id = localStorage.getItem("userId");
  const interaction_id = crypto.randomUUID();

  const saveSessionData = async () => {
    const task_id = task.id;
    const session_start_time = localStorage.getItem("session_start_time");
    const session_end_time = new Date();

    const sessionUrl = "http://localhost:7000/api/sessions";
    await postDataToServer(sessionUrl, {
      session_id,
      user_id,
      task_id,
      session_start_time,
      session_end_time,
    });
  };

  const saveChatInteraction = async () => {
    const interaction_type = "openai";
    const messages = sessionStorage.getItem(`messages-${interaction_id}`);

    const chatUrl = "http://localhost:7000/api/chatinteractions";
    await postDataToServer(chatUrl, {
      interaction_id,
      user_id,
      session_id,
      interaction_type,
      messages: JSON.parse(messages),
    });
  };

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      await saveSessionData();
      await saveChatInteraction();
      navigate(`/posttask/${task.id}`);
    } catch (error) {
      console.error(error);
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
        <OpenAI interaction_id={interaction_id} />
      </div>
    </div>
  );
};

export default Main;
