import { getGitHubRepos, type GitHubRepo } from "@/lib/github";
import { SectionReveal } from "./section-reveal";

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Java: "#b07219",
  C: "#555555",
  "C++": "#f34b7d",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Rust: "#dea584",
  Go: "#00ADD8",
};

function FeaturedProject({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-7 sm:p-9 rounded-xl border border-border-subtle bg-surface/50 hover:border-accent/30 transition-all duration-500"
    >
      <div className="flex items-center gap-3 mb-5">
        {repo.language && (
          <span className="flex items-center gap-1.5 text-xs text-muted">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                backgroundColor: LANG_COLORS[repo.language] || "#71717a",
              }}
            />
            {repo.language}
          </span>
        )}
        {repo.stargazers_count > 0 && (
          <span className="text-xs text-muted">
            &#9733; {repo.stargazers_count}
          </span>
        )}
      </div>
      <h3 className="text-2xl font-semibold tracking-[-0.01em] group-hover:text-accent transition-colors duration-300">
        {repo.name}
      </h3>
      <p className="text-muted text-base mt-3 leading-relaxed font-light max-w-[55ch]">
        {repo.description || "No description available."}
      </p>
      <span className="inline-flex items-center gap-1.5 text-sm text-accent mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        View on GitHub
        <svg
          className="w-3.5 h-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </span>
    </a>
  );
}

function ProjectRow({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-4 py-5 border-b border-border-subtle hover:border-accent/30 transition-all duration-300"
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
          {repo.name}
        </h3>
        <p className="text-sm text-muted mt-1 truncate font-light">
          {repo.description || "No description available."}
        </p>
      </div>
      <div className="flex items-center gap-4 shrink-0">
        {repo.language && (
          <span className="hidden sm:flex items-center gap-1.5 text-xs text-muted">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: LANG_COLORS[repo.language] || "#71717a",
              }}
            />
            {repo.language}
          </span>
        )}
        <svg
          className="w-4 h-4 text-muted group-hover:text-accent transition-colors duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 17L17 7M17 7H7M17 7v10"
          />
        </svg>
      </div>
    </a>
  );
}

export async function Projects() {
  const repos = await getGitHubRepos();
  const featured = repos[0];
  const rest = repos.slice(1);

  return (
    <section id="projects" className="py-28 sm:py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] mb-16">
            Projects
          </h2>
        </SectionReveal>

        {featured && (
          <SectionReveal delay={0.08}>
            <FeaturedProject repo={featured} />
          </SectionReveal>
        )}

        <div className="mt-4">
          {rest.map((repo, i) => (
            <SectionReveal key={repo.name} delay={0.1 + i * 0.04}>
              <ProjectRow repo={repo} />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
