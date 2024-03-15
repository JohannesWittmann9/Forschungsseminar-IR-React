import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { postDataToServer } from "utils/utils";

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
          isRequired: true,
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
          isRequired: true,
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

  model.onComplete.add(async function (sender, options) {
    // Save session ID to local storage
    const session_id = crypto.randomUUID();
    localStorage.setItem("sessionId", session_id);

    // Save session start time to local storage
    const session_start_time = new Date();
    localStorage.setItem("session_start_time", session_start_time);

    const user_id = localStorage.getItem("userId");
    const results = sender.data;

    options.showSaveInProgress();

    try {
      const preTaskUrl = "http://localhost:7000/api/pretasks";
      await postDataToServer(preTaskUrl, {
        user_id,
        task_id,
        results,
      });
      options.showSaveSuccess();
    } catch (error) {
      options.showSaveError();
      console.error("An error occurred:", error);
    }
  });

  return <Survey model={model}></Survey>;
};

export default PreTask;
