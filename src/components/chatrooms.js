import React, { useState } from 'react';
import { useActiveChatroom } from '../context/activeChatroomContext';

const ChatRooms = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { activeChatroom, setActiveChatroom } = useActiveChatroom();

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleChatClick = (chatName) => {
    setActiveChatroom(chatName);
  };

  return (
    <div className={`bg-secondary w-64 h-full fixed top-0 left-0 overflow-x-hidden transition-width ${collapsed ? 'w-11' : 'w-48'}`}>
      <div className="cursor-pointer bg-secondary px-4 py-2 text-white" onClick={toggleCollapse}>
        <span className='font-bold text-2xl'>{collapsed ? '»' : '«'}</span>
      </div>
      <div className={`p-4 ${collapsed ? 'hidden' : ''}`}>
        <div className="mb-4">
          <h2 className="text-white text-lg font-bold mb-2">Chatrooms</h2>
          <div
            className="cursor-pointer py-2 hover:bg-primary p-2 rounded-sm"
            onClick={() => handleChatClick('Chatroom 1')}
            style={{ backgroundColor: activeChatroom === 'Chatroom 1' ? '#0E1116' : '' }}
          >
            Chatroom 1
          </div>
          <div
            className="cursor-pointer py-2 hover:bg-primary p-2 rounded-sm"
            onClick={() => handleChatClick('Chatroom 2')}
            style={{ backgroundColor: activeChatroom === 'Chatroom 2' ? '#0E1116' : '' }}
          >
            Chatroom 2
          </div>
          <div
            className="cursor-pointer py-2 hover:bg-primary p-2 rounded-sm"
            onClick={() => handleChatClick('Chatroom 3')}
            style={{ backgroundColor: activeChatroom === 'Chatroom 3' ? '#0E1116' : '' }}
          >
            Chatroom 3
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-bold mb-2">Personal Chats</h2>
          <div
            className="cursor-pointer py-2 hover:bg-primary p-2 rounded-sm"
            onClick={() => handleChatClick('Personal Chat 1')}
            style={{ backgroundColor: activeChatroom === 'Personal Chat 1' ? '#0E1116' : '' }}
          >
            Personal Chat 1
          </div>
          <div
            className="cursor-pointer py-2 hover:bg-primary p-2 rounded-sm"
            onClick={() => handleChatClick('Personal Chat 2')}
            style={{ backgroundColor: activeChatroom === 'Personal Chat 2' ? '#0E1116' : '' }}
          >
            Personal Chat 2
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRooms;
