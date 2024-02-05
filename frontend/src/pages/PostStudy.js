import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const json = {
  "title": "Post Study Questionnaire",
  "description": "Demographic Questionnaires",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "gender",
      "title": "What gender do you identify with?",
      "choices": [
       {
        "value": "Item 1",
        "text": "Female"
       },
       {
        "value": "Item 2",
        "text": "Male"
       },
       {
        "value": "Item 3",
        "text": "Prefer not to say"
       }
      ]
     },
     {
      "type": "text",
      "name": "age",
      "title": "What is your age?",
      "inputType": "number"
     },
     {
      "type": "dropdown",
      "name": "qualification",
      "title": "What is your highest qualification?",
      "choices": [
       {
        "value": "Item 1",
        "text": "No degree"
       },
       {
        "value": "Item 2",
        "text": "Less than a high school diploma "
       },
       {
        "value": "Item 3",
        "text": "High school diploma or equivalent degree"
       },
       {
        "value": "Item 4",
        "text": "Bachelor’s degree "
       },
       {
        "value": "Item 5",
        "text": "Master’s degree"
       },
       {
        "value": "Item 6",
        "text": "Doctorate"
       }
      ]
     },
     {
      "type": "text",
      "name": "occupation",
      "title": "What is your current occupation? (Student, Working)"
     },
     {
      "type": "comment",
      "name": "enjoy",
      "title": "Did you enjoy participating in the study?"
     },
     {
      "type": "boolean",
      "name": "Vp-stunden",
      "title": "Do you need VP-Stunden (Versuchspersonenstunden) ?"
     },
     {
      "type": "text",
      "name": "matrikel-nr",
      "visibleIf": "{Vp-stunden} = true",
      "title": "Please enter your name and your student number (Matrikelnummer)"
     }
    ]
   }
  ]
 }

const PostStudy = () => {
  const model = new Model(json);
  return <Survey model={model}></Survey>;
};

export default PostStudy;
