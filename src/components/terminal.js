import React from 'react';

const Terminal = () => {
  const logs = [
    "Logs",
    
  ];

  return (
    <div className="bg-black text-white p-4 rounded-lg h-full fixed top-0 right-0 w-[20%]">
      <div className="flex items-center mb-2">
        <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-yellow-500 rounded-full mr-2"></div>
        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
      </div>
      <div className="overflow-y-auto">
        {logs.map((log, index) => (
          <div key={index} className="text-green-400">{log}</div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
