import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const json = {
  title: "Pre Study Questionnaire",
  description:
    "The present questionnaire has been prepared in order to collect general information about participants' search behaviors.",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "rating",
          name: "search-engine-usage",
          title:
            "I use search systems (such as Google or Bing) to help answer questions and concerns on a daily basis",
          rateCount: 7,
          rateMax: 7,
          minRateDescription: "Strongly disagree",
          maxRateDescription: "Strongly agree",
        },
        {
          type: "rating",
          name: "Ai-copilots-usage",
          title:
            "I use AI copilots (such as ChatGPT or BingAI) to help answer questions and concerns on a daily basis",
          rateCount: 7,
          rateMax: 7,
          minRateDescription: "Strongly disagree",
          maxRateDescription: "Strongly agree",
        },
        {
          type: "radiogroup",
          name: "onl-search-freq",
          title:
            "On average, how often do you use search systems to answer information needs?",
          choices: [
            {
              value: "Never",
              text: "Never",
            },
            {
              value: "Once per week",
              text: "Once per week",
            },
            {
              value: "Multiple times per week",
              text: "Multiple times per week",
            },
            {
              value: "Once per day",
              text: "Once per day",
            },
            {
              value: "Multiple times per day",
              text: "Multiple times per day",
            },
          ],
        },
        {
          type: "radiogroup",
          name: "ai-search-freq",
          title:
            "On average, how often do you use AI copilots to answer information needs?",
          choices: [
            {
              value: "Never",
              text: "Never",
            },
            {
              value: "Once per week",
              text: "Once per week",
            },
            {
              value: "Multiple times per week",
              text: "Multiple times per week",
            },
            {
              value: "Once per day",
              text: "Once per day",
            },
            {
              value: "Multiple times per day",
              text: "Multiple times per day",
            },
          ],
        },
      ],
    },
  ],
  showCompletedPage: false,
  navigateToUrl: "/introduction",
};

const PreStudy = () => {
  const model = new Model(json);

  model.onComplete.add(function (sender, options) {
    // Display the "Saving..." message (pass a string value to display a custom message)
    const user_id = localStorage.getItem("userId");
    const results = sender.data;

    options.showSaveInProgress();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:7000/api/prestudies");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
      if (xhr.status === 200) {
        // Display the "Success" message (pass a string value to display a custom message)
        options.showSaveSuccess();
      } else {
        // Display the "Error" message (pass a string value to display a custom message)
        options.showSaveError();
      }
    };
    xhr.send(JSON.stringify({ user_id, results }));
  });
  
  return <Survey model={model}></Survey>;
};

export default PreStudy;
