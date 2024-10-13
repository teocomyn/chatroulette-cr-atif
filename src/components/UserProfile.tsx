import React from 'react';
import { User, Users } from 'lucide-react';

interface UserProfileProps {
  user: {
    username: string;
    fullName: string;
    bio: string;
    followers: number;
    following: number;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
            <User size={32} className="text-purple-600" />
          </div>
          <div>
            <h3 className="font-bold text-white">{user.fullName}</h3>
            <p className="text-purple-200">@{user.username}</p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 mb-4">{user.bio}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span className="flex items-center">
            <Users size={16} className="mr-1" /> {user.followers} followers
          </span>
          <span>{user.following} following</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;