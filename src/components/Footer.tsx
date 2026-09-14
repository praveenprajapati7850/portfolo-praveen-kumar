import React from 'react';

interface FooterProps {
  userName?: string;
}

export const Footer: React.FC<FooterProps> = ({ userName = 'Praveen Kumar' }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-14 flex items-center justify-center bg-white no-print">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col gap-4 items-center">
          {/* Divider with Center Logo */}
          <div className="relative flex items-center w-full">
            <div className="grow h-px bg-neutral-950" />
            <div className="mx-4 sm:mx-6 shrink-0">
              <a
                href="#"
                className="hover:scale-105 transition-transform inline-flex items-center justify-center group"
                aria-label="Back to top"
                title="Praveen Kumar - Back to Top"
              >
                <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-neutral-950 text-white flex items-center justify-center font-bold text-sm sm:text-base tracking-wider shadow-xs group-hover:bg-[#fe4300] transition-colors">
                  PK
                </div>
              </a>
            </div>
            <div className="grow h-px bg-neutral-950" />
          </div>

          {/* Copyright notice */}
          <p className="text-sm text-neutral-500 text-center">
            {currentYear} &copy; {userName} &mdash; All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
