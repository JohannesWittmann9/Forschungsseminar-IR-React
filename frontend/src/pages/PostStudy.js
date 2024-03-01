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
        "value": "Female",
        "text": "Female"
       },
       {
        "value": "Male",
        "text": "Male"
       },
       {
        "value": "Prefer not to say",
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
        "value": "No degree",
        "text": "No degree"
       },
       {
        "value": "Less than a high school diploma",
        "text": "Less than a high school diploma "
       },
       {
        "value": "High school diploma or equivalent degree",
        "text": "High school diploma or equivalent degree"
       },
       {
        "value": "Bachelor’s degree",
        "text": "Bachelor’s degree "
       },
       {
        "value": "Master’s degree",
        "text": "Master’s degree"
       },
       {
        "value": "Doctorate",
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

  model.onComplete.add(function (sender, options) {
    // Display the "Saving..." message (pass a string value to display a custom message)
    const user_id = localStorage.getItem("userId");
    const results =  sender.data
    options.showSaveInProgress();
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:7000/api/poststudies");
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = xhr.onerror = function () {
      if (xhr.status === 200) {
        // Display the "Success" message (pass a string value to display a custom message)
        options.showSaveSuccess();
        // Alternatively, you can clear all messages:
        // options.clearSaveMessages();
      } else {
        // Display the "Error" message (pass a string value to display a custom message)
        options.showSaveError();
      }
    };
    xhr.send(JSON.stringify({user_id, results}));
  });
  return <Survey model={model}></Survey>;
};

export default PostStudy;
