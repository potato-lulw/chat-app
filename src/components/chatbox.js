// ChatBox.js

import React, {  useState } from 'react';
import { useActiveChatroom } from '../context/activeChatroomContext';
import { useChatroomMessages } from '../context/chatroomMessageContext';


const ChatBox = () => {
    const [inputValue, setInputValue] = useState('');
    const userName = 'user1';
    const { activeChatroom } = useActiveChatroom();
    const { chatroomMessages, addMessageToChatroom } = useChatroomMessages();
    const messages = chatroomMessages[activeChatroom] || [];

    

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            const currentDate = new Date();
            const currentTime = currentDate.toLocaleTimeString();
            const currentDateTime = `${currentDate.toDateString()} ${currentTime}`;
            const newMessage = { user: userName, message: inputValue, time: currentDateTime };
            addMessageToChatroom(activeChatroom, newMessage);
            setInputValue('');
        }
    };

    return (
        <div className="flex flex-col h-full border border-white rounded-md w-[40%]">
            <div className="flex-1 p-4 overflow-y-auto">
                {messages.map((message, index) => (
                    <div key={index} className="mb-2">
                        <span className='text-yellow-400 text-sm'>{message.time} -  </span> <span className='text-red-400 font-bold'>{message.user}</span>: {message.message}
                    </div>
                ))}
            </div>
            <form onSubmit={handleMessageSubmit} className="p-4 border-t border-gray-200">
                <input
                    type="text"
                    className="w-full px-4 py-2 border bg-primary rounded-sm focus:outline-none  focus:border-primary outline-none "
                    placeholder={`Send a message as ${userName}`}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            </form>
        </div>
    );
};

export default ChatBox;
