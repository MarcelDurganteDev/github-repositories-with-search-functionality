/**
 * @description: Custom types for uder and repo, to extract just what we need from the API.Blog, company, email and location are optional for user. Language and description are optional for repo.
 * 
 */

export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  public_repos: number;
  avatar_url: string;
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
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}

