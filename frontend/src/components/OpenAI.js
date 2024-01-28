// Author: GreatStack
// Date: 29 Aug 2023
// Title of source code: Build ChatGPT In React JS Using OpenAI API | Create ChatGPT Clone Using React JS
// Type: source code
// Web address: https://www.youtube.com/watch?v=EzkWAviyYgg&lc=UgzoXG3DUQkpEw30Hc14AaABAg

import bot from "./assets/bot.svg";
import user from "./assets/user.svg";
import sendBtn from "./assets/send.svg";
import { useEffect, useRef, useState } from "react";

const OpenAI = () => {
  const msgEnd = useRef(null);
  const chatForm = useRef(null);

  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am Codex",
      isBot: true,
    },
  ]);

  // Author: adrianhajdin
  // Date: 23 Dec 2022
  // Title of source code: Build and Deploy Your Own ChatGPT AI App in JavaScript | OpenAI, Machine Learning
  // Type: source code
  // Web address: https://github.com/adrianhajdin/project_openai_codex/blob/main/client/script.js

  // const loader = (element) => {
  //   element.textContent = "";
  //   loadInterval = setInterval(() => {
  //     element.textContent += ".";
  //     if (element.textContent === "....") {
  //       element.textContent = "";
  //     }
  //   }, 300);
  // };

  //   const typeText = (element, text) => {
  //     let index = 0;
  //     let interval = setInterval(() => {
  //       if (index < text.length) {
  //         element.innerHTML += text.charAt(index);
  //         index++;
  //       } else {
  //         clearInterval(interval);
  //       }
  //     }, 20);
  //   };

  //   const generateUniqueId = () => {
  //     const timestamp = Date.now();
  //     const randomNumber = Math.random();
  //     const hexadecimalString = randomNumber.toString(16);

  //     return `id-${timestamp}-${hexadecimalString}`;
  //   };

  //   const chatStripe = (isAi, value, uniqueId) => {
  //     return `
  //     <div className="wrapper ${isAi && "ai"}">
  //       <div className="chat">
  //         <div className="profile">
  //           <img src="${isAi ? bot : user}" alt="${isAi ? "bot" : "user"}" />
  //         </div>
  //         <div className="message" id=${uniqueId}>${value}</div>
  //       </div>
  //     </div>
  //     `;
  //   };

  //   const handleSubmit = async () => {
  //     const newChatMessages = [...chatMessages];
  //     newChatMessages.push(chatStripe(false, chatInput));

  //     setChatMessages(newChatMessages);
  //     setChatInput("");

  //     const uniqueId = generateUniqueId();
  //     setChatMessages((prevMessages) => [
  //       ...prevMessages,
  //       chatStripe(true, " ", uniqueId),
  //     ]);

  //     const messageDiv = document.getElementById(uniqueId);

  //     loader(messageDiv);

  //     try {
  //       const response = await fetch(OPENAI_API_URL, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${OPENAI_API_KEY}`,
  //         },
  //         body: JSON.stringify({
  //           model: "gpt-3.5-turbo",
  //           messages: [{ role: "user", content: chatInput }],
  //         }),
  //       });

  //       clearInterval(loadInterval);
  //       messageDiv.innerHTML = "";

  //       if (response.ok) {
  //         const data = await response.json();
  //         const parsedData = data.bot.trim();

  //         typeText(messageDiv, parsedData);
  //       } else {
  //         const err = await response.text();
  //         messageDiv.innerHTML = "Something went wrong";
  //         console.error(err);
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();

    const text = chatInput;
    setChatInput("");
    setMessages([...messages, { text, isBot: false }]);

    if (chatForm.current) {
      const data = new FormData(chatForm.current);
      const res = await fetch("http://localhost:7000/openai", {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: data.get("prompt"),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setMessages([
          ...messages,
          {
            text: chatInput,
            isBot: false,
          },
          {
            text: data,
            isBot: true,
          },
        ]);
      } else {
        const err = await res.json();
        console.log(err.error.error.message);
      }
    }
  };

  // const handleEnter =  (e) => {
  //   e.preventDefault();
  //   if (e.keyCode === 13) handleSend();
  // };

  return (
    <div id="open-ai">
      <div id="chat_container">
        {messages.map((message, index) => (
          <div key={index} className={message.isBot ? "wrapper ai" : "wrapper"}>
            <div className="chat">
              <div className="profile">
                <img alt="" src={message.isBot ? bot : user} />
              </div>
              <div className="message">{message.text}</div>
            </div>
          </div>
        ))}
        <div ref={msgEnd} />
      </div>
      <form ref={chatForm} className="chat-form" onSubmit={handleSend}>
        <textarea
          name="prompt"
          cols="1"
          rows="1"
          placeholder="Ask Codex..."
          value={chatInput}
          // onKeyDown={handleEnter}
          onChange={(e) => setChatInput(e.target.value)}
        ></textarea>
        <button className="send-btn">
          <img src={sendBtn} alt="" />
        </button>
      </form>
    </div>
  );
};

export default OpenAI;
