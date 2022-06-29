import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RepositoriesPage from './pages/RepositoriesPage/RepositoriesPage';
import Header from './components/Header/Header';


export interface IApplicationProps {}

const App: FC<IApplicationProps> = () => {

//   const navigate = useNavigate();

//  const loginStorage =  window.localStorage.getItem( 'isLoggedIn' )
//   if ( loginStorage === 'false' || null ) {
//     navigate('/login');
//   }

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<ProfilePage />} />
        <Route path='/:username' element={<ProfilePage />} />
        <Route path='/:username/:reponame' element={<RepositoriesPage />} />
      </Routes>

      <GlobalStyles />
    </BrowserRouter>
  );
};

export default App;
