import React from 'react';
import { ExperienceItem } from '../types';

interface ExperienceSectionProps {
  experiences: ExperienceItem[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
}) => {
  return (
    <section id="experience" className="py-14 sm:py-20 md:py-28 lg:py-32 bg-white scroll-mt-24">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="flex items-center justify-between gap-2 border-b border-black pb-6 sm:pb-7 mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-neutral-950 font-bold tracking-tight">
            Experience
          </h2>
          <p className="text-xl sm:text-2xl font-semibold text-[#fe4300]">
            ( 02 )
          </p>
        </div>

        {/* Experience Timeline Rows */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16">
          {experiences.map((exp, index) => {
            const isLast = index === experiences.length - 1;
            return (
              <div
                key={exp.id || index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 xl:gap-8 items-start relative group"
              >
                {/* Col 1: Year and Role */}
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 text-neutral-950">
                    {exp.year}
                  </h3>
                  <h4 className="text-base sm:text-lg font-normal text-neutral-700">
                    {exp.role}
                  </h4>
                </div>

                {/* Col 2: Timeline node + Company & Type */}
                <div className="relative pl-6 sm:pl-0">
                  {/* Vertical connecting line */}
                  {!isLast && (
                    <div className="hidden sm:block absolute left-0 top-3 w-px h-36 md:h-44 bg-neutral-200" />
                  )}

                  {/* Circle Indicator */}
                  <div className="no-print absolute left-0 top-1.5 transform -translate-x-1/2">
                    <div
                      className={`w-4 h-4 rounded-full border bg-white flex items-center justify-center transition-colors ${
                        exp.isActive
                          ? 'border-[#fe4300]'
                          : 'border-neutral-950 group-hover:border-[#fe4300]'
                      }`}
                    >
                      {exp.isActive ? (
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fe4300]" />
                      ) : (
                        <div className="w-1.5 h-1.5 rounded-full bg-transparent group-hover:bg-[#fe4300] transition-colors" />
                      )}
                    </div>
                  </div>

                  {/* Company Info */}
                  <div className="sm:pl-5 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <a
                        href={exp.companyUrl || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg sm:text-xl text-neutral-950 font-normal hover:text-[#fe4300] transition-colors"
                      >
                        {exp.company}
                      </a>
                    </div>
                    <p className="text-sm sm:text-base font-normal text-neutral-500">
                      {exp.type}
                    </p>
                  </div>
                </div>

                {/* Col 3: Description */}
                <div className="pl-6 sm:pl-0">
                  <p className="leading-relaxed text-sm sm:text-base text-neutral-700 font-normal">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
