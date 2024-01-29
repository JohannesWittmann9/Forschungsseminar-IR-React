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
      "type": "radiogroup",
      "name": "task-exp",
      "title": "Please comment on this task:",
      "choices": [
       {
        "value": "Item 1",
        "text": "I have dealt with this type of work tasks many times."
       },
       {
        "value": "Item 2",
        "text": "I have done this type of work task before."
       },
       {
        "value": "Item 3",
        "text": "This is the first time I have done this type of work task."
       }
      ]
     },
     {
      "type": "matrix",
      "name": "prio-knowledge",
      "title": "Please comment on the following items.",
      "columns": [
       {
        "value": "Column 1",
        "text": "Very Low"
       },
       {
        "value": "Column 2",
        "text": "A Little"
       },
       {
        "value": "Column 3",
        "text": "Neither much nor little"
       },
       {
        "value": "Column 4",
        "text": "Much"
       },
       {
        "value": "Column 5",
        "text": "Very Much"
       }
      ],
      "rows": [
       {
        "value": "Row 3",
        "text": "How much do you know about the subject of this work task?"
       },
       {
        "value": "Row 4",
        "text": "How much do you know about the process of doing this work task?"
       },
       {
        "value": "Row 5",
        "text": "How complex do you think this work task is?"
       }
      ]
     }
    ],
    "title": "Task 1:",
    "description": "Your brother complains of constant headaches. One night when his headache is accompanied by nausea, you go to the medical center with Daniel and find out that Daniel's blood pressure is 21. You want to know: what causes high blood pressure? What diseases raise blood pressure? What are the ways to control high blood pressure? Help your brother by gathering relevant information and refer him to a specialist."
   }
  ],
  "navigateToUrl": "/main"
 }

const PreTask = () => {
  const model = new Model(json);
  return <Survey model={model}></Survey>;
};

export default PreTask;
