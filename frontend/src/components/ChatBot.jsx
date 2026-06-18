import { useState } from "react";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! Ask me about Shakeeb's skills and projects."
    }
  ]);

  async function sendMessage() {
    if (!question.trim()) return;

    const userQuestion = question;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: userQuestion
      }
    ]);

    setQuestion("");

    try {
      const response = await fetch(
        "https://shakeeb-portfolio.onrender.com/api/chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            message: userQuestion
          })
        }
      );

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: data.reply
        }
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I couldn't connect to the AI service."
        }
      ]);
    }
  }

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="chat-button"
      >
        🤖
      </button>

      {open && (
        <div className="chat-window">
          <h3>Ask Shakeeb AI</h3>

          <div className="messages">
            {messages.map((msg, index) => (
              <p key={index}>
                <strong>{msg.sender}:</strong> {msg.text}
              </p>
            ))}
          </div>

          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question..."
          />

          <button onClick={sendMessage}>
            Send
          </button>
        </div>
      )}
    </>
  );
}

export default ChatBot;