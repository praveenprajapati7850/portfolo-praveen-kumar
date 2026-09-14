import React, { useState } from 'react';
import { AchievementItem, ProjectItem } from '../types';
import { Trophy, Award, ExternalLink, FileText, CheckCircle2, Star, Sparkles, Filter } from 'lucide-react';

interface AchievementsSectionProps {
  achievements: AchievementItem[];
  projects?: ProjectItem[];
  onSelectProject?: (project: ProjectItem) => void;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({
  achievements = [],
  projects = [],
  onSelectProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(achievements.map((a) => a.category).filter(Boolean)))];

  const filteredAchievements =
    selectedCategory === 'All'
      ? achievements
      : achievements.filter((a) => a.category === selectedCategory);

  const handleOpenProof = (achievement: AchievementItem) => {
    if (!onSelectProject) return;
    if (achievement.relatedProjectId) {
      const matched = projects.find((p) => p.id === achievement.relatedProjectId);
      if (matched) {
        onSelectProject(matched);
        return;
      }
    }
    // Fallback search by title or organization
    const matched = projects.find(
      (p) =>
        p.title.toLowerCase().includes(achievement.title.toLowerCase()) ||
        p.client.toLowerCase().includes(achievement.organization.toLowerCase())
    );
    if (matched) {
      onSelectProject(matched);
    }
  };

  return (
    <section id="achievements" className="bg-neutral-50/70 py-16 sm:py-20 md:py-24 border-t border-neutral-200 scroll-mt-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black pb-5 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe4300]/10 text-[#fe4300] text-xs font-semibold mb-2.5">
              <Trophy size={14} />
              <span>Honors, Competitions &amp; Distinctions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
              Key Achievements
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 max-w-2xl leading-relaxed">
              A comprehensive showcase of national honors, competition finalists, elite university ambassadorships, and verified industry milestones.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Total Milestones</span>
            <span className="text-xl sm:text-2xl font-extrabold text-[#fe4300]">
              ( {achievements.length < 10 ? `0${achievements.length}` : achievements.length} )
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 no-print">
          <div className="flex items-center gap-1.5 text-xs text-neutral-500 mr-1 font-medium">
            <Filter size={13} />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#fe4300] text-white shadow-xs'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredAchievements.map((item) => {
            const hasLinkedProject =
              Boolean(item.relatedProjectId && projects.some((p) => p.id === item.relatedProjectId)) ||
              Boolean(projects.some((p) => p.title.toLowerCase().includes(item.title.toLowerCase())));

            return (
              <div
                key={item.id}
                className="group relative bg-white border border-neutral-200 hover:border-[#fe4300]/60 rounded-xl p-5 sm:p-6 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Category Pill + Year */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                      {item.category}
                    </span>
                    <span className="text-xs font-semibold text-neutral-500">
                      {item.year}
                    </span>
                  </div>

                  {/* Title & Badge */}
                  <h3 className="text-base sm:text-lg font-bold text-neutral-900 group-hover:text-[#fe4300] transition-colors leading-snug mb-1.5">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs font-medium text-neutral-600 mb-3">
                    <CheckCircle2 size={13} className="text-[#fe4300] shrink-0" />
                    <span className="line-clamp-1">{item.organization}</span>
                  </div>

                  {/* Distinction Badge */}
                  {item.badge && (
                    <div className="mb-3 inline-block">
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md bg-[#fe4300]/10 text-[#fe4300] border border-[#fe4300]/20">
                        <Sparkles size={11} />
                        {item.badge}
                      </span>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs sm:text-[13px] text-neutral-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {item.highlights && item.highlights.length > 0 && (
                    <div className="space-y-1.5 mb-4 pt-3 border-t border-neutral-100">
                      {item.highlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11.5px] text-neutral-700">
                          <span className="text-[#fe4300] font-bold mt-0.5">•</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Card Action */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between gap-2 mt-auto">
                  {item.credentialId ? (
                    <span className="text-[11px] text-neutral-400 font-mono">
                      Ref: {item.credentialId}
                    </span>
                  ) : (
                    <span className="text-[11px] text-neutral-400">Verified Milestone</span>
                  )}

                  {hasLinkedProject ? (
                    <button
                      type="button"
                      onClick={() => handleOpenProof(item)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-neutral-900 hover:bg-[#fe4300] text-white text-[11px] font-medium transition-colors cursor-pointer shadow-2xs"
                      title="View verified credential & proof"
                    >
                      <FileText size={12} />
                      <span>View Proof</span>
                    </button>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 font-medium">
                      <CheckCircle2 size={12} />
                      <span>Verified Record</span>
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
