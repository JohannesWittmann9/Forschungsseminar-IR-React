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
      "name": "computer-exp",
      "title": "How would you describe your experience in using a computer?",
      "minRateDescription": "Very Low",
      "maxRateDescription": "Very Much"
     },
     {
      "type": "rating",
      "name": "internet-exp",
      "title": "How would you describe your experience in using the Internet?",
      "minRateDescription": "Very Low",
      "maxRateDescription": "Very Much"
     },
     {
      "type": "rating",
      "name": "computer-skill",
      "title": "Please indicate your skill level in using the computer.",
      "minRateDescription": "Novice",
      "maxRateDescription": "Professional"
     },
     {
      "type": "radiogroup",
      "name": "onl-search-freq",
      "title": "How often do you search for information online?",
      "choices": [
       {
        "value": "Item 1",
        "text": "Several times a day"
       },
       {
        "value": "Item 2",
        "text": "About once a day"
       },
       {
        "value": "Item 3",
        "text": "3-5 days a week"
       },
       {
        "value": "Item 4",
        "text": "Less often"
       }
      ]
     },
     {
      "type": "rating",
      "name": "internet-skill",
      "title": "Please indicate your skill level in information searching on the Internet.",
      "minRateDescription": "Novice",
      "maxRateDescription": "Professional"
     },
     {
      "type": "rating",
      "name": "se-exp",
      "title": "How experienced are you in search engines (like Yahoo, Google, Bing etc.)?",
      "minRateDescription": "Very Low",
      "maxRateDescription": "Very Much"
     },
     {
      "type": "rating",
      "name": "web-search-freq",
      "title": "How often do you find the information you need in a web search?",
      "minRateDescription": "Rarely",
      "maxRateDescription": "Always"
     }
    ],
    "title": "Online information behaviours"
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "boolean",
      "name": "LLM-integration",
      "title": "Do you integrate any Large Language Models (ChatGPT, BingAI) into your search process?"
     },
     {
      "type": "rating",
      "name": "LLM-exp",
      "title": "How experienced are you in searching with Large Language Models (ChatGPT, BingAI)?",
      "minRateDescription": "Very Low",
      "maxRateDescription": "Very Much"
     },
     {
      "type": "rating",
      "name": "LLM-freq",
      "title": "How often do you find the information with Large Language Models (ChatGPT, BingAI)?",
      "minRateDescription": "Rarely",
      "maxRateDescription": "Always"
     },
     {
      "type": "rating",
      "name": "question1",
      "title": "How would you rate the effectiveness of large language models (ChatGPT, BingAI) in accomplishing your tasks?",
      "minRateDescription": "Not effective",
      "maxRateDescription": "Very effective"
     },
     {
      "type": "rating",
      "name": "credibility",
      "title": "How good are you at evaluating credibility of responses from chat? (How much do you trust the outputs from large language models)",
      "minRateDescription": "Not good",
      "maxRateDescription": "Very good"
     },
     {
      "type": "radiogroup",
      "name": "question3",
      "title": "In the case when you are not sure about the accuracy of the answer, what would you do to accomplish the task?",
      "choices": [
       {
        "value": "Item 1",
        "text": "I will switch to using traditional search tools"
       },
       {
        "value": "Item 2",
        "text": "I will continue to use the chat by starting again with a new conversation or formulating queries"
       }
      ]
     }
    ],
    "title": "Interaction with large language model behaviours"
   }
  ],
  "showCompletedPage": false,
  "navigateToUrl": "http://localhost:3000/introduction"
 }

const PreStudy = () => {
  const model = new Model(json);
  return <Survey model={model}></Survey>;
};

export default PreStudy;
