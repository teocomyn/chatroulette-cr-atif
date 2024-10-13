import React, { useState } from 'react';
import { Instagram } from 'lucide-react';

interface LoginProps {
  onLogin: (instagramProfile: any) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [instagramLink, setInstagramLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Instagram API integration
    const mockProfile = {
      username: instagramLink.split('/').pop(),
      fullName: 'Creative User',
      bio: 'Digital artist and content creator',
      followers: 1000,
      following: 500,
    };
    onLogin(mockProfile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-600">Connect with Creatives</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="instagram" className="block text-gray-700 text-sm font-bold mb-2">
              Instagram Profile
            </label>
            <div className="flex">
              <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                <Instagram size={18} />
              </span>
              <input
                type="text"
                id="instagram"
                className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5"
                placeholder="https://www.instagram.com/yourusername"
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Connect & Start Chatting
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;