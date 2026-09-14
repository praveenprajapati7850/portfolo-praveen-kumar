import React from 'react';
import { PersonalInfo } from '../types';
import { QrCode } from 'lucide-react';

interface ContactBarProps {
  personal: PersonalInfo;
}

export const ContactBar: React.FC<ContactBarProps> = ({ personal }) => {
  return (
    <section className="border-t border-neutral-200 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6 md:py-7">
          {/* Direct contact items */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6 md:gap-8 lg:gap-11">
            <a
              className="flex items-center gap-2.5 lg:gap-3 text-sm md:text-base group"
              href={`mailto:${personal.email}`}
            >
              <img
                alt="email"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                src="/images/icon/mail-icon.svg"
              />
              <span className="text-sm md:text-base xl:text-lg text-neutral-800 group-hover:text-[#fe4300] transition-colors font-medium">
                {personal.email}
              </span>
            </a>

            <a
              className="flex items-center gap-2.5 lg:gap-3 text-sm md:text-base group"
              href={`tel:${personal.phone.replace(/\s+/g, '')}`}
            >
              <img
                alt="phone"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                src="/images/icon/call-icon.svg"
              />
              <span className="text-sm md:text-base xl:text-lg text-neutral-800 group-hover:text-[#fe4300] transition-colors font-medium">
                {personal.phone}
              </span>
            </a>

            <a
              className="flex items-center gap-2.5 lg:gap-3 text-sm md:text-base group"
              href={personal.website.startsWith('http') ? personal.website : `https://${personal.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="website"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6 shrink-0"
                src="/images/icon/web-icon.svg"
              />
              <span className="text-sm md:text-base xl:text-lg text-neutral-800 group-hover:text-[#fe4300] transition-colors font-medium">
                {personal.location}
              </span>
            </a>
          </div>

          {/* Social media icons and QR quick link */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-4">
            <a
              id="btn-contactbar-scan-qr"
              href="#scan-to-connect-hub"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('scan-to-connect-hub');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  window.history.pushState(null, '', '#scan-to-connect-hub');
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900 hover:bg-[#fe4300] text-white text-xs font-semibold transition-all hover:scale-105 shadow-xs cursor-pointer"
              title="Scan QR codes to connect on mobile"
            >
              <QrCode size={14} className="text-[#fe4300] text-white" />
              <span>Scan QR Hub</span>
            </a>

            <a
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              title="LinkedIn"
            >
              <img
                alt="linkedin"
                width={28}
                height={28}
                className="w-7 h-7 hover:opacity-80 transition-opacity"
                src="/images/icon/linkedin-icon.svg"
              />
            </a>
            <a
              href={
                personal.socials.github && personal.socials.github !== 'https://github.com' && personal.socials.github !== 'https://github.com/'
                  ? personal.socials.github
                  : 'https://github.com/praveenprajapati7850'
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform text-neutral-800 hover:text-[#fe4300]"
              title="GitHub"
            >
              <img
                alt="github"
                width={28}
                height={28}
                className="w-7 h-7 hover:opacity-80 transition-opacity"
                src="/images/icon/github-icon.svg"
              />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="hover:scale-110 transition-transform"
              title="Direct Email"
            >
              <img
                alt="direct mail"
                width={28}
                height={28}
                className="w-7 h-7 hover:opacity-80 transition-opacity"
                src="/images/icon/mail-icon.svg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
