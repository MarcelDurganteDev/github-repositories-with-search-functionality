import { FC, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../store/contexts/UserContext';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  RepositoriesList,
  RepositoryIcon,
  Tab,
  LogoutButton
} from './profilePageStyles';

import Header from '../../components/Header/Header';
import ProfileData from '../../components/ProfileData/ProfileData';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';
import { APIUser, APIRepo } from '../../@types/customTypes';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

export const Profile: FC = () => {
  // get username from url params
  const { username = 'MarcelDurganteDev' } = useParams();
  const [data, setData] = useState<Data>();
  const { isLoggedIn, performLogout } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`)
    ]).then(async responses => {
      const [userResponse, repoResponse] = responses;
      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }
      const user = await userResponse.json();
      const repos = await repoResponse.json();
      // randomize the order of the repositories list
      const shuffledRepos = repos.sort(() => Math.random() - 0.5);
      //output the first 6 repositories
      const slicedRepos = shuffledRepos.slice(0, 6);
      //slicedRepos is an array of 6 repositories
      setData({ user, repos: slicedRepos });
    });
  }, [username]);

  // if data error show message to user else show profile data and repositories
  if (data?.error) {
    return <h1>{data.error}</h1>;
  }
  //if data (user or repo) is not loaded yet, show loading message
  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <div className='content'>
      <RepositoryIcon />
      <span className='label'>Repositories</span>
      {/* if I don't use 'data.user?' I get undefined error. This I believe is because here I am not sure if user is loaded or not */}
      <span className='number'>{data.user?.public_repos}</span>
    </div>
  );

  return (
    <>
      <Header />
      <Container>
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
            <LogoutButton onClick={performLogout}>Logout</LogoutButton>
          </LeftSide>
          <RightSide>
            <Tab className='mobile'>
              <TabContent />
              <span className='line'></span>
            </Tab>
            {/* @TODO repo list */}
            <RepositoriesList>
              <h2>Repositories</h2>
              <div>
                {data.repos.map(repo => (
                  <RepositoryCard
                    // not sure whether is best to use name or id as key
                    // @TODO: check this
                    key={repo.name}
                    username={repo.owner.login}
                    reponame={repo.name}
                    description={repo.description}
                    // not sure if this is the best way to do this but I do not want all to be just one lenguage. So for testing I will use this.
                    language={repo.language}
                    stars={repo.stargazers_count}
                    forks={repo.forks}
                  />
                ))}
              </div>
            </RepositoriesList>
            {/* @TODO: <RandomCalendar /> . Try find a replacement for react-heatmap-calendar that is not working with React 18.1.0 
          Check this one if time allows  https://www.npmjs.com/package/@uiw/react-heat-map
          */}
          </RightSide>
        </Main>
      </Container>
    </>
  );
};

export default Profile;
