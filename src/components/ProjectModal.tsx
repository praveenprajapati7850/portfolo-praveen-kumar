import React from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Award, CheckCircle, Calendar, FileText, UserCheck, KeyRound, ArrowUpRight } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onUpdateProject?: (updatedProject: ProjectItem) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/75 backdrop-blur-xs no-print animate-in fade-in duration-200 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white border border-neutral-200 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#fe4300]/10 text-[#fe4300]">
              <Award size={18} />
            </span>
            <div>
              <p className="text-xs font-semibold text-[#fe4300] uppercase tracking-wider">
                {project.documentType || 'Official Credential'}
              </p>
              <h3 className="text-base sm:text-lg font-bold text-neutral-950 truncate max-w-md sm:max-w-xl">
                {project.title}
              </h3>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors shrink-0 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content: Complete and Detailed */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Authentic Document Frame */}
          <div className="rounded-xl border border-neutral-200 bg-neutral-100 p-2 sm:p-4 flex items-center justify-center shadow-inner relative group">
            <img
              src={project.image}
              alt={project.title}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/work/techfest-iit-bombay-offer-letter.svg';
              }}
              className="w-full h-auto max-h-[500px] object-contain rounded-lg shadow-sm bg-white"
            />
          </div>

          {/* Full Detailed Explanation Box */}
          <div className="bg-neutral-50 rounded-xl p-5 border border-neutral-200 flex flex-col gap-4">
            <div className="flex flex-wrap items-start justify-between gap-2 border-b border-neutral-200/80 pb-3">
              <div>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-950">
                  {project.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-sm text-neutral-600">
                  <span className="font-semibold text-neutral-900">{project.client}</span>
                  <CheckCircle size={15} className="text-emerald-600 shrink-0" />
                </div>
              </div>

              {project.category && (
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#fe4300]/10 text-[#fe4300] border border-[#fe4300]/20">
                  {project.category}
                </span>
              )}
            </div>

            {/* Metadata Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-600">
              {project.issueDate && (
                <div className="flex items-center gap-2">
                  <Calendar size={15} className="text-[#fe4300] shrink-0" />
                  <span><strong>Date / Tenure:</strong> {project.issueDate}</span>
                </div>
              )}
              {project.credentialId && (
                <div className="flex items-center gap-2">
                  <KeyRound size={15} className="text-[#fe4300] shrink-0" />
                  <span className="truncate"><strong>Credential Ref:</strong> {project.credentialId}</span>
                </div>
              )}
              {project.signatories && (
                <div className="flex items-center gap-2 sm:col-span-2">
                  <UserCheck size={15} className="text-[#fe4300] shrink-0" />
                  <span><strong>Signatories / Coordination:</strong> {project.signatories}</span>
                </div>
              )}
            </div>

            {/* Full Detailed Description */}
            <div className="pt-2 border-t border-neutral-200/80">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                Official Document Overview:
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Key Assessment Highlights */}
            {project.keyHighlights && project.keyHighlights.length > 0 && (
              <div className="pt-2 border-t border-neutral-200/80">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                  Verified Highlights &amp; Scope:
                </p>
                <ul className="space-y-1.5">
                  {project.keyHighlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                      <span className="text-[#fe4300] font-bold mt-0.5">•</span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Skill / Domain Tags */}
          {project.tags && project.tags.length > 0 && (
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Associated Domains &amp; Competencies:
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-200 bg-neutral-50 sticky bottom-0 z-20">
          <a
            href={project.image}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs sm:text-sm font-semibold text-[#fe4300] hover:underline flex items-center gap-1.5"
          >
            <FileText size={15} />
            <span>Open Original Image View</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full border border-neutral-300 text-xs sm:text-sm font-semibold hover:bg-neutral-100 transition-colors"
            >
              Close
            </button>
            {project.link && project.link !== '#contact' && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#fe4300] text-white text-xs sm:text-sm font-semibold hover:bg-[#e03b00] transition-colors flex items-center gap-1.5 shadow-xs"
              >
                <span>Visit Organization</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
