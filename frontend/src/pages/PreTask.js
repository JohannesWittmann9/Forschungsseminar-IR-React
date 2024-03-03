import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const json = {
  title: "Pre Task Questionnaire",
  description:
    'This questionnaire is intended to gather information about what you think about "Work task". Therefore, help us in doing this research by answering the following questions.',
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "familiarity",
          title: "How familiar are you with the topic?",
          rateCount: 7,
          rateMax: 7,
          minRateDescription: "Not familiar",
          maxRateDescription: "Very familiar",
        },
        {
          type: "rating",
          name: "complexity",
          title:
            "How complex would you rate the task to be, just by reading it?",
          rateCount: 7,
          rateMax: 7,
          minRateDescription: "Not complex",
          maxRateDescription: "Very complex",
        },
      ],
      title: "",
      description: "",
    },
  ],
  showCompletedPage: false,
};

const PreTask = ({ task }) => {
  json.pages[0].title = task.title;
  json.pages[0].description = task.desc;

  const task_id = task.id;
  json.navigateToUrl = `/main/${task.id}`;

  const model = new Model(json);

  model.onComplete.add(function (sender, options) {
    // Save session ID to local storage
    const session_id = crypto.randomUUID();
    localStorage.setItem("sessionId", session_id);

    // Save session start time to local storage
    const session_start_time = new Date();
    localStorage.setItem("session_start_time", session_start_time);

    const user_id = localStorage.getItem("userId");
    const results = sender.data;

    options.showSaveInProgress();

    // send pre task data to backend
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:7000/api/pretasks");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
      if (xhr.status === 200) {
        options.showSaveSuccess();
      } else {
        options.showSaveError();
      }
    };
    xhr.send(JSON.stringify({ user_id, task_id, results }));
  });

  return <Survey model={model}></Survey>;
};

export default PreTask;
