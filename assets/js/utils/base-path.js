// ローカルかGitHub Pageかを判別
export function getBasePath() {
  const repo = "Maybe515-Studio";
  const isGitHubPages = location.hostname.endsWith("github.io");

  return isGitHubPages ? `/${repo}` : "";
}
