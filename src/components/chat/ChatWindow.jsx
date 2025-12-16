import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ChatWindow = ({ chat, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);

  const messagesRef = collection(db, "chats", chat.id, "messages");
  const typingRef = doc(db, "typing", chat.id);

  // 🔁 Real-time messages
  useEffect(() => {
    const q = query(messagesRef, orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((d) => d.data()));
    });
    return unsub;
  }, [chat.id]);

  // ✍️ Typing indicator
  useEffect(() => {
    if (!text) {
      deleteDoc(typingRef);
      return;
    }
    setDoc(typingRef, { typing: true });
    const timer = setTimeout(() => deleteDoc(typingRef), 1500);
    return () => clearTimeout(timer);
  }, [text]);

  // 📩 Send message
  const sendMessage = async () => {
    if (!text.trim()) return;

    await addDoc(messagesRef, {
      text,
      sender: "me",
      createdAt: serverTimestamp(),
    });
    setText("");
  };

  return (
    <div className="chat-window d-flex flex-column">
      {/* Header */}
      <div className="chat-window-header d-flex align-items-center p-2 border-bottom">
        <button className="btn btn-sm d-md-none me-2" onClick={onBack}>
          ←
        </button>
        <img src={chat.avatar} className="rounded-circle chat-header-avatar" />
        <strong className="ms-2">{chat.name}</strong>
      </div>

      {/* Messages */}
      <div className="chat-messages flex-grow-1 p-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "me" ? "sent" : "received"}`}
          >
            <div className="chat-bubble">{msg.text}</div>
          </div>
        ))}
        {typing && <div className="typing">Typing...</div>}
      </div>

      {/* Input */}
      <div className="chat-input p-2 border-top">
        <div className="input-group">
          <button
            className="btn btn-light"
            onClick={() => setText(text + "😊")}
          >
            😊
          </button>
          <input
            className="form-control"
            placeholder="Message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="btn btn-primary" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;
