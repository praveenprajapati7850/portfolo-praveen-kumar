import React, { useState } from 'react';
import { PersonalInfo } from '../types';
import { ScanToConnectHub } from './ScanToConnectHub';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  QrCode,
} from 'lucide-react';

interface ContactSectionProps {
  personal: PersonalInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ personal }) => {
  const targetEmail = personal.email || 'praveenkumar78509@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(targetEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const mailSubject = formData.subject.trim() ? formData.subject.trim() : 'Portfolio Contact';
  const mailMessage = formData.message.trim() ? formData.message.trim() : 'I would like to get in touch.';
  const mailName = formData.name.trim() ? formData.name.trim() : 'N/A';
  const mailEmail = formData.email.trim() ? formData.email.trim() : 'N/A';
  const mailPhone = formData.phone.trim() ? formData.phone.trim() : 'N/A';

  const bodyContent = `Hi Praveen,\n\n${mailMessage}\n\nName: ${mailName}\nEmail: ${mailEmail}\nPhone: ${mailPhone}`;

  const mailtoHref = `mailto:${targetEmail}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(bodyContent)}`;
  const gmailWebHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(targetEmail)}&su=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(bodyContent)}`;

  return (
    <section id="contact" className="no-print bg-white scroll-mt-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="pt-14 sm:pt-20 md:pt-28 pb-16 md:pb-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-black pb-6 sm:pb-7 mb-8 sm:mb-12 md:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 text-white text-xs font-semibold mb-2 shadow-xs">
                <QrCode size={13} className="text-[#fe4300]" />
                <span>Message &amp; Mobile Connect</span>
              </div>
              <h2 id="contact-heading" className="text-neutral-950 font-bold tracking-tight text-2xl sm:text-3xl md:text-4xl">
                Get in Touch &amp; Connect
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 mt-1">
                Send a message directly or scan interactive QR codes to connect on mobile.
              </p>
            </div>
            <p className="text-xl sm:text-2xl font-semibold text-[#fe4300]">
              ( 07 )
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-start">
            <div id="contact-form-container" className="flex flex-col">
              <form
                id="contact-form"
                action="https://send.pageclip.co/Un8XXxeNdmrm4yYBjofcUqi44Jcy6BDC"
                className="pageclip-form"
                method="post"
              >
                <div className="flex flex-col gap-6 sm:gap-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-neutral-800">
                        Your Name <span className="text-[#fe4300]">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-transparent border-0 border-b border-neutral-300 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#fe4300] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-medium text-neutral-800">
                        Phone Number <span className="text-neutral-400 text-xs">(Optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full bg-transparent border-0 border-b border-neutral-300 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#fe4300] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-neutral-800">
                        Your Email Address <span className="text-[#fe4300]">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full bg-transparent border-0 border-b border-neutral-300 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#fe4300] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-sm font-medium text-neutral-800">
                        Inquiry Purpose
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. FinTech Project / Internship"
                        className="w-full bg-transparent border-0 border-b border-neutral-300 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#fe4300] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-neutral-800">
                      Message <span className="text-[#fe4300]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Praveen, I would like to connect with you regarding..."
                      className="w-full bg-transparent border-0 border-b border-neutral-300 py-2.5 text-base text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-[#fe4300] transition-colors resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <button
                      id="btn-contact-submit"
                      type="submit"
                      className="pageclip-form__submit resume-btn group py-3 sm:py-3.5 px-6 sm:px-8 border border-[#fe4300] rounded-full bg-white cursor-pointer shadow-xs transition-all"
                    >
                      <span className="relative z-10 flex items-center gap-2 text-base sm:text-lg font-medium text-[#fe4300] group-hover:text-white transition-colors duration-300">
                        <span>Send Message</span>
                        <Send size={16} className="transition-transform group-hover:translate-x-1" />
                      </span>
                    </button>

                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span>Or:</span>
                      <a
                        id="btn-direct-compose-link"
                        href={mailtoHref}
                        className="inline-flex items-center gap-1 font-medium text-neutral-800 hover:text-[#fe4300] underline transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        Draft in Email App
                      </a>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div id="contact-info-panel" className="flex flex-col gap-6 md:gap-8 pt-2 md:pt-0">
              <ScanToConnectHub personal={personal} />

              <div id="direct-email-card" className="p-5 sm:p-6 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#fe4300]/10 flex items-center justify-center text-[#fe4300] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                      Direct Email Inbox
                    </h3>
                    <p className="text-xs text-neutral-500">
                      Messages sent through this form arrive here:
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-white rounded-lg border border-neutral-200 mb-3">
                  <a
                    id="link-direct-email"
                    href={`mailto:${targetEmail}`}
                    className="text-sm sm:text-base font-semibold text-neutral-900 hover:text-[#fe4300] transition-colors break-all"
                  >
                    {targetEmail}
                  </a>
                  <button
                    id="btn-copy-email"
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-medium transition-colors"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <a
                    id="btn-quick-gmail"
                    href={gmailWebHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#fe4300] hover:underline font-semibold"
                  >
                    Compose in Gmail <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-neutral-300">&bull;</span>
                  <a
                    id="btn-quick-mailto"
                    href={`mailto:${targetEmail}`}
                    className="text-neutral-600 hover:text-neutral-900 underline"
                  >
                    Open Default Client
                  </a>
                </div>
              </div>

              <div id="direct-phone-location-card" className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Phone / WhatsApp
                    </p>
                    <a
                      id="link-direct-phone"
                      href={`tel:${personal.phone.replace(/\s+/g, '')}`}
                      className="text-base font-semibold text-neutral-900 hover:text-[#fe4300] transition-colors"
                    >
                      {personal.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Locations
                    </p>
                    <p className="text-sm font-medium text-neutral-800">
                      {personal.location} (Pondicherry University Campus &amp; Rajasthan)
                    </p>
                  </div>
                </div>
              </div>

              <div id="social-profiles-container" className="pt-2 border-t border-neutral-200">
                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-3">
                  Professional Networks
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    id="link-contact-linkedin"
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-800 transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                  <a
                    id="link-contact-github"
                    href={
                      personal.socials.github && personal.socials.github !== 'https://github.com' && personal.socials.github !== 'https://github.com/'
                        ? personal.socials.github
                        : 'https://github.com/praveenprajapati7850'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-800 transition-colors"
                  >
                    <span>GitHub Profile</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                  <a
                    id="link-contact-ambassador"
                    href="https://www.techfest.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-xs font-medium text-neutral-800 transition-colors"
                  >
                    <span>Techfest IIT Bombay</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
