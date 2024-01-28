import "survey-core/defaultV2.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

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
          type: "boolean",
          name: "enough-infomation",
          title: "Do you have enough information to do the task?",
        },
        {
          type: "rating",
          name: "missing-info",
          visibleIf: "{enough-infomation} = false",
          title:
            "Indicate how much you would like to do more search for this type of task to get enough information?",
          minRateDescription: "Very Low",
          maxRateDescription: "Very Much",
        },
        {
          type: "radiogroup",
          name: "question1",
          title:
            "About the responses of chat I have trusted and thought that they fulfilled my information need:",
          choices: [
            {
              value: "Item 1",
              text: "I am sure all of them are useful for this task. ",
            },
            {
              value: "Item 2",
              text: "I am sure most of them are useful for this task, others may be useful.",
            },
            {
              value: "Item 3",
              text: "I am sure half of them are useful for this task, the other half may be useful.",
            },
            {
              value: "Item 4",
              text: "I am sure that only a small part of them are useful for this task, the rest may be not useful.",
            },
            {
              value: "Item 5",
              text: "I am not sure if all of them are useful for this task.",
            },
          ],
        },
        {
          type: "matrix",
          name: "matrix",
          title: "Please specify your status for the following items.",
          columns: [
            {
              value: "Column 1",
              text: "Strongly disagree",
            },
            {
              value: "Column 2",
              text: "Disagree ",
            },
            {
              value: "Column 3",
              text: "Neither agree nor disagree ",
            },
            {
              value: "Column 4",
              text: "Agree",
            },
            {
              value: "Column 5",
              text: "Strongly agree",
            },
          ],
          rows: [
            {
              value: "Row 1",
              text: "Some of the task terms were vague and unfamiliar to me.",
            },
            {
              value: "Row 2",
              text: "This task required a lot of activity to identify and gather useful information.",
            },
            {
              value: "Row 3",
              text: "The task includes many sub-tasks and activities.",
            },
            {
              value: "Row 4",
              text: "I find that resources that generative AI (Chat GPT, BingAI) provide in its answers are trustful.",
            },
            {
              value: "Row 5",
              text: "I believe that I was successful in searching and selecting information for this task",
            },
            {
              value: "Row 6",
              text: "I am satisfied with my search process to complete this work task.",
            },
          ],
        },
      ],
      title: "Task 1:",
      description:
        "Your brother complains of constant headaches. One night when his headache is accompanied by nausea, you go to the medical center with Daniel and find out that Daniel's blood pressure is 21. You want to know: what causes high blood pressure? What diseases raise blood pressure? What are the ways to control high blood pressure? Help your brother by gathering relevant information and refer him to a specialist.",
    },
  ],
  "showCompletedPage": false,
  "navigateToUrl": "/poststudy"
};

const PostTask = () => {
  const model = new Model(json);
  return <Survey model={model}></Survey>;
};

export default PostTask;
