import React, { useState } from 'react';
import { Download, Eye, Trophy, Loader2, Menu, X, Award, Briefcase, Sparkles, PhoneCall } from 'lucide-react';
import { downloadResumePdfFromElement } from '../utils/pdfGenerator';

interface NavbarProps {
  onOpenResumeModal?: () => void;
  userName?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResumeModal,
  userName = 'Praveen Kumar',
}) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleDownloadPdf = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDownloading(true);
    await downloadResumePdfFromElement({
      filename: 'Praveen_Kumar_Resume.pdf',
      elementId: 'resume-export-sheet',
      onComplete: () => setIsDownloading(false),
      onError: () => setIsDownloading(false),
    });
  };

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      window.history.pushState(null, '', `#${targetId}`);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    {
      label: 'Achievements',
      href: '#achievements',
      id: 'achievements',
      isSpecial: true,
    },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Certificates', href: '#works', id: 'works' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="navbar top-0 left-0 z-50 w-full absolute no-print bg-transparent">
      <div className="container mx-auto px-4 max-w-7xl">
        <nav className="py-5 sm:py-7">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Left: Personalized Praveen Kumar Monogram Brand (Replacing generic S logo) */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5 sm:gap-3 group transition-transform hover:scale-102"
                aria-label="Praveen Kumar Home"
                title="Praveen Kumar - Back to top"
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-950 text-white flex items-center justify-center font-bold text-sm sm:text-base tracking-wider shadow-xs group-hover:bg-[#fe4300] transition-colors shrink-0">
                  PK
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-neutral-950 text-base sm:text-lg tracking-tight leading-tight group-hover:text-[#fe4300] transition-colors">
                    {userName}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-medium text-neutral-500 tracking-wider">
                    CSBS &bull; FinTech
                  </span>
                </div>
              </a>

              {/* Desktop Quick Navigation Links - Direct Clickable Anchors */}
              <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-700">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`transition-colors py-1 ${
                      link.isSpecial
                        ? 'hover:text-[#fe4300] flex items-center gap-1.5 font-semibold text-neutral-900 bg-neutral-100/80 px-2.5 py-1 rounded-full'
                        : 'hover:text-[#fe4300]'
                    }`}
                  >
                    {link.isSpecial && <Trophy size={13} className="text-[#fe4300]" />}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Actions (Preview, Download PDF, Mobile Menu Toggle) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* View Resume in Modal Button */}
              {onOpenResumeModal && (
                <button
                  type="button"
                  onClick={onOpenResumeModal}
                  className="px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-full border border-neutral-300 bg-white text-xs sm:text-sm font-medium hover:border-neutral-900 hover:text-neutral-950 transition-colors flex items-center gap-1.5 text-neutral-700 shadow-xs"
                  title="Preview official ATS resume modal"
                >
                  <Eye size={14} />
                  <span className="hidden md:inline">Preview</span>
                </button>
              )}

              {/* Signature Download PDF Resume Button matching exact preview size */}
              <a
                href="/Praveen_Kumar_Resume.pdf"
                download="Praveen_Kumar_Resume.pdf"
                onClick={handleDownloadPdf}
                className="resume-btn group py-2 sm:py-3 px-3.5 sm:px-6 md:px-7 bg-white shadow-xs inline-flex items-center cursor-pointer"
                title="Download Praveen Kumar Resume PDF matching preview dimensions"
              >
                <span className="relative z-10 flex items-center gap-2 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-black group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {isDownloading ? (
                    <Loader2 size={16} className="animate-spin text-[#fe4300] group-hover:text-white" />
                  ) : (
                    <Download size={16} className="transition-transform group-hover:-translate-y-0.5" />
                  )}
                  <span>{isDownloading ? 'Generating PDF...' : 'Download PDF'}</span>
                </span>
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-full border border-neutral-300 bg-white text-neutral-800 hover:text-[#fe4300] hover:border-[#fe4300] transition-colors shadow-xs ml-1"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              >
                {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Dropdown Menu (Direct Clickable Anchors) */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-3 p-4 bg-white/95 backdrop-blur-md rounded-2xl border border-neutral-200 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200 z-50">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      link.isSpecial
                        ? 'bg-[#fe4300]/10 text-[#fe4300] font-semibold'
                        : 'text-neutral-800 hover:bg-neutral-100 hover:text-[#fe4300]'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {link.isSpecial && <Trophy size={16} className="text-[#fe4300]" />}
                      <span>{link.label}</span>
                    </span>
                    <span className="text-xs text-neutral-400">&rarr;</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
