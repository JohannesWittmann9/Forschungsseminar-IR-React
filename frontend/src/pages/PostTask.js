import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const json = {
  "title": "Post Task Questionnnaire",
  "description": "Please answer the following questions based on your search. Thank you for your effort!",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "comment",
      "name": "answer",
      "title": "If you had to, what would be your answer to the question?"
     },
     {
      "type": "rating",
      "name": "complexity-rate",
      "title": "How complex would you rate the task now?",
      "rateCount": 7,
      "rateMax": 7,
      "minRateDescription": "Not complex",
      "maxRateDescription": "Very complex"
     },
     {
      "type": "rating",
      "name": "satisfaction-rate",
      "title": "How satisfied are you with your search result?",
      "rateCount": 7,
      "rateMax": 7,
      "minRateDescription": "Not satisfied",
      "maxRateDescription": "Very satisfied"
     },
     {
      "type": "radiogroup",
      "name": "question3",
      "title": "It is important that you pay attention in this study. Please tick 'Okay'. (Yes, No, Okay)",
      "choices": [
       {
        "value": "Item 1",
        "text": "Yes"
       },
       {
        "value": "Item 2",
        "text": "No"
       },
       {
        "value": "Item 3",
        "text": "Okay"
       }
      ]
     }
    ],
    "title": "Task 1:",
    "description": "Your brother complains of constant headaches. One night when his headache is accompanied by nausea, you go to the medical center with him and find out that his blood pressure is 120. You want to know: what causes high blood pressure? What diseases raise blood pressure? What are the ways to control high blood pressure?"
   }
  ],
  "showCompletedPage": false,
  "navigateToUrl": "/poststudy"
 }

const PostTask = () => {
  const model = new Model(json);
  return <Survey model={model}></Survey>;
};

export default PostTask;
