import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Profile from './pages/profile/Profile';
import Repository from './pages/repository/Repository';

function App () {
  return (
    <BrowserRouter>
      <Header/> 
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repository />} />
      </Routes>
      <Footer />
      <GlobalStyles />
    </BrowserRouter>
  );
}

export default App;
