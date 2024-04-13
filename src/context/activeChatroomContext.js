import React, { createContext, useState, useContext } from 'react';

const ActiveChatroomContext = createContext();

export const useActiveChatroom = () => useContext(ActiveChatroomContext);

export const ActiveChatroomProvider = ({ children }) => {
  const [activeChatroom, setActiveChatroom] = useState(null);

  return (
    <ActiveChatroomContext.Provider value={{ activeChatroom, setActiveChatroom }}>
      {children}
    </ActiveChatroomContext.Provider>
  );
};
