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
} from './profilePageStyles';

import Header from '../../components/Header/Header';
import ProfileData from '../../components/ProfileData/ProfileData';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';
import { APIUser, APIRepo } from '../../@types/customTypes';

const data = require('../../db/data.json');

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

export const Profile: FC = () => {
  // get username from url params
  const { username = 'MarcelDurganteDev' } = useParams();
  // const [data, setData] = useState<Data>();
  const { isLoggedIn } = useContext( UserContext );

  const [ slicedRepos, setSlicedRepos ] = useState<APIRepo[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn]);

  // useEffect(() => {
  //   Promise.all( [
      
  //     // fetch(`https://api.github.com/users/${username}`),
  //     // fetch(`https://api.github.com/users/${username}/repos`)
  //   ]).then(async responses => {
  //     const [userResponse, repoResponse] = responses;
  //     if ( userResponse.status === 404 ) {
  //       setData({ error: 'User not found!' });
  //       return;
  //     }
  //     const user = await userResponse.json();
  //     const repos = await repoResponse.json();

  //     // randomize the order of the repositories list
  //     //output the first 6 repositories
  //    // const slicedRepos = repos.slice(0, 6);
  //     //slicedRepos is an array of 6 repositories
  //     setData({ user, repos });
  //   });
  // }, [username] );

  useEffect( () => {
   
    const sortedRepos = data.repos.sort( () => Math.random() - 0.5 );
    const slicedRepos = sortedRepos.slice( 0, 6 );
    setSlicedRepos( slicedRepos );
  }, [data.repos] );

console.log(data);


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
          </LeftSide>
          <RightSide>
            <Tab className='mobile'>
              <TabContent />
              <span className='line'></span>
            </Tab>
            <RepositoriesList>
              <h2>Repositories</h2>
              <div>
                {slicedRepos.map( repo => (
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
            </RepositoriesList>
          </RightSide>
        </Main>
      </Container>
    </>
  );
};

export default Profile;
