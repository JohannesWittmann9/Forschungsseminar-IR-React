import OpenAI from "openai";

export const getChatResponses = async (req, res) => {
  res.status(200).send({
    message: "Hello from Codex",
  });
};

export const postChatResponses = async (req, res) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const prompt = req.body.promt;
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    res.status(200).send({
      bot: response.data.choices[0].message.text,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
