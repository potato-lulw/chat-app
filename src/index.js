import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ActiveChatroomProvider } from './context/activeChatroomContext';
import { ChatroomMessagesProvider } from './context/chatroomMessageContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ActiveChatroomProvider>
      <ChatroomMessagesProvider>
        <App />
      </ChatroomMessagesProvider>
    </ActiveChatroomProvider>
  </React.StrictMode>
);

