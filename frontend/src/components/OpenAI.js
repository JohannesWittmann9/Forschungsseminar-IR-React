// Author: GreatStack
// Date: 29 Aug 2023
// Title of source code: Build ChatGPT In React JS Using OpenAI API | Create ChatGPT Clone Using React JS
// Type: source code
// Web address: https://www.youtube.com/watch?v=EzkWAviyYgg&lc=UgzoXG3DUQkpEw30Hc14AaABAg

// Importing necessary React components and hooks
import { useEffect, useRef, useState } from "react";

// Importing images for user and bot avatars, and send button
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";
import sendBtn from "./assets/send.svg";

// Functional component for OpenAI chat interface in React
const OpenAI = ({interaction_id}) => {
  // References to DOM elements
  const msgEnd = useRef(null);
  const chatForm = useRef(null);

  // State variables for chat input and messages
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "Hi, I am Codex",
      isBot: true,
    },
  ]);

  // Effect to scroll to the bottom when new messages are added
  useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  // Function to handle sending a message
  const handleSend = async (e) => {
    e.preventDefault();

    // Get the current chat input text
    const text = chatInput;

    // Clear the chat input field
    setChatInput("");

    // Prepare the new message object
    const newUserMessage = { text, isBot: false };

    // Add user's message to the messages state
    setMessages([...messages, newUserMessage]);

    // Send a POST request to the OpenAI API with the user's message
    if (chatForm.current) {
      const data = new FormData(chatForm.current);
      const res = await fetch("http://localhost:7000/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: data.get("prompt"),
        }),
      });

      // Handle the response from the API
      if (res.ok) {
        const data = await res.json();

        // Prepare the new bot message object
        const newBotMessage = { text: data.bot, isBot: true };

        // Add the bot's response to the messages state
        setMessages([...messages, newUserMessage, newBotMessage]);

        // Retrieve existing messages from session storage
        const existingMessages =
          JSON.parse(sessionStorage.getItem(`messages-${interaction_id}`)) || [];

        // Push the new messages to the existing messages array
        existingMessages.push([newUserMessage, newBotMessage]);

        // Update session storage with the combined array of old and new messages
        sessionStorage.setItem(`messages-${interaction_id}`, JSON.stringify(existingMessages));
      } else {
        // Log any errors in the console
        const err = await res.json();

        // Prepare the error message object
        const errorMessage = { text: "Something went wrong...", isBot: true };

        setMessages([...messages, newUserMessage, errorMessage]);

        // Retrieve existing messages from session storage or initialize to an empty array if not found
        let existingMessages =
          JSON.parse(sessionStorage.getItem(`messages-${interaction_id}`)) || [];

        // Push the error message to the existing messages array
        existingMessages.push([newUserMessage, errorMessage]);

        // Update session storage with the combined array of old and new messages
        sessionStorage.setItem(`messages-${interaction_id}`, JSON.stringify(existingMessages));

        console.log(err.error.error.message);
      }
    }
  };

  // JSX structure for rendering the chat interface
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
          onChange={(e) => setChatInput(e.target.value)}
        ></textarea>
        <button className="send-btn">
          <img src={sendBtn} alt="" />
        </button>
      </form>
    </div>
  );
};

// Export the OpenAI component for use in other parts of the application
export default OpenAI;
