import React from 'react';

import { Container, Main, LeftSide, RightSide, RepositoriesList, RepositoryIcon, Tab } from './profileStyles';

import ProfileData from '../../components/ProfileData/ProfileData';
import RepositoryCard from '../../components/RepositoryCard/RepositoryCard';

const Profile: React.FC = () => {

  const TabContent = () => (
    <div className="content">
      <RepositoryIcon />
      <span className="label">Repositories</span>
      <span className="number">81</span>
    </div>
  );

  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={'MarcelDurganteDev'}
            name={'Guilherme Rodz'}
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
