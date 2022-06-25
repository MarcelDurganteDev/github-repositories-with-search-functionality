import React from 'react'

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}


const RepositoryCard: React.FC<Props> = ( {
  username,
  reponame,
  description,
  language,
  stars,
  forks,
} ) => {
  return (
    <div/>
  )
}

export default RepositoryCard