import React, { useState, useEffect, useMemo } from 'react';
import { GitHubRepoItem } from '../types';
import { defaultGitHubRepos } from '../data/githubReposData';
import {
  Github,
  GitBranch,
  Star,
  GitFork,
  ExternalLink,
  Copy,
  Check,
  Code2,
  PieChart as PieChartIcon,
  BarChart3,
  Sparkles,
  RefreshCw,
  FolderGit2,
  Terminal,
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

interface GitHubProjectsSectionProps {
  githubUrl?: string;
  userName?: string;
}

// Language color mapper
function getLanguageColor(lang: string | null): string {
  switch (lang?.toLowerCase()) {
    case 'typescript':
      return '#3178C6';
    case 'javascript':
      return '#f1e05a';
    case 'python':
    case 'jupyter notebook':
      return '#3572A5';
    case 'html':
    case 'css':
    case 'html/css':
      return '#e34c26';
    case 'c':
    case 'c++':
      return '#555555';
    case 'sql':
      return '#e38c00';
    default:
      return '#fe4300';
  }
}

// Category detector
function getRepoCategory(name: string, desc: string, lang: string | null): 'Data Analytics' | 'AI & Full-Stack' | 'Web & Portfolio' {
  const combined = `${name} ${desc} ${lang}`.toLowerCase();
  if (
    combined.includes('ai') ||
    combined.includes('gemini') ||
    combined.includes('chat') ||
    combined.includes('bot') ||
    combined.includes('llm') ||
    combined.includes('assistant')
  ) {
    return 'AI & Full-Stack';
  }
  if (
    combined.includes('data') ||
    combined.includes('analytics') ||
    combined.includes('crop') ||
    combined.includes('eda') ||
    combined.includes('yield') ||
    combined.includes('python') ||
    combined.includes('jupyter')
  ) {
    return 'Data Analytics';
  }
  return 'Web & Portfolio';
}

// Tech stack generator
function getTechStack(name: string, desc: string, lang: string | null): string[] {
  const stack: string[] = [];
  if (lang) stack.push(lang);
  const combined = `${name} ${desc}`.toLowerCase();
  if (combined.includes('portfolio') || combined.includes('react')) stack.push('React 19', 'Tailwind CSS', 'Vite');
  if (combined.includes('gemini') || combined.includes('ai')) stack.push('Gemini AI', 'Express');
  if (combined.includes('pandas') || combined.includes('analysis') || combined.includes('eda')) stack.push('Pandas', 'NumPy', 'Matplotlib');
  if (combined.includes('pages')) stack.push('GitHub Pages');
  return Array.from(new Set(stack)).slice(0, 5);
}

export const GitHubProjectsSection: React.FC<GitHubProjectsSectionProps> = ({
  githubUrl = 'https://github.com/praveenprajapati7850',
  userName = 'Praveen Kumar',
}) => {
  const [repos, setRepos] = useState<GitHubRepoItem[]>(defaultGitHubRepos);
  const [filter, setFilter] = useState<string>('All');
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [lastSynced, setLastSynced] = useState<string>('Live Connected');

  // Dynamically compute Language Distribution from active repos
  const languageDistributionData = useMemo(() => {
    const langCounts: Record<string, { count: number; color: string }> = {};
    repos.forEach((r) => {
      const lang = r.language || 'Other';
      if (!langCounts[lang]) {
        langCounts[lang] = { count: 0, color: r.languageColor || '#fe4300' };
      }
      langCounts[lang].count += 1;
    });
    const total = repos.length || 1;
    return Object.entries(langCounts).map(([name, item]) => ({
      name,
      value: Math.round((item.count / total) * 100),
      color: item.color,
      count: item.count,
    }));
  }, [repos]);

  // Dynamically compute Repository Data & Code Scale
  const repoScaleData = useMemo(() => {
    return [...repos]
      .sort((a, b) => b.sizeKb - a.sizeKb)
      .slice(0, 5)
      .map((r) => {
        const sizeMb = (r.sizeKb / 1024).toFixed(1);
        const label = r.sizeKb >= 1024 ? `${sizeMb} MB` : `${r.sizeKb} KB`;
        const shortName = r.name.length > 15 ? r.name.substring(0, 13) + '...' : r.name;
        return {
          name: shortName,
          fullName: r.name,
          sizeKb: r.sizeKb,
          label,
          category: r.category,
        };
      });
  }, [repos]);

  // Fetch real GitHub repos dynamically from public API to automatically discover new repos
  const syncWithGitHub = async () => {
    setIsSyncing(true);
    try {
      const res = await fetch('https://api.github.com/users/praveenprajapati7850/repos?per_page=100&sort=updated');
      if (res.ok) {
        const liveRepos = await res.json();
        if (Array.isArray(liveRepos) && liveRepos.length > 0) {
          setRepos((prevRepos) => {
            const merged: GitHubRepoItem[] = liveRepos.map((lr: any) => {
              const existing = prevRepos.find(
                (item) => item.name.toLowerCase() === lr.name.toLowerCase()
              ) || defaultGitHubRepos.find(
                (item) => item.name.toLowerCase() === lr.name.toLowerCase()
              );

              const updatedDate = new Date(lr.pushed_at || lr.updated_at);
              const dateStr = !isNaN(updatedDate.getTime())
                ? updatedDate.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
                : 'Sep 2026';

              if (existing) {
                return {
                  ...existing,
                  name: lr.name,
                  fullName: lr.full_name,
                  stars: lr.stargazers_count ?? existing.stars,
                  forks: lr.forks_count ?? existing.forks,
                  sizeKb: lr.size ?? existing.sizeKb,
                  defaultBranch: lr.default_branch || existing.defaultBranch,
                  updatedAt: dateStr,
                  htmlUrl: lr.html_url || existing.htmlUrl,
                  cloneUrl: lr.clone_url || existing.cloneUrl,
                };
              }

              // Brand new repository automatically detected from user's GitHub
              const lang = lr.language || 'TypeScript';
              const langColor = getLanguageColor(lang);
              const category = getRepoCategory(lr.name, lr.description || '', lang);
              const techStack = getTechStack(lr.name, lr.description || '', lang);

              return {
                id: `repo-${lr.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
                name: lr.name,
                fullName: lr.full_name || `praveenprajapati7850/${lr.name}`,
                description: lr.description || `Open-source ${category} repository engineered by Praveen Kumar.`,
                htmlUrl: lr.html_url,
                language: lang,
                languageColor: langColor,
                category: category,
                techStack: techStack.length > 0 ? techStack : [lang, 'Git', 'Open Source'],
                stars: lr.stargazers_count ?? 0,
                forks: lr.forks_count ?? 0,
                sizeKb: lr.size ?? 100,
                updatedAt: dateStr,
                defaultBranch: lr.default_branch || 'main',
                cloneUrl: lr.clone_url || `https://github.com/praveenprajapati7850/${lr.name}.git`,
                highlights: [
                  `Active open-source repository deployed on GitHub (@praveenprajapati7850)`,
                  `Engineered with modern ${lang} architecture and automated version control`,
                  `Full open-source codebase available for cloning and inspection`,
                ],
                demoUrl: lr.homepage || undefined,
              };
            });

            // Ensure any curated default items are preserved if not present in liveRepos
            defaultGitHubRepos.forEach((def) => {
              if (!merged.some((m) => m.name.toLowerCase() === def.name.toLowerCase())) {
                merged.push(def);
              }
            });

            return merged;
          });
          setLastSynced('Live Synced');
        }
      }
    } catch {
      // Gracefully fall back to verified default dataset
    } finally {
      setIsSyncing(false);
    }
  };

  useEffect(() => {
    syncWithGitHub();
  }, []);

  const handleCopyClone = (cloneUrl: string, id: string) => {
    navigator.clipboard.writeText(`git clone ${cloneUrl}`);
    setCopiedCloneId(id);
    setTimeout(() => setCopiedCloneId(null), 2200);
  };

  const categories = ['All', 'Data Analytics', 'AI & Full-Stack', 'Web & Portfolio'];

  const filteredRepos =
    filter === 'All' ? repos : repos.filter((r) => r.category === filter);

  return (
    <section
      id="projects"
      className="bg-white py-14 sm:py-20 md:py-24 border-t border-neutral-200 scroll-mt-24 no-print"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-black pb-5 sm:pb-7 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold mb-2.5 shadow-xs">
              <FolderGit2 size={13} className="text-[#fe4300]" />
              <span>Verified GitHub Projects</span>
            </div>
            <h2
              id="github-projects-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-950"
            >
              Projects &amp; Code Repositories
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-neutral-600 mt-2 max-w-2xl leading-relaxed">
              Open-source repositories engineered by {userName} spanning FinTech data analysis, Python statistical models, and Gemini AI integration.
            </p>
          </div>

          {/* Right Header Status & Sync Button */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              id="btn-visit-github-profile"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 text-xs sm:text-sm font-semibold transition-colors border border-neutral-200"
              title="Open Praveen Kumar's GitHub Profile"
            >
              <Github size={15} />
              <span>@praveenprajapati7850</span>
              <ExternalLink size={12} className="text-neutral-500" />
            </a>

            <button
              id="btn-sync-github-repos"
              type="button"
              onClick={syncWithGitHub}
              disabled={isSyncing}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-neutral-300 hover:border-[#fe4300] text-xs font-medium text-neutral-700 hover:text-[#fe4300] transition-colors cursor-pointer disabled:opacity-50"
              title="Refresh repository statistics directly from GitHub API"
            >
              <RefreshCw size={12} className={isSyncing ? 'animate-spin text-[#fe4300]' : ''} />
              <span>{isSyncing ? 'Syncing...' : lastSynced}</span>
            </button>

            <span className="text-xl sm:text-2xl font-bold text-[#fe4300]">
              ( {repos.length < 10 ? `0${repos.length}` : repos.length} )
            </span>
          </div>
        </div>

        {/* Visualizations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          {/* Chart 1: Language & Stack Distribution Donut */}
          <div
            id="chart-language-distribution"
            className="lg:col-span-5 p-5 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between shadow-xs"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                  <PieChartIcon size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">
                    Language &amp; Tech Distribution
                  </h3>
                  <p className="text-xs text-neutral-500">Repository volume by technology</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800">
                {repos.length} Repos
              </span>
            </div>

            {/* Donut Chart */}
            <div className="w-full flex items-center justify-center my-2" style={{ height: 210 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={languageDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {languageDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <RechartsTooltip
                    formatter={(val: number, name: string) => [`${val}% Share`, name]}
                    contentStyle={{
                      backgroundColor: '#171717',
                      color: '#ffffff',
                      borderRadius: '8px',
                      fontSize: '12px',
                      border: 'none',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legend breakdown */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-200">
              {languageDistributionData.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-[11px] font-semibold text-neutral-800 truncate">
                      {item.name.split(' ')[0]}
                    </span>
                  </div>
                  <span className="text-[10px] text-neutral-500 pl-4">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2: Repository Data Scale & Footprint */}
          <div
            id="chart-repo-scale"
            className="lg:col-span-4 p-5 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between shadow-xs"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                  <BarChart3 size={16} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-neutral-900">
                    Repository Scale &amp; Scope
                  </h3>
                  <p className="text-xs text-neutral-500">Data size &amp; code complexity</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                Live Dynamic
              </span>
            </div>

            {/* Horizontal Bar Chart */}
            <div className="w-full my-2" style={{ height: 210 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={repoScaleData}
                  layout="vertical"
                  margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e5e5" />
                  <XAxis type="number" hide />
                  <YAxis
                    dataKey="name"
                    type="category"
                    tick={{ fontSize: 11, fill: '#525252' }}
                    width={90}
                  />
                  <RechartsTooltip
                    formatter={(val: number, _name: string, props) => [
                      props.payload.label,
                      'Dataset & Code Size',
                    ]}
                    contentStyle={{
                      backgroundColor: '#171717',
                      color: '#ffffff',
                      borderRadius: '8px',
                      fontSize: '12px',
                      border: 'none',
                    }}
                  />
                  <Bar dataKey="sizeKb" radius={[0, 6, 6, 0]}>
                    {repoScaleData.map((_entry, index) => {
                      const colors = ['#3572A5', '#10B981', '#FE4300', '#3178C6', '#8B5CF6', '#F59E0B'];
                      return <Cell key={`cell-bar-${index}`} fill={colors[index % colors.length]} />;
                    })}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <p className="text-[11px] text-neutral-500 pt-2 border-t border-neutral-200">
              *Features large-scale real-world Airbnb open data datasets &amp; agricultural precipitation records.
            </p>
          </div>

          {/* Quick Stats & Core Focus */}
          <div
            id="card-github-meta-highlights"
            className="lg:col-span-3 p-5 sm:p-6 rounded-2xl bg-neutral-900 text-white flex flex-col justify-between shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-[#fe4300] flex items-center justify-center text-white shrink-0 font-bold text-xs">
                  PK
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Engineering Highlights</h4>
                  <p className="text-xs text-neutral-400">Pondicherry University</p>
                </div>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4300] mt-1.5 shrink-0" />
                  <p className="text-xs text-neutral-300">
                    <strong className="text-white">FinTech &amp; Data:</strong> Python, Pandas, NumPy, statistical modeling, and economic analysis.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4300] mt-1.5 shrink-0" />
                  <p className="text-xs text-neutral-300">
                    <strong className="text-white">Generative AI:</strong> LLM integration with Google Gemini 2.5 Flash API and prompt engineering.
                  </p>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fe4300] mt-1.5 shrink-0" />
                  <p className="text-xs text-neutral-300">
                    <strong className="text-white">Deployment:</strong> GitHub Actions, Pages apex DNS routing, and CI/CD best practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-neutral-800 flex items-center justify-between">
              <span className="text-xs text-neutral-400">Open-Source Code</span>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#fe4300] hover:underline flex items-center gap-1"
              >
                Follow on GitHub <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                filter === cat
                  ? 'bg-[#fe4300] text-white shadow-xs'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700'
              }`}
            >
              {cat}
              <span className="ml-1.5 text-xs opacity-75">
                (
                {cat === 'All'
                  ? repos.length
                  : repos.filter((r) => r.category === cat).length}
                )
              </span>
            </button>
          ))}
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredRepos.map((repo) => (
            <article
              key={repo.id}
              id={`github-repo-${repo.id}`}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-neutral-200 hover:border-neutral-900 transition-all hover:shadow-md flex flex-col justify-between group relative"
            >
              <div>
                {/* Header: Title, Category & GitHub Link */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-800 group-hover:bg-[#fe4300] group-hover:text-white transition-colors shrink-0">
                      <Code2 size={18} />
                    </div>
                    <div>
                      <a
                        href={repo.htmlUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-base sm:text-lg text-neutral-950 hover:text-[#fe4300] transition-colors flex items-center gap-1.5 group/title"
                      >
                        <span className="truncate max-w-[220px] sm:max-w-xs">{repo.name}</span>
                        <ExternalLink size={14} className="opacity-0 group-hover/title:opacity-100 transition-opacity shrink-0" />
                      </a>
                      <span className="text-[11px] text-neutral-500 font-mono">
                        {repo.fullName}
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200 shrink-0">
                    {repo.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4">
                  {repo.description}
                </p>

                {/* Key Engineering Highlights */}
                {repo.highlights && repo.highlights.length > 0 && (
                  <div className="mb-4 space-y-1.5 bg-neutral-50/70 p-3 rounded-xl border border-neutral-100">
                    <p className="text-[11px] font-bold text-neutral-700 uppercase tracking-wider">
                      Key Methodologies:
                    </p>
                    <ul className="space-y-1 text-xs text-neutral-700 list-disc list-outside ml-3.5">
                      {repo.highlights.map((item, idx) => (
                        <li key={idx} className="leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {repo.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions & Meta Bar */}
              <div className="pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                {/* Meta details */}
                <div className="flex items-center gap-3 text-neutral-600">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: repo.languageColor }}
                    />
                    <span className="font-semibold text-neutral-800">{repo.language}</span>
                  </div>

                  <span className="text-neutral-300">&bull;</span>

                  <div className="flex items-center gap-1" title="Default branch">
                    <GitBranch size={13} className="text-neutral-400" />
                    <span>{repo.defaultBranch}</span>
                  </div>

                  <span className="text-neutral-300">&bull;</span>

                  <span className="text-neutral-500">{repo.updatedAt}</span>
                </div>

                {/* Interactive Action Buttons */}
                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  {/* Copy Clone Command */}
                  <button
                    id={`btn-clone-${repo.id}`}
                    type="button"
                    onClick={() => handleCopyClone(repo.cloneUrl, repo.id)}
                    className="px-2.5 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                    title={`Copy git clone command: git clone ${repo.cloneUrl}`}
                  >
                    {copiedCloneId === repo.id ? (
                      <>
                        <Check size={13} className="text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Terminal size={13} className="text-neutral-500" />
                        <span>Clone</span>
                      </>
                    )}
                  </button>

                  {/* External Repo Link */}
                  <a
                    id={`link-repo-${repo.id}`}
                    href={repo.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-neutral-900 hover:bg-[#fe4300] text-white font-medium text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Repo</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner with GitHub CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-neutral-950 text-white flex items-center justify-center shrink-0 shadow-md">
              <Github size={24} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950">
                Interested in collaborating or inspecting the code?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">
                Explore full commit history, Jupyter notebooks, datasets, and pull requests on GitHub.
              </p>
            </div>
          </div>

          <a
            id="btn-explore-all-repos"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn group py-3 px-6 border border-[#fe4300] rounded-full bg-white cursor-pointer shadow-xs shrink-0"
          >
            <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base font-semibold text-[#fe4300] group-hover:text-white transition-colors duration-300">
              <span>Visit @praveenprajapati7850</span>
              <ExternalLink size={15} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
