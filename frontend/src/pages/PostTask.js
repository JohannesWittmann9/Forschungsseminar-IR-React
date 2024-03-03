import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const json = {
  title: "Post Task Questionnnaire",
  description:
    "Please answer the following questions based on your search. Thank you for your effort!",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "comment",
          name: "answer",
          title: "If you had to, what would be your answer to the question?",
        },
        {
          type: "rating",
          name: "complexity-rate",
          title: "How complex would you rate the task now?",
          rateCount: 7,
          rateMax: 7,
          minRateDescription: "Not complex",
          maxRateDescription: "Very complex",
        },
        {
          type: "rating",
          name: "satisfaction-rate",
          title: "How satisfied are you with your search result?",
          rateCount: 7,
          rateMax: 7,
          minRateDescription: "Not satisfied",
          maxRateDescription: "Very satisfied",
        },
        {
          type: "radiogroup",
          name: "question3",
          title:
            "It is important that you pay attention in this study. Please tick 'Okay'. (Yes, No, Okay)",
          choices: [
            {
              value: "Yes",
              text: "Yes",
            },
            {
              value: "No",
              text: "No",
            },
            {
              value: "Okay",
              text: "Okay",
            },
          ],
        },
      ],
      title: "",
      description: "",
    },
  ],
  showCompletedPage: false,
};

const sendPostTaskData = (user_id, task_id, results, options) => {
  const postTaskXHR = new XMLHttpRequest();
  postTaskXHR.open("POST", "http://localhost:7000/api/posttasks");
  postTaskXHR.setRequestHeader(
    "Content-Type",
    "application/json; charset=utf-8"
  );
  postTaskXHR.onload = postTaskXHR.onerror = function () {
    if (postTaskXHR.status === 200) {
      options.showSaveSuccess();
    } else {
      options.showSaveError();
    }
  };
  postTaskXHR.send(JSON.stringify({ user_id, task_id, results }));
};

const PostTask = ({ task, tasks }) => {
  json.pages[0].title = task.title;
  json.pages[0].description = task.desc;

  const task_id = task.id;
  const currentIndex = tasks.findIndex((t) => t.id === task_id);

  if (currentIndex !== -1 && currentIndex + 1 < tasks.length) {
    const nextTask = tasks[currentIndex + 1];
    json.navigateToUrl = `/pretask/${nextTask.id}`;
  } else {
    json.navigateToUrl = "/poststudy";
  }

  const model = new Model(json);

  model.onComplete.add(function (sender, options) {
    const user_id = localStorage.getItem("userId");
    const results = sender.data;

    options.showSaveInProgress();

    sendPostTaskData(user_id, task_id, results, options);
  });
  return <Survey model={model}></Survey>;
};

export default PostTask;
