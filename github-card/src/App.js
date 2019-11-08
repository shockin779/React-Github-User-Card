import React from 'react';

import Header from './components/Header/Header';
import UserCard from './components/UserCard/UserCard';
import Followers from './components/Followers/Followers';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <UserCard />
      <Followers />
    </div>
  );
}

export default App;