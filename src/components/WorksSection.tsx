import React, { useState, useRef } from 'react';
import { ProjectItem } from '../types';
import { CheckCircle, Award, Calendar, FileText, ArrowUpRight, Search, Upload, Image as ImageIcon } from 'lucide-react';

interface WorksSectionProps {
  projects: ProjectItem[];
  onSelectProject?: (project: ProjectItem) => void;
  onUpdateProject?: (updatedProject: ProjectItem) => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({
  projects,
  onSelectProject,
  onUpdateProject,
}) => {
  const [filter, setFilter] = useState<string>('All');
  const [activeUploadId, setActiveUploadId] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category).filter(Boolean))) as string[]];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  const handleTriggerUpload = (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation();
    setActiveUploadId(projectId);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeUploadId) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        const targetProject = projects.find((p) => p.id === activeUploadId);
        if (targetProject && onUpdateProject) {
          onUpdateProject({
            ...targetProject,
            image: dataUrl,
          });
        }
      }
    };
    reader.readAsDataURL(file);
    setActiveUploadId(null);
  };

  return (
    <section id="works" className="bg-white py-12 sm:py-16 md:py-20 border-t border-neutral-200 scroll-mt-24">
      {/* Target anchor for direct #certificates navigation */}
      <div id="certificates" className="scroll-mt-24" />
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Hidden File Input for Direct Original File Upload */}
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
          aria-hidden="true"
        />

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black pb-5 mb-8 sm:mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fe4300]/10 text-[#fe4300] text-xs font-semibold mb-2.5">
              <Award size={14} />
              <span>Verified Documents &amp; Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
              Certificates &amp; Offer Letters
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 max-w-2xl">
              Official credentials, national competition awards, ambassadorships, and verified offer letters. Click any document card to view the full verification details.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">Total Verified</span>
            <span className="text-xl sm:text-2xl font-extrabold text-[#fe4300]">
              ( {projects.length < 10 ? `0${projects.length}` : projects.length} )
            </span>
          </div>
        </div>

        {/* Filter Categories */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 no-print">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  filter === cat
                    ? 'bg-[#fe4300] text-white shadow-xs'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Compact Certificates & Documents Grid (Without sprawling text blocks) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id || idx}
              id={`cert-card-${project.id || idx}`}
              onClick={() => onSelectProject?.(project)}
              className="group bg-white rounded-xl border border-neutral-200 hover:border-[#fe4300]/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between overflow-hidden cursor-pointer"
            >
              {/* Top: Authentic Document Picture Frame */}
              <div className="relative bg-neutral-50 p-3 sm:p-4 flex flex-col items-center justify-center border-b border-neutral-100">
                <div className="w-full relative rounded-lg overflow-hidden border border-neutral-200/90 bg-white aspect-[16/11] flex items-center justify-center shadow-xs">
                  <img
                    alt={project.title}
                    src={project.image}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/images/work/techfest-iit-bombay-offer-letter.svg';
                    }}
                    className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Action Button */}
                  <div className="absolute inset-0 bg-neutral-950/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-3 text-center">
                    <span className="w-10 h-10 rounded-full bg-[#fe4300] text-white flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <Search size={18} />
                    </span>
                    <span className="text-white text-xs font-semibold drop-shadow-xs">
                      Click to View Full Details
                    </span>
                  </div>

                  {/* Quick Upload Original File Button */}
                  <button
                    type="button"
                    title="Upload or replace with your original picture"
                    onClick={(e) => handleTriggerUpload(e, project.id)}
                    className="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 hover:bg-white text-neutral-700 hover:text-[#fe4300] shadow-xs border border-neutral-200/80 transition-colors z-10"
                  >
                    <Upload size={13} />
                  </button>
                </div>
              </div>

              {/* Bottom: Compact Information Area (NO expanded text boxes) */}
              <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between gap-3">
                <div className="space-y-2">
                  {/* Category Pill & Issue Date */}
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="inline-flex items-center gap-1 font-semibold px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-800 border border-neutral-200">
                      <FileText size={11} className="text-[#fe4300]" />
                      {project.documentType || 'Official Credential'}
                    </span>
                    {project.issueDate && (
                      <span className="inline-flex items-center gap-1 text-[11px] text-neutral-500 font-medium truncate max-w-[130px]">
                        <Calendar size={11} />
                        {project.issueDate}
                      </span>
                    )}
                  </div>

                  {/* Document Title */}
                  <h3 className="text-base sm:text-lg font-bold text-neutral-950 group-hover:text-[#fe4300] transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Organization / Client */}
                  <div className="flex items-center gap-1.5 text-xs text-neutral-600">
                    <span className="font-semibold text-neutral-900 truncate">{project.client}</span>
                    <CheckCircle size={13} className="text-emerald-600 shrink-0" />
                  </div>
                </div>

                {/* Footer Action Row */}
                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                  <span className="flex items-center gap-1 font-medium text-neutral-500">
                    <ImageIcon size={13} className="text-[#fe4300]" />
                    <span>Official Document</span>
                  </span>
                  
                  <span className="inline-flex items-center gap-1 text-[#fe4300] font-semibold group-hover:underline">
                    <span>View Details</span>
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
