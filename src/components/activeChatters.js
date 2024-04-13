import React, { useEffect, useState } from 'react';
import { useActiveChatroom } from '../context/activeChatroomContext';

const ActiveChatters = () => {
  const { activeChatroom, setActiveChatRoom } = useActiveChatroom();

  const [noUsers, setNoUsers] = useState(0);

  useEffect(() => {
    setNoUsers(Math.floor(Math.random() * 6) + 1); // Generate a random number between 1 and 6
  }, [activeChatroom]);

  return (
    <div className="bg-secondary w-48 h-full p-4 rounded-md">
      <h2 className="text-white mb-4">Active Chatters</h2>
      <ul>
        {Array.from({ length: noUsers }, (_, index) => (
          <li key={index} className="text-white flex items-center gap-2"> <div className='w-[0.5rem] h-[0.5rem] bg-green-400 rounded-full'></div> User {index + 1}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActiveChatters;
