const GITHUB_USERNAME = "Partharsid";
const GITHUB_API = "https://api.github.com";

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

export interface GitHubUser {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
}

export async function getGitHubUser(): Promise<GitHubUser> {
  const res = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`, {
    next: { revalidate: 3600 },
    headers: { Accept: "application/vnd.github.v3+json" },
  });
  return res.json();
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&type=public&per_page=20`,
    {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github.v3+json" },
    }
  );
  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((repo) => repo.name !== GITHUB_USERNAME)
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return (
        new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
      );
    });
}
