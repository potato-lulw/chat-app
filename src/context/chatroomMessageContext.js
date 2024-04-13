// ActiveChatroomContext.js

import React, { createContext, useContext, useState } from 'react';

const ChatroomMessagesContext = createContext();

export const useChatroomMessages = () => useContext(ChatroomMessagesContext);

export const ChatroomMessagesProvider = ({ children }) => {
  const [chatroomMessages, setChatroomMessages] = useState({});

  const addMessageToChatroom = (chatroom, message) => {
    setChatroomMessages(prevMessages => ({
      ...prevMessages,
      [chatroom]: [...(prevMessages[chatroom] || []), message]
    }));
  };

  return (
    <ChatroomMessagesContext.Provider value={{ chatroomMessages, addMessageToChatroom }}>
      {children}
    </ChatroomMessagesContext.Provider>
  );
};
