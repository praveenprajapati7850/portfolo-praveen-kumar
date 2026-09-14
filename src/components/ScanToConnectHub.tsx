import React, { useState, useEffect, useRef } from 'react';
import QRCode from 'qrcode';
import { PersonalInfo } from '../types';
import {
  QrCode,
  Camera,
  Download,
  ExternalLink,
  Copy,
  Check,
  Linkedin,
  Github,
  Mail,
  FileText,
  Smartphone,
  MessageSquare,
  Sparkles,
  RefreshCw,
  FolderGit2,
  Globe,
  Link2,
} from 'lucide-react';

interface ScanToConnectHubProps {
  personal: PersonalInfo;
  className?: string;
}

export interface QRTabOption {
  id: 'linkedin' | 'vcard' | 'whatsapp' | 'github' | 'email' | 'resume';
  label: string;
  shortLabel: string;
  badge: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  accentColor: string;
  title: string;
  description: string;
  previewText: string;
  targetContent: string;
  isExternalLink: boolean;
  actionButtonText: string;
  actionButtonHref?: string;
  filename: string;
}

interface RepoOption {
  id: string;
  label: string;
  short: string;
  url: string;
  preview: string;
  description: string;
  filename: string;
}

const GITHUB_REPO_LIST: RepoOption[] = [
  {
    id: 'all',
    label: 'All Repositories',
    short: 'All Repos',
    url: 'https://github.com/praveenprajapati7850?tab=repositories',
    preview: 'github.com/praveenprajapati7850?tab=repositories',
    description: 'Browse all 4 public open-source repositories and data science projects by Praveen.',
    filename: 'Praveen_Kumar_All_Repos_QR.png',
  },
  {
    id: 'agri',
    label: 'Seasonal Agriculture ML',
    short: 'Agri Yield ML',
    url: 'https://github.com/praveenprajapati7850/SEASONAL-AGRICULTURE-PERFORMANCE-ANALYSIS',
    preview: 'github.com/praveenprajapati7850/SEASONAL-AGRICULTURE-PERFORMANCE-ANALYSIS',
    description: 'Python & machine learning model predicting Indian seasonal crop yields and rainfall impacts.',
    filename: 'Praveen_Kumar_Agri_ML_Repo_QR.png',
  },
  {
    id: 'airbnb',
    label: 'Airbnb Booking EDA',
    short: 'Airbnb EDA',
    url: 'https://github.com/praveenprajapati7850/Airbnb-Hotel-Booking-Analysis',
    preview: 'github.com/praveenprajapati7850/Airbnb-Hotel-Booking-Analysis',
    description: 'Exploratory data analysis of 119k+ hotel reservations identifying cancellation drivers.',
    filename: 'Praveen_Kumar_Airbnb_EDA_Repo_QR.png',
  },
  {
    id: 'ai',
    label: 'Ask Praveen AI',
    short: 'Ask AI Bot',
    url: 'https://github.com/praveenprajapati7850/ask-praveen-ai',
    preview: 'github.com/praveenprajapati7850/ask-praveen-ai',
    description: 'Autonomous conversational assistant powered by Google Gemini and modern TypeScript.',
    filename: 'Praveen_Kumar_AskAI_Repo_QR.png',
  },
  {
    id: 'site',
    label: 'Portfolio Repo',
    short: 'Portfolio Code',
    url: 'https://github.com/praveenprajapati7850/praveenprajapati7850.github.io',
    preview: 'github.com/praveenprajapati7850/praveenprajapati7850.github.io',
    description: 'Official GitHub Pages deployment repository and static assets for praveenkumarverma.me.',
    filename: 'Praveen_Kumar_Portfolio_Repo_QR.png',
  },
];

interface ResumeDestinationOption {
  id: 'live-web' | 'linkedin' | 'cloud';
  label: string;
  badge: string;
  url: string;
  preview: string;
  description: string;
  actionText: string;
  filename: string;
}

export const ScanToConnectHub: React.FC<ScanToConnectHubProps> = ({ personal, className = '' }) => {
  const targetEmail = personal.email || 'praveenkumar78509@gmail.com';
  const cleanPhone = (personal.phone || '+91 7850909557').replace(/\s+/g, '');
  const verifiedGithub =
    personal.socials?.github &&
    personal.socials.github !== 'https://github.com' &&
    personal.socials.github !== 'https://github.com/'
      ? personal.socials.github
      : 'https://github.com/praveenprajapati7850';

  const [activeTabId, setActiveTabId] = useState<QRTabOption['id']>('linkedin');
  const [selectedRepoId, setSelectedRepoId] = useState<string>('all');
  const [resumeMode, setResumeMode] = useState<'live-web' | 'linkedin' | 'cloud'>('live-web');
  const [customCloudResumeUrl, setCustomCloudResumeUrl] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('praveen_custom_cloud_resume_url') || '';
    }
    return '';
  });
  const [isEditingCloudUrl, setIsEditingCloudUrl] = useState<boolean>(false);
  const [tempCloudUrl, setTempCloudUrl] = useState<string>(customCloudResumeUrl);

  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(true);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const qrCacheRef = useRef<Record<string, string>>({});

  // Construct standard vCard 3.0 string
  const vCardContent = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    'N:Kumar;Praveen;;;',
    `FN:${personal.name}`,
    'ORG:Pondicherry University',
    `TITLE:${personal.role}`,
    `TEL;TYPE=CELL,VOICE:${cleanPhone}`,
    `EMAIL;TYPE=INTERNET,WORK:${targetEmail}`,
    'URL:https://praveenkumarverma.me',
    `URL;TYPE=LinkedIn:${personal.socials?.linkedin || 'https://www.linkedin.com/in/praveen-kumar-907443384'}`,
    `URL;TYPE=GitHub:${verifiedGithub}`,
    `ADR;TYPE=WORK:;;Pondicherry University;Puducherry;;605014;India`,
    `NOTE:Aspire Leader '26 | CSBS & FinTech | ISRO Space Quiz Top 100 Winner (Nov '25)`,
    'END:VCARD',
  ].join('\n');

  const mailtoUrl = `mailto:${targetEmail}?subject=Portfolio%20Inquiry%20from%20Mobile&body=Hi%20Praveen,%0A%0AI%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you%20regarding%20an%20opportunity.`;
  const whatsappUrl = `https://wa.me/917850909557?text=Hi%20Praveen,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect.`;

  // Active GitHub repository selection
  const activeRepo = GITHUB_REPO_LIST.find((r) => r.id === selectedRepoId) || GITHUB_REPO_LIST[0];

  // Resume destination options:
  // Live Web CV on praveenkumarverma.me is 100% accessible without any AI Studio cookie restrictions!
  const resumeOptions: Record<'live-web' | 'linkedin' | 'cloud', ResumeDestinationOption> = {
    'live-web': {
      id: 'live-web',
      label: 'Live Web CV',
      badge: 'Public & Mobile Ready',
      url: 'https://praveenkumarverma.me',
      preview: 'https://praveenkumarverma.me (Direct Public Domain)',
      description: 'Point your camera to view Praveen’s verified online curriculum vitae and project portfolio on any phone browser without login requirements.',
      actionText: 'Open Live Web CV',
      filename: 'Praveen_Kumar_LiveCV_QR.png',
    },
    linkedin: {
      id: 'linkedin',
      label: 'LinkedIn Verified Profile',
      badge: 'LinkedIn App',
      url: personal.socials?.linkedin || 'https://www.linkedin.com/in/praveen-kumar-907443384',
      preview: 'linkedin.com/in/praveen-kumar-907443384',
      description: 'Scan to open Praveen’s verified career profile, academic background, and leadership credentials directly in the LinkedIn mobile app.',
      actionText: 'Open LinkedIn Profile',
      filename: 'Praveen_Kumar_LinkedIn_CV_QR.png',
    },
    cloud: {
      id: 'cloud',
      label: 'Custom Cloud / Drive PDF',
      badge: 'Cloud Document',
      url: customCloudResumeUrl || 'https://praveenkumarverma.me',
      preview: customCloudResumeUrl ? customCloudResumeUrl : 'Google Drive / Dropbox / GitHub PDF Link',
      description: 'Scan to open a direct cloud-hosted PDF file (e.g., Google Drive or GitHub release link).',
      actionText: customCloudResumeUrl ? 'Open Cloud Document' : 'Configure Cloud Link',
      filename: 'Praveen_Kumar_CloudResume_QR.png',
    },
  };

  const activeResumeOption = resumeOptions[resumeMode];

  const tabs: QRTabOption[] = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      shortLabel: 'LinkedIn',
      badge: 'Professional Network',
      icon: Linkedin,
      accentColor: '#0A66C2',
      title: 'Connect on LinkedIn',
      description: 'Point your camera to open Praveen’s verified LinkedIn profile directly in the LinkedIn app.',
      previewText: 'linkedin.com/in/praveen-kumar-907443384',
      targetContent: personal.socials?.linkedin || 'https://www.linkedin.com/in/praveen-kumar-907443384',
      isExternalLink: true,
      actionButtonText: 'Open LinkedIn Profile',
      actionButtonHref: personal.socials?.linkedin || 'https://www.linkedin.com/in/praveen-kumar-907443384',
      filename: 'Praveen_Kumar_LinkedIn_QR.png',
    },
    {
      id: 'vcard',
      label: 'vCard (Save Contact)',
      shortLabel: 'vCard',
      badge: '1-Tap Save Contact',
      icon: Smartphone,
      accentColor: '#10B981',
      title: 'Digital Business Card (vCard)',
      description: 'Point your phone camera to trigger the native "Add to Contacts" sheet with phone (+91 78509 09557), email, and university credentials.',
      previewText: `${personal.name} • ${cleanPhone} • ${targetEmail}`,
      targetContent: vCardContent,
      isExternalLink: false,
      actionButtonText: 'Save vCard File (.vcf)',
      filename: 'Praveen_Kumar_vCard_QR.png',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      shortLabel: 'WhatsApp',
      badge: 'Instant Messaging',
      icon: MessageSquare,
      accentColor: '#25D366',
      title: 'Direct WhatsApp Chat',
      description: 'Scan to open an immediate WhatsApp conversation with Praveen without needing to manually save his phone number first.',
      previewText: '+91 78509 09557 (Direct WhatsApp)',
      targetContent: whatsappUrl,
      isExternalLink: true,
      actionButtonText: 'Open WhatsApp Chat',
      actionButtonHref: whatsappUrl,
      filename: 'Praveen_Kumar_WhatsApp_QR.png',
    },
    {
      id: 'github',
      label: 'GitHub Repos',
      shortLabel: 'GitHub',
      badge: 'Open Source Code',
      icon: Github,
      accentColor: '#171717',
      title: `GitHub: ${activeRepo.label}`,
      description: activeRepo.description,
      previewText: activeRepo.preview,
      targetContent: activeRepo.url,
      isExternalLink: true,
      actionButtonText: 'View on GitHub',
      actionButtonHref: activeRepo.url,
      filename: activeRepo.filename,
    },
    {
      id: 'email',
      label: 'Direct Email',
      shortLabel: 'Email',
      badge: 'Default Mail App',
      icon: Mail,
      accentColor: '#FE4300',
      title: 'Send Direct Email (mailto)',
      description: 'Scan to pre-fill a message draft directly in your phone’s default mail app (Apple Mail, Gmail, Outlook).',
      previewText: targetEmail,
      targetContent: mailtoUrl,
      isExternalLink: true,
      actionButtonText: 'Compose Email Now',
      actionButtonHref: mailtoUrl,
      filename: 'Praveen_Kumar_Email_QR.png',
    },
    {
      id: 'resume',
      label: 'Resume & CV',
      shortLabel: 'Resume',
      badge: activeResumeOption.badge,
      icon: FileText,
      accentColor: '#4F46E5',
      title: `Curriculum Vitae: ${activeResumeOption.label}`,
      description: activeResumeOption.description,
      previewText: activeResumeOption.preview,
      targetContent: activeResumeOption.url,
      isExternalLink: true,
      actionButtonText: activeResumeOption.actionText,
      actionButtonHref: activeResumeOption.url,
      filename: activeResumeOption.filename,
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  // Generate crisp QR code on tab or parameter changes
  useEffect(() => {
    let isMounted = true;
    const cacheKey = `${currentTab.id}-${currentTab.targetContent}`;

    if (qrCacheRef.current[cacheKey]) {
      setQrDataUrl(qrCacheRef.current[cacheKey]);
      setIsGenerating(false);
      return;
    }

    setIsGenerating(true);
    QRCode.toDataURL(currentTab.targetContent, {
      width: 440,
      margin: 1.5,
      color: {
        dark: '#0f172a',
        light: '#ffffff',
      },
      errorCorrectionLevel: currentTab.id === 'vcard' ? 'L' : 'M',
    })
      .then((url) => {
        if (isMounted) {
          qrCacheRef.current[cacheKey] = url;
          setQrDataUrl(url);
          setIsGenerating(false);
        }
      })
      .catch((err) => {
        console.error('Failed to generate QR code:', err);
        if (isMounted) {
          setIsGenerating(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [currentTab.id, currentTab.targetContent]);

  const handleDownloadQr = () => {
    if (!qrDataUrl) return;
    const link = document.createElement('a');
    link.href = qrDataUrl;
    link.download = currentTab.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyLinkOrContent = () => {
    const textToCopy =
      currentTab.id === 'vcard'
        ? vCardContent
        : currentTab.actionButtonHref || currentTab.targetContent;
    navigator.clipboard.writeText(textToCopy);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2200);
  };

  const handleDownloadVcardDirect = () => {
    const blob = new Blob([vCardContent], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Praveen_Kumar_Contact.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleSaveCustomCloudUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = tempCloudUrl.trim();
    setCustomCloudResumeUrl(cleaned);
    if (typeof window !== 'undefined') {
      localStorage.setItem('praveen_custom_cloud_resume_url', cleaned);
    }
    setIsEditingCloudUrl(false);
  };

  return (
    <div
      id="scan-to-connect-hub"
      className={`rounded-2xl bg-white border border-neutral-200 shadow-sm overflow-hidden flex flex-col ${className}`}
    >
      {/* Top Banner Header */}
      <div className="p-4 sm:p-5 bg-neutral-900 text-white flex flex-wrap items-center justify-between gap-3 border-b border-neutral-800">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#fe4300] flex items-center justify-center text-white shrink-0 shadow-xs">
            <QrCode size={18} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                Scan to Connect Hub
              </h3>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Camera Ready
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-neutral-400">
              Interactive vector QR codes for instant mobile networking &amp; repository cloning
            </p>
          </div>
        </div>

        {/* Scan with Camera Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-semibold shadow-xs">
          <Camera size={13} className="text-[#fe4300]" />
          <span>Point Phone Camera</span>
        </div>
      </div>

      {/* Tabs Selector Navigation */}
      <div className="p-2 sm:p-3 bg-neutral-50/90 border-b border-neutral-200 overflow-x-auto scrollbar-none">
        <div className="flex items-center gap-1.5 min-w-max">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                id={`btn-qr-tab-${tab.id}`}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-white text-neutral-700 hover:bg-neutral-200/70 border border-neutral-200'
                }`}
                title={`Switch to ${tab.label} QR Code`}
              >
                <Icon
                  size={14}
                  className={isActive ? 'text-[#fe4300]' : 'text-neutral-500'}
                />
                <span>{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Tab Showcase Area */}
      <div className="p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* QR Code Presentation Frame */}
        <div className="flex flex-col items-center shrink-0">
          <div className="relative p-3 bg-white rounded-2xl border-2 border-neutral-200 shadow-md group transition-all hover:border-[#fe4300]">
            {/* Corner Decorative Target Markers */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#fe4300] rounded-tl-sm pointer-events-none" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#fe4300] rounded-tr-sm pointer-events-none" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#fe4300] rounded-bl-sm pointer-events-none" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#fe4300] rounded-br-sm pointer-events-none" />

            {/* QR Image */}
            <div className="w-44 h-44 sm:w-48 sm:h-48 flex items-center justify-center bg-neutral-50 rounded-xl overflow-hidden">
              {isGenerating || !qrDataUrl ? (
                <div className="flex flex-col items-center gap-2 text-neutral-400">
                  <RefreshCw size={22} className="animate-spin text-[#fe4300]" />
                  <span className="text-[11px] font-medium">Generating QR...</span>
                </div>
              ) : (
                <img
                  id={`img-qr-code-${currentTab.id}`}
                  src={qrDataUrl}
                  alt={`${currentTab.title} QR Code`}
                  width={192}
                  height={192}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>

          {/* Quick Download Button below QR */}
          <button
            id={`btn-download-qr-${currentTab.id}`}
            type="button"
            onClick={handleDownloadQr}
            disabled={!qrDataUrl || isGenerating}
            className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors cursor-pointer border border-neutral-200 disabled:opacity-50"
            title="Download crisp QR code image (PNG)"
          >
            <Download size={13} className="text-[#fe4300]" />
            <span>Download PNG</span>
          </button>
        </div>

        {/* Informative Column & Actions */}
        <div className="flex-1 flex flex-col justify-between self-stretch text-center sm:text-left">
          <div>
            {/* Category Tag & Live Camera Badge */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-orange-50 text-[#fe4300] border border-orange-200">
                {currentTab.badge}
              </span>
              <span className="text-[11px] text-neutral-500 font-mono">
                {currentTab.shortLabel} Code
              </span>
            </div>

            {/* Title & Description */}
            <h4 className="text-base sm:text-lg font-bold text-neutral-950 tracking-tight mb-1">
              {currentTab.title}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-3">
              {currentTab.description}
            </p>

            {/* SPECIAL SUB-SELECTOR: GitHub Repository Selector */}
            {currentTab.id === 'github' && (
              <div className="mb-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700 mb-2">
                  <FolderGit2 size={14} className="text-[#fe4300]" />
                  <span>Select Target Repository to Scan:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {GITHUB_REPO_LIST.map((repo) => {
                    const isSelected = repo.id === selectedRepoId;
                    return (
                      <button
                        key={repo.id}
                        id={`btn-repo-select-${repo.id}`}
                        type="button"
                        onClick={() => setSelectedRepoId(repo.id)}
                        className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-900 text-white shadow-xs'
                            : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                        }`}
                        title={repo.label}
                      >
                        {repo.short}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* SPECIAL SUB-SELECTOR: Resume Destination Mode Selector */}
            {currentTab.id === 'resume' && (
              <div className="mb-4 p-3 bg-neutral-50 rounded-xl border border-neutral-200 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-700">
                    <Globe size={14} className="text-[#fe4300]" />
                    <span>Mobile Destination for Phone Camera:</span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Accessible Without Login
                  </span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  <button
                    type="button"
                    onClick={() => setResumeMode('live-web')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      resumeMode === 'live-web'
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                    }`}
                    title="Praveen's Live Verified Curriculum Vitae on GitHub Pages"
                  >
                    Live Web CV (Recommended)
                  </button>
                  <button
                    type="button"
                    onClick={() => setResumeMode('linkedin')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      resumeMode === 'linkedin'
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                    }`}
                    title="Open LinkedIn Verified Experience"
                  >
                    LinkedIn Verified Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => setResumeMode('cloud')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      resumeMode === 'cloud'
                        ? 'bg-neutral-900 text-white shadow-xs'
                        : 'bg-white text-neutral-700 hover:bg-neutral-200 border border-neutral-200'
                    }`}
                    title="Google Drive / Cloud Hosted PDF Link"
                  >
                    Custom Drive / PDF Link
                  </button>
                </div>

                {resumeMode === 'cloud' && (
                  <div className="pt-2 border-t border-neutral-200">
                    {isEditingCloudUrl ? (
                      <form onSubmit={handleSaveCustomCloudUrl} className="flex gap-2">
                        <input
                          type="url"
                          value={tempCloudUrl}
                          onChange={(e) => setTempCloudUrl(e.target.value)}
                          placeholder="Paste Google Drive / Dropbox / GitHub PDF link..."
                          className="flex-1 px-2.5 py-1.5 text-xs rounded-lg border border-neutral-300 bg-white text-neutral-900 focus:border-[#fe4300] outline-none"
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="px-3 py-1.5 rounded-lg bg-[#fe4300] text-white text-xs font-semibold hover:bg-[#ea3e00] cursor-pointer"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsEditingCloudUrl(false)}
                          className="px-2.5 py-1.5 rounded-lg bg-neutral-200 text-neutral-700 text-xs hover:bg-neutral-300 cursor-pointer"
                        >
                          Cancel
                        </button>
                      </form>
                    ) : (
                      <div className="flex items-center justify-between gap-2 text-xs">
                        <span className="text-neutral-600 truncate font-mono text-[11px]">
                          {customCloudResumeUrl || 'No custom Drive link entered yet (defaults to live CV)'}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setTempCloudUrl(customCloudResumeUrl);
                            setIsEditingCloudUrl(true);
                          }}
                          className="inline-flex items-center gap-1 text-[#fe4300] hover:underline font-semibold cursor-pointer shrink-0"
                        >
                          <Link2 size={12} />
                          <span>{customCloudResumeUrl ? 'Edit Link' : 'Add Drive Link'}</span>
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Preview Label Box */}
            <div className="p-3 bg-neutral-50 rounded-xl border border-neutral-200/90 mb-4 text-left">
              <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider mb-0.5">
                Target Destination URL:
              </p>
              <p className="text-xs font-semibold text-neutral-900 font-mono break-all leading-tight">
                {currentTab.previewText}
              </p>
            </div>
          </div>

          {/* Interactive Action Buttons */}
          <div className="pt-1 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {/* Primary Action Button */}
            {currentTab.id === 'vcard' ? (
              <button
                id="btn-action-save-vcard"
                type="button"
                onClick={handleDownloadVcardDirect}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-950 hover:bg-[#fe4300] text-white text-xs font-semibold transition-colors cursor-pointer shadow-xs"
                title="Download contact file (.vcf) directly"
              >
                <Smartphone size={14} />
                <span>Save vCard (.vcf)</span>
              </button>
            ) : (
              <a
                id={`btn-action-open-${currentTab.id}`}
                href={currentTab.actionButtonHref}
                target={currentTab.id === 'email' ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-950 hover:bg-[#fe4300] text-white text-xs font-semibold transition-colors shadow-xs"
                title={`Launch ${currentTab.label} directly`}
              >
                <span>{currentTab.actionButtonText}</span>
                <ExternalLink size={13} />
              </a>
            )}

            {/* Extra Direct PDF Download Button for Resume Tab */}
            {currentTab.id === 'resume' && (
              <a
                id="btn-action-download-local-pdf"
                href="/Praveen_Kumar_Resume.pdf"
                download="Praveen_Kumar_Resume.pdf"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#fe4300] hover:bg-[#ea3e00] text-white text-xs font-semibold transition-colors shadow-xs"
                title="Download ATS 2-Page Resume PDF file directly"
              >
                <Download size={13} />
                <span>Download ATS PDF File</span>
              </a>
            )}

            {/* Copy Link / Content Button */}
            <button
              id={`btn-copy-target-${currentTab.id}`}
              type="button"
              onClick={handleCopyLinkOrContent}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold transition-colors cursor-pointer border border-neutral-200"
              title="Copy destination link or content to clipboard"
            >
              {copiedLink ? (
                <>
                  <Check size={13} className="text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={13} className="text-neutral-500" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Quick Footer Advice */}
      <div className="px-5 py-2.5 bg-neutral-50 border-t border-neutral-200 flex items-center justify-between text-[11px] text-neutral-500">
        <span className="flex items-center gap-1.5">
          <Sparkles size={12} className="text-[#fe4300]" />
          <span>Compatible with iOS Camera, Google Lens, Samsung Camera &amp; WeChat</span>
        </span>
        <span className="hidden sm:inline font-mono text-[10px]">
          Vector QR 440px
        </span>
      </div>
    </div>
  );
};
