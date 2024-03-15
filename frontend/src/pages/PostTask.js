import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { postDataToServer } from "utils/utils";

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
          isRequired: true,
        },
        {
          type: "rating",
          name: "complexity-rate",
          title: "How complex would you rate the task now?",
          isRequired: true,
          rateCount: 7,
          rateMax: 7,
          minRateDescription: "Not complex",
          maxRateDescription: "Very complex",
        },
        {
          type: "radiogroup",
          name: "result-system",
          title: "What information retrieval system did your answer come from?",
          isRequired: true,
          choices: [
            {
              value: "Normal search engine (Google)",
              text: "Normal search engine (Google)",
            },
            {
              value: "Generative AI (ChatGPT)",
              text: "Generative AI (ChatGPT)",
            },
            {
              value: "Both Google and ChatGPT",
              text: "Both Google and ChatGPT",
            },
          ],
        },
        {
          type: "rating",
          name: "satisfaction-rate",
          title: "How satisfied are you with your search result?",
          isRequired: true,
          rateCount: 7,
          rateMax: 7,
          minRateDescription: "Not satisfied",
          maxRateDescription: "Very satisfied",
        },
        {
          type: "radiogroup",
          name: "attention",
          title:
            "It is important that you pay attention in this study. Please tick 'Okay'. (Yes, No, Okay)",
          isRequired: true,
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

  model.onComplete.add(async function (sender, options) {
    const user_id = localStorage.getItem("userId");
    const results = sender.data;

    options.showSaveInProgress();

    try {
      const postTaskUrl = "http://localhost:7000/api/posttasks";
      await postDataToServer(postTaskUrl, {
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

export default PostTask;
