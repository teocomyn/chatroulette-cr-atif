import React, { useState } from 'react';
import { Instagram, Video, MessageSquare, UserPlus, Heart, SkipForward } from 'lucide-react';
import Login from './components/Login';
import VideoChat from './components/VideoChat';
import TextChat from './components/TextChat';
import UserProfile from './components/UserProfile';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [partner, setPartner] = useState(null);

  const handleLogin = (instagramProfile) => {
    setIsLoggedIn(true);
    setCurrentUser(instagramProfile);
    // TODO: Implement logic to find a partner
  };

  const handleNext = () => {
    // TODO: Implement logic to find a new partner
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex flex-col">
      <header className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-center text-purple-600">Creative Chatroulette</h1>
      </header>
      <main className="flex-grow flex flex-col md:flex-row p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-grow">
          <VideoChat partner={partner} />
          <div className="mt-4 flex justify-center space-x-4">
            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
              <SkipForward className="mr-2" /> Next
            </button>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full flex items-center">
              <Heart className="mr-2" /> Favorite
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 space-y-4">
          <UserProfile user={currentUser} />
          {partner && <UserProfile user={partner} />}
          <TextChat />
        </div>
      </main>
      <footer className="bg-white shadow-md p-4 text-center text-gray-600">
        © 2024 Creative Chatroulette. All rights reserved.
      </footer>
    </div>
  );
}

export default App;