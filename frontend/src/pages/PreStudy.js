import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const json = {
  "title": "Pre Study Questionnaire",
  "description": "The present questionnaire has been prepared in order to collect general information about participants' search behaviors.",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "rating",
      "name": "search-engine-usage",
      "title": "I use search systems (such as Google or Bing) to help answer questions and concerns on a daily basis",
      "rateCount": 7,
      "rateMax": 7,
      "minRateDescription": "Strongly disagree",
      "maxRateDescription": "Strongly agree"
     },
     {
      "type": "rating",
      "name": "Ai-copilots-usage",
      "title": "I use AI copilots (such as ChatGPT or BingAI) to help answer questions and concerns on a daily basis",
      "rateCount": 7,
      "rateMax": 7,
      "minRateDescription": "Strongly disagree",
      "maxRateDescription": "Strongly agree"
     },
     {
      "type": "radiogroup",
      "name": "onl-search-freq",
      "title": "On average, how often do you use search systems to answer information needs?",
      "choices": [
       {
        "value": "Item 1",
        "text": "Never"
       },
       {
        "value": "Item 2",
        "text": "Once per week"
       },
       {
        "value": "Item 3",
        "text": "Multiple times per week"
       },
       {
        "value": "Item 4",
        "text": "Once per day"
       },
       {
        "value": "Item 5",
        "text": "Multiple times per day"
       }
      ]
     },
     {
      "type": "radiogroup",
      "name": "ai-search-freq",
      "title": "On average, how often do you use AI copilots to answer information needs?",
      "choices": [
       {
        "value": "Item 1",
        "text": "Never"
       },
       {
        "value": "Item 2",
        "text": "Once per week"
       },
       {
        "value": "Item 3",
        "text": "Multiple times per week"
       },
       {
        "value": "Item 4",
        "text": "Once per day"
       },
       {
        "value": "Item 5",
        "text": "Multiple times per day"
       }
      ]
     }
    ]
   }
  ],
  "showCompletedPage": false,
  "navigateToUrl": "/introduction"
 }

const PreStudy = () => {
  const model = new Model(json);
  return <Survey model={model}></Survey>;
};

export default PreStudy;
