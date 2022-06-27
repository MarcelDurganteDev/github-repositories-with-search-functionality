import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Main,
  LeftSide,
  RightSide,
  RepositoriesList,
  RepositoryIcon,
  Tab
} from './profileStyles';
import ProfileData from '../../components/ProfileData/ProfileData';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';
import { APIUser, APIRepo } from '../../@types/customTypes';

//  receives user, repositories, and/or error data (so I can show the error message) from the API
// '?' optional case sth is not found/error
interface Data {
  user?: APIUser;
  // list of repositories
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  // get username from url params
  const { username = 'MarcelDurganteDev' } = useParams();
  const [data, setData] = useState<Data>();
  // after comoponent is mounted, get user data from API
  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`)
    ]).then(async responses => {
      // console.log(responses);
      // console.log( [
      //   await responses[0].json(),
      //   await responses[1].json(),
      // ]);
      const [userResponse, repoResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }

      const user = await userResponse.json();
      const repos = await repoResponse.json();

      setData({
        user,
        repos
      });
    });
  }, [] );

  // if data error show message to user else show profile data and repositories
  if ( data?.error ) {
    return <h1>{data.error}</h1>;
  }
// if data (user or repo) is not loaded yet, show loading message 
  if ( !data?.user || !data?.repos ) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <div className='content'>
      <RepositoryIcon />
      <span className='label'>Repositories</span>
      <span className='number'>81</span>
    </div>
  );

  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'MarcelDurganteDev'}
            name={'MarcelDurganteDev'}
            avatarUrl={'https://avatars.githubusercontent.com/u/92659392?v=4'}
            followers={1}
            following={2}
            company={'Marcel Durgante Dev'}
            location={'Barcelona, Spain'}
            email={'info@marceldurgante.dev'}
            blog={'https://www.linkedin.com/in/marcel-dev/'}
          />
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
              {[1, 2, 3, 4, 5, 6].map(n => (
                <RepositoryCard
                  key={n}
                  username={'MarcelDurganteDev'}
                  reponame={'repo-name'}
                  description={'repo-description'}
                  // not sure if this is the best way to do this but I do not want all to be just one lenguage. So for testing I will use this.
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={1}
                  forks={1}
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
  );
};

export default Profile;
