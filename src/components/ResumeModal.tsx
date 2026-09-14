import React, { useState } from 'react';
import { X, Printer, Download, Loader2 } from 'lucide-react';
import { PersonalInfo } from '../types';
import { ResumeDocument } from './ResumeDocument';
import { downloadResumePdfFromElement } from '../utils/pdfGenerator';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  personal: PersonalInfo;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  personal,
}) => {
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = async () => {
    setIsGenerating(true);
    await downloadResumePdfFromElement({
      filename: 'Praveen_Kumar_Resume.pdf',
      elementId: 'resume-preview-sheet',
      onComplete: () => setIsGenerating(false),
      onError: () => setIsGenerating(false),
    });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 no-print animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white text-neutral-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] border border-neutral-300">
        {/* Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 bg-neutral-900 text-white border-b border-neutral-800">
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-semibold text-sm sm:text-base tracking-tight">
              Praveen Kumar — ATS-Optimized CV
            </h3>
            <span className="hidden md:inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-700">
              ATS Score: 98% (High Match)
            </span>
            <span className="hidden sm:inline-block text-[11px] font-medium bg-neutral-800 text-neutral-300 px-2 py-0.5 rounded-full border border-neutral-700">
              A4 Format (2 Pages)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#fe4300] hover:bg-[#ea3e00] text-white text-xs sm:text-sm font-medium transition-colors shadow-xs disabled:opacity-70 cursor-pointer"
              title="Download PDF File in exact preview dimensions"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs sm:text-sm font-medium transition-colors border border-neutral-700 cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Authentic Resume Paper Sheet */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 bg-neutral-100/90 flex justify-center">
          <ResumeDocument id="resume-preview-sheet" personal={personal} isExportMode={false} />
        </div>

        {/* Footer actions */}
        <div className="p-4 bg-white border-t border-neutral-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Exact 1:1 A4 standard dimensions (794px width / 210mm)</span>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleDownloadPdf}
              disabled={isGenerating}
              className="px-4 py-2 rounded-lg bg-[#fe4300] hover:bg-[#ea3e00] text-white text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-70"
              title="Download official PDF resume file matching preview size"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1.5 border border-neutral-200 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-neutral-200 hover:bg-neutral-300 text-neutral-800 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

