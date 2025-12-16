import { useState } from "react";
import ChatList from "../components/chat/ChatList";
import ChatWindow from "../components/chat/ChatWindow";

const Chat = () => {
  const [activeChat, setActiveChat] = useState(null);


  
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Chat List */}
        <div className={`col-md-4 p-0 ${activeChat ? "d-none d-md-block" : ""}`}>
          <ChatList onSelectChat={setActiveChat} />
        </div>

        {/* Chat Window */}
        <div className={`col-md-8 p-0 ${!activeChat ? "d-none d-md-block" : ""}`}>
          {activeChat ? (
            <ChatWindow
              chat={activeChat}
              onBack={() => setActiveChat(null)}
            />
          ) : (
            <div className="d-flex h-100 align-items-center justify-content-center text-muted">
              Select a chat
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
