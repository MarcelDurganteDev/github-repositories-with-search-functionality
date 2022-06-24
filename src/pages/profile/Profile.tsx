import React from 'react';

import { Container, Main, LeftSide, RightSide } from './profileStyles';

import ProfileData from '../../components/profileData/ProfileData';

const Profile: React.FC = () => {
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
        <RightSide></RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
