/**
 * @description: ProfilePage is used to display the user profile. It is used in the App component. It shows Header, ProfileData and RepositoryList components.
 *
 * @returns: JSX. Element ProfilePage component with: Container is used to wrap the entire component. Flex is used to align the component. Main is used to display the user profile (left side) and RepositoriesPagelist (right side).
 *
 * @interface Props ( in Typescript for an element to receive props, an interface must be defined )
 *
 * @props user : user data of the user. From APIUser call in custom hook (customTypes.tsx)
 * @props repos : list of RepositoriesPageof the user. From APIUser call in custom hook (customTypes.tsx)
 * @error error : data error of the user. From APIUser call in custom hook (customTypes.tsx)
 *
 * @memberof ProfilePage
 */

import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  RepositoriesPage,
  RepositoryIcon,
  Tab
} from './profilePageStyles';

// import Header from '../../components/Header/Header';
import ProfileData from '../../components/ProfileData/ProfileData';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';
import { APIUser, APIRepo } from '../../@types/customTypes';
import { useLocalStorage } from '../../hooks/useLocalStorage';

// interface Data is a state of the component that can receives a user loaded as soon as we load the page/component. They are optional as they can throw an error if the user is not found.
interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

export const ProfilePage: FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true;
    } else {
      return false;
    }
  } );
  
  const navigate = useNavigate();

  if (isLoggedIn === false) {
    navigate('/login');
  }

  // hook to get username from url params
  const { username = 'MarcelDurganteDev' } = useParams();
  // data type APIUSer or APIRepo or APIError
  const [data, setData] = useState<Data>();

  // const [slicedRepos, setSlicedRepos] = useState<APIRepo[]>([]);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/login');
  //   }
  // }, [isLoggedIn]);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`)
    ]).then(async responses => {
      // Response 1 User response and Response 2 Repos response
      const [userResponse, reposResponse] = responses;
      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }
      const user = await userResponse.json();
      const repos = await reposResponse.json();

      // randomize the order of the RepositoriesPagelist. Output the first 6 repositories
      const shuffledRepos = repos.sort(() => Math.random() - 0.5);
      // Array of 6 repositories
      const slicedRepos = shuffledRepos.slice(0, 6);
      setData({
        user,
        repos: slicedRepos
      });
    });
  }, [username]);

  // useEffect( () => {
  //  const sortedRepos = data.repos.sort( () => Math.random() - 0.5 );
  //  const slicedRepos = sortedRepos.slice( 0, 6 );
  //  setSlicedRepos( slicedRepos );
  // }, [data.repos] );

  // if data error show message to user, else show profile data and repositories
  if (data?.error) {
    return <h1>{data.error}</h1>;
  }
  //if data (user or repo) is not loaded yet, show loading message
  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  /**
   * @description: TabContent is used to display the bar of tabs in the right side of the Profile Page.
   *
   * @returns: JSX. Element TabContent component with: RepositoryIcon and the number of RepositoriesPageof the user.
   *
   * @todo: implement overview and projects tabs
   */

  const TabContent = () => (
    <div className='content'>
      <RepositoryIcon />
      <span className='label'>Repositories</span>
      <span className='number'>{data.user?.public_repos}</span>
    </div>
  );

  return (
    <Container>
      <Tab className='desktop'>
        <div className='wrapper'>
          <span className='offset' />
          <TabContent />
        </div>
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />
        </LeftSide>

        <RightSide>
          <Tab className='mobile'>
            <TabContent />
            <span className='line'></span>
          </Tab>

          <RepositoriesPage>
            <h2>Repositories</h2>
            <div>
              {data.repos.map(repo => (
                <RepositoryCard
                  key={repo.name}
                  username={repo.owner.login}
                  reponame={repo.name}
                  description={repo.description}
                  language={repo.language}
                  stars={repo.stargazers_count}
                  forks={repo.forks}
                />
              ))}
            </div>
          </RepositoriesPage>
        </RightSide>
      </Main>
    </Container>
  );
};

export default ProfilePage;
