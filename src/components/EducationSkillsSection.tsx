import React from 'react';
import { EducationItem, SkillItem } from '../types';
import { Star } from 'lucide-react';

interface EducationSkillsSectionProps {
  education: EducationItem[];
  skills: SkillItem[];
}

export const EducationSkillsSection: React.FC<EducationSkillsSectionProps> = ({
  education,
  skills,
}) => {
  return (
    <section id="education-skills" className="border-t border-neutral-200 overflow-hidden bg-white scroll-mt-24">
      {/* Target anchor for direct #skills navigation */}
      <div id="skills" className="scroll-mt-24" />
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Background decorative vector */}
        <img
          alt="Decorative vector"
          width={260}
          height={170}
          className="no-print absolute top-0 left-0 transform -translate-y-1/2 opacity-60 pointer-events-none"
          src="/images/home/education-skill/edu-skill-vector.svg"
        />

        <div className="relative z-10 py-14 sm:py-20 md:py-28 lg:py-32">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-6 sm:pb-7 mb-8 sm:mb-12 xl:mb-16">
            <h2 className="text-neutral-950 font-bold tracking-tight">
              Education &amp; Skills
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-[#fe4300]">
              ( 03 )
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-10 xl:gap-16">
            {/* Left Column: Education Milestones */}
            <div className="w-full lg:max-w-md flex flex-col gap-8 xl:gap-10 shrink-0">
              {education.map((item, idx) => (
                <div key={item.id || idx} className="flex items-start gap-4 sm:gap-6 group">
                  <div className="no-print mt-2 w-3.5 h-3.5 rounded-full border border-neutral-950 bg-white flex items-center justify-center shrink-0 group-hover:border-[#fe4300]">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-950 group-hover:bg-[#fe4300] transition-colors" />
                  </div>

                  <div className="flex-1 flex flex-col gap-1.5">
                    <h5 className="text-lg sm:text-xl font-semibold text-neutral-950">
                      {item.institution} - {item.period}
                    </h5>
                    <p className="text-sm font-medium text-[#fe4300]">
                      {item.degree}
                    </p>
                    <p className="font-normal text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Skills Matrix Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5 xl:gap-7 w-full flex-1">
              {skills.map((skill, idx) => (
                <div
                  key={skill.id || idx}
                  className="p-4 sm:p-5 xl:p-6 border border-neutral-200 hover:border-[#fe4300]/50 rounded-xl flex flex-col gap-6 sm:gap-8 items-center justify-between bg-white shadow-2xs transition-all hover:-translate-y-1 hover:shadow-xs"
                >
                  <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <img
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                      src={skill.icon}
                    />
                    <p className="text-neutral-900 font-medium text-sm sm:text-base text-center">
                      {skill.name}
                    </p>
                  </div>

                  {/* Star Rating Indicator */}
                  <div className="flex flex-col items-center gap-1.5" title={`${skill.rating} out of 5 stars`}>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => {
                        const isFilled = star <= skill.rating;
                        return (
                          <Star
                            key={star}
                            className={`w-4 h-4 transition-transform hover:scale-110 ${
                              isFilled
                                ? 'fill-[#FE4300] text-[#FE4300]'
                                : 'fill-neutral-100 text-neutral-300'
                            }`}
                          />
                        );
                      })}
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-500 tracking-wider uppercase">
                      {skill.rating} / 5 Stars
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
