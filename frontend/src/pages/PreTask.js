import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const json = {
  "title": "Pre Task Questionnaire",
  "description": "This questionnaire is intended to gather information about what you think about \"Work task\". Therefore, help us in doing this research by answering the following questions.",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "rating",
      "name": "familiarity",
      "title": "How familiar are you with the topic?",
      "rateCount": 7,
      "rateMax": 7,
      "minRateDescription": "Not familiar",
      "maxRateDescription": "Very familiar"
     },
     {
      "type": "rating",
      "name": "complexity",
      "title": "How complex would you rate the task to be, just by reading it?",
      "rateCount": 7,
      "rateMax": 7,
      "minRateDescription": "Not complex",
      "maxRateDescription": "Very complex"
     }
    ],
    "title": "Task 1:",
    "description": "Your brother complains of constant headaches. One night when his headache is accompanied by nausea, you go to the medical center with him and find out that his blood pressure is 120. You want to know: what causes high blood pressure? What diseases raise blood pressure? What are the ways to control high blood pressure?"
   }
  ],
  "showCompletedPage": false,
  "navigateToUrl": "/main"
 }

const PreTask = () => {
  const model = new Model(json);
  return <Survey model={model}></Survey>;
};

export default PreTask;
