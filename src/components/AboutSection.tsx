import React from 'react';
import { PersonalInfo } from '../types';
import { GraduationCap, Award, TrendingUp, Globe2 } from 'lucide-react';

interface AboutSectionProps {
  personal: PersonalInfo;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ personal }) => {
  return (
    <section id="about" className="relative bg-white py-12 md:py-24 lg:py-32 overflow-hidden border-t border-neutral-200 scroll-mt-24">
      {/* Background Watermark SVG */}
      <div className="absolute top-0 w-full px-4 sm:px-9 pointer-events-none opacity-20">
        <img
          alt="resume-bg"
          width={1200}
          height={348}
          className="w-full object-cover"
          src="/images/home/about-me/resume-bg-img.svg"
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Section Header: Title & ( 01 ) */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-6 sm:pb-7">
            <h2 className="text-neutral-950 font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="text-xl sm:text-2xl font-semibold text-[#fe4300]">
              ( 01 )
            </p>
          </div>

          {/* Section Body */}
          <div className="pt-8 sm:pt-10 xl:pt-16 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-between">
            {/* Left Graphic Banner */}
            <div className="w-[280px] sm:w-[303px] h-auto max-h-[440px] hidden lg:flex shrink-0">
              <img
                alt="About Graphic"
                width={303}
                height={440}
                className="w-full h-full object-contain drop-shadow-sm"
                src="/images/home/about-me/about-banner-img.svg"
              />
            </div>

            {/* Right Details */}
            <div className="w-full lg:max-w-2xl flex-1">
              <p className="text-neutral-700 text-base sm:text-lg leading-relaxed font-normal">
                {personal.bio}
              </p>

              {/* Core Pillars / Focus Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-6">
                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-start gap-3">
                  <GraduationCap className="w-5 h-5 text-[#fe4300] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900">Integrated B.Tech + MBA</h4>
                    <p className="text-xs text-neutral-500">CSBS · Pondicherry University</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-start gap-3">
                  <Globe2 className="w-5 h-5 text-[#fe4300] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900">Aspire Leaders Cohort</h4>
                    <p className="text-xs text-neutral-500">Founded by Harvard Faculty</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-start gap-3">
                  <Award className="w-5 h-5 text-[#fe4300] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900">Vidvadhan Scholar</h4>
                    <p className="text-xs text-neutral-500">Academic &amp; Leadership Distinction</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-[#fe4300] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-900">Fintech &amp; Inclusion</h4>
                    <p className="text-xs text-neutral-500">Data &amp; Rural Impact Models</p>
                  </div>
                </div>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-3 py-8 sm:py-10 xl:py-14 gap-4 sm:gap-6 border-b border-neutral-300">
                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 mb-1">
                    {personal.yearsExperience}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-800 font-medium">
                    Leadership Cohorts
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 mb-1">
                    {personal.happyClients}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-800 font-medium">
                    Certifications
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-950 mb-1">
                    {personal.projectsCompleted}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-800 font-medium">
                    National Honors
                  </p>
                </div>
              </div>

              {/* Languages Section */}
              <div className="pt-6 sm:pt-8 xl:pt-10 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <div className="flex items-center gap-3 shrink-0">
                  <img
                    alt="Language Icon"
                    width={28}
                    height={28}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                    src="/images/icon/lang-icon.svg"
                  />
                  <span className="text-base sm:text-lg xl:text-xl font-medium text-neutral-900">
                    Languages
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {personal.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 rounded-full text-sm sm:text-base font-medium bg-white text-neutral-800 border border-neutral-300 shadow-xs"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
