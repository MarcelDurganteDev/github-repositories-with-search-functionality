import {FC} from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  TopSide,
  RepositoryIcon,
  BottomSide,
  StarIcon,
  ForkIcon
} from './repositoryCardStyles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepositoryCard: FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks
} ) => {

  // If language is not provided pass in lowercase the name of the language to CSS so I can change the color. If not provided, pass in 'other' wich will be the default color.
  const languageClass = language ? language.toLowerCase() : 'other';

  return (
    <Container>

      <TopSide>
        <header>
          <RepositoryIcon />
          {/* internal route page to show the repository */}
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>
        <p>{ description }</p>
      </TopSide>

      <BottomSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{`${language}`}</span>
          </li>
          <li>
          <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BottomSide>

    </Container>
  );
};

export default RepositoryCard;
