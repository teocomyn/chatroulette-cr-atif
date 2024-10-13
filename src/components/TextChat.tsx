import React, { useState } from 'react';
import { Send } from 'lucide-react';

const TextChat: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSend = () => {
    if (message.trim()) {
      setChatHistory([...chatHistory, message]);
      setMessage('');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-purple-600 text-white p-3">
        <h3 className="font-bold">Chat</h3>
      </div>
      <div className="h-64 overflow-y-auto p-4 space-y-2">
        {chatHistory.map((msg, index) => (
          <div key={index} className="bg-gray-100 rounded-lg p-2">
            {msg}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-grow border rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSend}
            className="bg-purple-600 text-white rounded-r-lg p-2 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextChat;