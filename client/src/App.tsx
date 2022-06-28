import {FC} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RepositoriesList from './components/RepositoriesList/RepositoriesList';
import { UserProvider } from './store/providers/UserProvider';

export interface IApplicationProps {}

const App: FC<IApplicationProps> = () => {

  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<ProfilePage />} />
          <Route path='/:username' element={<RepositoriesList />} />
          <Route path='/:username/:reponame' element={<RepositoriesList />} />
          <Route
            path='/login'
            element={<LoginPage  />}
          />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
