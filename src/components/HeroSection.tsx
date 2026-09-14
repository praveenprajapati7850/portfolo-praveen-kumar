import React, { useRef } from 'react';
import { PersonalInfo } from '../types';
import { Code, TrendingUp, Award, Camera } from 'lucide-react';
import { compressImageFile } from '../utils/imageOptimizer';

interface HeroSectionProps {
  personal: PersonalInfo;
  onUpdateAvatar?: (avatarUrl: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ personal, onUpdateAvatar }) => {
  const heroImage = personal.avatarUrl || '/images/home/banner/praveen-banner.jpg';
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      const compressedUrl = await compressImageFile(file, 800, 800, 0.82);
      if (compressedUrl && onUpdateAvatar) {
        onUpdateAvatar(compressedUrl);
      }
    } catch {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        if (dataUrl && onUpdateAvatar) {
          onUpdateAvatar(dataUrl);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative hero-section overflow-hidden pt-28 sm:pt-36 md:pt-40 pb-12 lg:pb-28 xl:pt-48 bg-white">
      {/* Hidden input for updating hero portrait */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleAvatarFileChange}
        accept="image/*"
        className="hidden"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-8 items-center">
          {/* Left Column: Greeting & Titles */}
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl relative z-10">
            <div>
              <div className="flex items-center gap-4 sm:gap-7">
                <h1 className="tracking-tight text-neutral-950 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                  I&apos;m {personal.name}
                </h1>
                <div className="wave shrink-0">
                  <img
                    alt="wave-icon"
                    width={56}
                    height={56}
                    className="w-10 h-10 sm:w-14 sm:h-14"
                    src="/images/home/banner/wave-icon.svg"
                  />
                </div>
              </div>
              <h2 className="tracking-tight text-neutral-800 mt-2 text-xl sm:text-2xl md:text-3xl font-semibold">
                {personal.role}
              </h2>
            </div>

            <p className="text-neutral-600 font-normal text-base sm:text-lg max-w-md xl:max-w-xl leading-relaxed">
              {personal.bio}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-neutral-100 text-neutral-800 border border-neutral-200">
                <Code className="w-3.5 h-3.5 text-[#fe4300]" /> Python Developer
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-neutral-100 text-neutral-800 border border-neutral-200">
                <TrendingUp className="w-3.5 h-3.5 text-[#fe4300]" /> Fintech Researcher
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-orange-50 text-[#fe4300] border border-orange-200">
                <Award className="w-3.5 h-3.5" /> Aspire Leader &apos;26
              </span>
            </div>
          </div>

          {/* Banner Image for Mobile / Tablet */}
          <div className="block lg:hidden relative z-0 mt-6 sm:mt-0">
            <div className="relative max-w-sm sm:max-w-md mx-auto group">
              <img
                alt="Profile Graphic"
                width={685}
                height={650}
                className="w-full h-auto rounded-3xl object-contain shadow-md border border-neutral-200"
                src={heroImage}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/praveen-portrait.jpg';
                }}
              />
              {/* Change Photo Button */}
              {onUpdateAvatar && (
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  title="Upload original profile photo"
                  className="absolute top-3 right-3 px-2.5 py-1.5 rounded-lg bg-white/90 hover:bg-white text-xs font-semibold text-neutral-800 shadow-sm border border-neutral-200 flex items-center gap-1.5"
                >
                  <Camera size={13} className="text-[#fe4300]" />
                  <span>Update Photo</span>
                </button>
              )}
              {/* Floating mobile badge */}
              <div className="absolute -bottom-3 left-4 bg-white border border-neutral-200 rounded-full px-3.5 py-1.5 shadow-md flex items-center gap-2 text-xs font-semibold text-neutral-900">
                <TrendingUp className="w-3.5 h-3.5 text-[#fe4300]" /> Fintech &amp; CSBS
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Floating Right Hero Image */}
      <div className="absolute right-6 xl:right-12 top-20 hidden h-full w-[45%] lg:flex items-center justify-end">
        <div className="relative max-w-lg xl:max-w-xl group">
          {/* Subtle Graphic Backdrop Ring */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#fe4300]/10 via-transparent to-neutral-200/20 blur-xl pointer-events-none" />
          
          <img
            alt="Profile Graphic"
            width={685}
            height={650}
            className="relative z-10 w-full max-h-[75vh] rounded-3xl object-contain shadow-lg border border-neutral-200"
            src={heroImage}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/images/praveen-portrait.jpg';
            }}
          />

          {/* Change Photo Button on Desktop */}
          {onUpdateAvatar && (
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              title="Upload original profile photo"
              className="absolute top-4 right-4 z-30 px-3 py-1.5 rounded-lg bg-white/90 hover:bg-white text-xs font-semibold text-neutral-800 shadow-md border border-neutral-200 flex items-center gap-1.5 cursor-pointer opacity-90 hover:opacity-100 transition-opacity"
            >
              <Camera size={14} className="text-[#fe4300]" />
              <span>Update Original Photo</span>
            </button>
          )}

          {/* Floating Desktop Badge 1: Python */}
          <div className="absolute top-10 -left-6 z-20 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-full px-4 py-2 shadow-lg flex items-center gap-2.5 text-sm font-semibold text-neutral-900">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <Code className="w-4 h-4 text-[#fe4300]" />
            <span>Python &amp; Data</span>
          </div>

          {/* Floating Desktop Badge 2: Fintech */}
          <div className="absolute bottom-16 -left-8 z-20 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-full px-4 py-2 shadow-lg flex items-center gap-2.5 text-sm font-semibold text-neutral-900">
            <TrendingUp className="w-4 h-4 text-[#fe4300]" />
            <span>Fintech &amp; Stock Market</span>
          </div>

          {/* Floating Desktop Badge 3: ISRO Space Quiz */}
          <div className="absolute -bottom-4 right-8 z-20 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-full px-4 py-2 shadow-lg flex items-center gap-2 text-xs font-semibold text-neutral-900">
            <Award className="w-4 h-4 text-[#fe4300]" />
            <span>ISRO Space Quiz Nov &apos;25</span>
          </div>
        </div>
      </div>
    </section>
  );
};
