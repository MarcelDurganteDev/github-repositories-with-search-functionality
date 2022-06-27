// Typing

export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
  // may not be public hence why I am uging '?'
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
}

export interface APIRepo {
  name: string;
  owner: {
    login: string;
  }
  // number of stars on the repo 
  stargazers_count: number;
  forks: number;
  // link to redirect to the official repo page on GitHub 
  html_url: string;
  // using '?' as it might just be a text file or other without a language 
  // TODO: check if this applies, if is it possible not to have a language
  language?: string;
  description?: string;
}

