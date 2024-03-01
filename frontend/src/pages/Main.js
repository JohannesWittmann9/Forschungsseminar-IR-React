import { useNavigate } from "react-router-dom";
import OpenAI from "../components/OpenAI";
import SearchEngine from "../components/SearchEngine";

const Main = ({task}) => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Button clicked");
    navigate(`/posttask/${task.id}`);
  };
  return (
    <div className="main-container">
      <div className="task">
        <p>
          {task.desc}
        </p>
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
