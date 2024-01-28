export const getResults = async (req, res) => {
  res.status(200).send({
    message: "Hello from Google",
  });
};

export const postResults = async (req, res) => {
  try {
    const GG_API_KEY = process.env.GG_API_KEY;
    const CX = process.env.CX;
    const query = req.body.query;
    const start = req.body.start;
    const url = `https://www.googleapis.com/customsearch/v1?key=${GG_API_KEY}&cx=${CX}&q=${query}`;
    const finalUrl = start ? `${url}&start=${start}&num=10` : url;

    const response = await fetch(finalUrl);
    const data = await response.json();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
};
