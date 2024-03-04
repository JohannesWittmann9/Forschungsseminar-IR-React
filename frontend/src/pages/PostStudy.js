import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { postDataToServer } from "utils/utils";

const json = {
  title: "Post Study Questionnaire",
  description: "Demographic Questionnaires",
  logoPosition: "right",
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "radiogroup",
          name: "gender",
          title: "What gender do you identify with?",
          choices: [
            {
              value: "Female",
              text: "Female",
            },
            {
              value: "Male",
              text: "Male",
            },
            {
              value: "Prefer not to say",
              text: "Prefer not to say",
            },
          ],
        },
        {
          type: "text",
          name: "age",
          title: "What is your age?",
          inputType: "number",
        },
        {
          type: "dropdown",
          name: "qualification",
          title: "What is your highest qualification?",
          choices: [
            {
              value: "No degree",
              text: "No degree",
            },
            {
              value: "Less than a high school diploma",
              text: "Less than a high school diploma ",
            },
            {
              value: "High school diploma or equivalent degree",
              text: "High school diploma or equivalent degree",
            },
            {
              value: "Bachelor’s degree",
              text: "Bachelor’s degree ",
            },
            {
              value: "Master’s degree",
              text: "Master’s degree",
            },
            {
              value: "Doctorate",
              text: "Doctorate",
            },
          ],
        },
        {
          type: "text",
          name: "occupation",
          title: "What is your current occupation? (Student, Working)",
        },
        {
          type: "comment",
          name: "enjoy",
          title: "Did you enjoy participating in the study?",
        },
        {
          type: "boolean",
          name: "Vp-stunden",
          title: "Do you need VP-Stunden (Versuchspersonenstunden) ?",
        },
        {
          type: "text",
          name: "matrikel-nr",
          visibleIf: "{Vp-stunden} = true",
          title:
            "Please enter your name and your student number (Matrikelnummer)",
        },
      ],
    },
  ],
};

const PostStudy = () => {
  const model = new Model(json);

  model.onComplete.add(async function (sender, options) {
    const user_id = localStorage.getItem("userId");
    const results = sender.data;

    options.showSaveInProgress();

    try {
      // Send post study data to database
      await postDataToServer("http://localhost:7000/api/poststudies", {
        user_id,
        results,
      });
      options.showSaveSuccess();

      // Send user data to database
      const study_start_time = localStorage.getItem("study_start_time");
      const study_end_time = new Date();
      await postDataToServer("http://localhost:7000/api/users", {
        user_id,
        study_start_time,
        study_end_time,
      });
    } catch (error) {
      // Handle errors appropriately
      options.showSaveError();
      console.error("An error occurred:", error);
    }
  });

  return <Survey model={model}></Survey>;
};

export default PostStudy;
