import bot from "./assets/bot.svg";
import user from "./assets/user.svg";
import sendBtn from "./assets/send.svg";
import { useState } from "react";

const OPENAI_API_KEY = "API_Key";
const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";

const OpenAI = () => {
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [loadInterval, setLoadInterval] = useState(null);

  const loader = (element) => {
    element.textContent = "";
    loadInterval = setInterval(() => {
      element.textContent += ".";
      if (element.textContent === "....") {
        element.textContent = "";
      }
    }, 300);
  };

  const typeText = (element, text) => {
    let index = 0;
    let interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  const generateUniqueId = () => {
    const timestamp = Date.now();
    const randomNumber = Math.random();
    const hexadecimalString = randomNumber.toString(16);

    return `id-${timestamp}-${hexadecimalString}`;
  };

  const chatStripe = (isAi, value, uniqueId) => {
    return `
    <div className="wrapper ${isAi && "ai"}">
      <div className="chat">
        <div className="profile">
          <img src="${isAi ? bot : user}" alt="${isAi ? "bot" : "user"}" />
        </div>
        <div className="message" id=${uniqueId}>${value}</div>
      </div>
    </div>
    `;
  };

  const handleSubmit = async () => {
    const newChatMessages = [...chatMessages];
    newChatMessages.push(chatStripe(false, chatInput));

    setChatMessages(newChatMessages);
    setChatInput("");

    const uniqueId = generateUniqueId();
    setChatMessages((prevMessages) => [
      ...prevMessages,
      chatStripe(true, " ", uniqueId),
    ]);

    const messageDiv = document.getElementById(uniqueId);

    loader(messageDiv);

    try {
      const response = await fetch(OPENAI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: chatInput }],
        }),
      });

      clearInterval(loadInterval);
      messageDiv.innerHTML = "";

      if (response.ok) {
        const data = await response.json();
        const parsedData = data.bot.trim();

        typeText(messageDiv, parsedData);
      } else {
        const err = await response.text();
        messageDiv.innerHTML = "Something went wrong";
        console.error(err);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id="open-ai">
      <div id="chat_container">
        {chatMessages.map((message, index) => (
          <div key={index} dangerouslySetInnerHTML={{ __html: message }} />
        ))}
      </div>
      <form className="chat-form" onSubmit={handleSubmit}>
        <textarea
          name="prompt"
          cols="1"
          rows="1"
          placeholder="Ask Codex..."
          value={chatInput}
          onChange={(e) => setChatInput(e.target.value)}
        ></textarea>
        <button className="send-btn" type="button">
          <img src={sendBtn} alt="" />
        </button>
      </form>
    </div>
  );
};

export default OpenAI;
