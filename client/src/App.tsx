import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Profile from './pages/Profile/Profile';
import Repository from './pages/RepositoriesList/RepositoriesList';

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
