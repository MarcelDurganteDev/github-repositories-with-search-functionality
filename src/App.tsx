import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import Profile from './pages/profile/Profile';
import Repository from './pages/Repository';

function App () {
  return (
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repository />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
