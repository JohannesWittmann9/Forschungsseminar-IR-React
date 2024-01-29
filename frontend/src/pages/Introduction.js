import { useNavigate } from "react-router-dom";

const Introduction = () => {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    console.log("Button clicked");
    navigate("/pretask");
  };

  return (
    <div className="container protocol">
      <h2>Study Protocol</h2>
      <p>Dear participant,</p>
      <p>
        In this experiment, you will be given 4 work tasks. You will be asked to
        search for information for each of these work tasks. In this regard, you
        are free to choose an information system (eg normal search engine or
        generative AI) that provides useful that provides useful information for
        the task at hand. In summary, the process of performing this test is:
      </p>
      <ol className="procedure-list">
        <li>
          Select the system that you feel is suitable for doing the work task
          and start the search
        </li>
        <li>
          During the search you can switch between two search systems whenever
          you want
        </li>
        <li>
          You may find information that you think are useful for doing the work
          task at hand
        </li>
        <li>
          Choose a way to save them for future use, such as: save, take notes,
          and so on.
        </li>
      </ol>
      <p>
        If you have any questions about the testing process, please ask before
        testing.
      </p>
      <p>
        <strong>Best wishes</strong>
      </p>
      <button className="continue-btn" onClick={handleClick}>
        Continue
      </button>
    </div>
  );
};

export default Introduction;
