/**
 * @description: RepositoriesPage component is used to display the list of repositories. It shows Breadcrumb, link to User and Repo, Stats and LinkButton to view on GitHub.
 *
 * @returns: JSX. Element RepositoriesPage component with: Container is used to wrap the entire component.
 *
 * @interface Props Data ( in Typescript for an element to receive props, an interface must be defined )
 *
 * @props repos : repos data of the user. From APIUser call in custom hook (customTypes.tsx)
 * @props error : error data of the user. From APIUser call in custom hook (customTypes.tsx)
 *
 * @memberof RepositoriesPage
 */

import { FC, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { APIRepo } from '../../@types/customTypes';
import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon
} from './RepositoriesPageStyles';

interface Data {
  repo?: APIRepo;
  error?: string;
}

const RepositoriesPage: FC = () => {
  const { username, reponame } = useParams();
  const [data, setData] = useState<Data>();
  // const [repoData, setRepoData] = useState<Data>();

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${reponame}`).then(
      async response => {
        setData(
          response.status === 404
            ? { error: 'Repository not found!' }
            : { repo: await response.json() }
        );
      }
    );
  }, [reponame, username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }
  if (!data?.repo) {
    return <h1>Loading...</h1>;
  }

  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />

        <Link className={'username'} to={`/${username}`}>
          {username}
        </Link>

        <span>/</span>

        <Link className={'reponame'} to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </Breadcrumb>

      <p>{data.repo.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{data.repo.stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{data.repo.forks}</b>
          <span>forks</span>
        </li>
      </Stats>
      {/* href an external link that throws user to github.com/username/reponame */}
      <LinkButton href={data.repo.html_url}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default RepositoriesPage;
