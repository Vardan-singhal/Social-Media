const chats = [
  {
    id: "chat1",
    name: "john_doe",
    avatar: "https://i.pravatar.cc/150?img=3",
    online: true,
  },
  {
    id: "chat2",
    name: "emma_watson",
    avatar: "https://i.pravatar.cc/150?img=5",
    online: false,
  },
];




const ChatList = ({ onSelectChat }) => {
  return (
    <div className="chat-list border-end">
      <div className="p-3 border-bottom fw-bold">Messages</div>

      {chats.map((chat) => (
        <div
          key={chat.id}
          className="chat-user d-flex align-items-center p-2"
          onClick={() => onSelectChat(chat)}
        >
          <img src={chat.avatar} className="rounded-circle chat-avatar" />
          <div className="ms-3">
            <strong>{chat.name}</strong>
            <div className="small text-muted">
              {chat.online ? "Online" : "Offline"}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
