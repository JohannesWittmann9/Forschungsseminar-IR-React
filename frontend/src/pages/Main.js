import { useNavigate } from "react-router-dom";
import OpenAI from "../components/OpenAI";
import SearchEngine from "../components/SearchEngine";

const Main = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Button clicked");
    navigate("/posttask");
  };
  return (
    <div className="main-container">
      <div className="task">
        <p >
          Your brother complains of constant headaches. One night when his
          headache is accompanied by nausea, you go to the medical center with
          Daniel and find out that Daniel's blood pressure is 21. You want to
          know: what causes high blood pressure? What diseases raise blood
          pressure? What are the ways to control high blood pressure? Help your
          brother by gathering relevant information and refer him to a specialist.
        </p>
        <button className="continue-btn" onClick={handleClick}>Continue</button>
      </div>
      <div className="tools">
        <SearchEngine />
        <OpenAI />
      </div>
      
    </div>
  );
};

export default Main;
