import React from 'react';
import { Video, Mic, MicOff, VideoOff } from 'lucide-react';

interface VideoChatProps {
  partner: any;
}

const VideoChat: React.FC<VideoChatProps> = ({ partner }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="relative aspect-video">
        {partner ? (
          <video className="w-full h-full object-cover" autoPlay playsInline muted />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-700 text-white">
            Waiting for a partner...
          </div>
        )}
        <div className="absolute bottom-4 right-4 w-1/4 aspect-video">
          <video className="w-full h-full object-cover rounded-lg" autoPlay playsInline muted />
        </div>
      </div>
      <div className="bg-gray-900 p-4 flex justify-center space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2">
          <Video size={24} />
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2">
          <Mic size={24} />
        </button>
      </div>
    </div>
  );
};

export default VideoChat;