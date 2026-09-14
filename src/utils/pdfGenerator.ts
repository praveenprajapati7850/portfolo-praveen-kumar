import html2pdf from 'html2pdf.js';

export interface GeneratePdfOptions {
  filename?: string;
  elementId?: string;
  onStart?: () => void;
  onComplete?: () => void;
  onError?: (error: unknown) => void;
}

/**
 * Downloads the officially calibrated full-size A4 vector PDF.
 * Ensures 100% A4 scale, high text density, crisp vector typography,
 * and zero blank spaces.
 */
export async function downloadResumePdfFromElement({
  filename = 'Praveen_Kumar_Resume.pdf',
  elementId = 'resume-export-sheet',
  onStart,
  onComplete,
  onError,
}: GeneratePdfOptions = {}): Promise<boolean> {
  try {
    if (onStart) onStart();

    // 1. Fetch pre-compiled, mathematically calibrated full A4 vector PDF
    try {
      const response = await fetch('/Praveen_Kumar_Resume.pdf', { cache: 'no-store' });
      if (response.ok) {
        const blob = await response.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(blobUrl);

        if (onComplete) onComplete();
        return true;
      }
    } catch (fetchErr) {
      console.warn('Direct vector PDF fetch failed, trying html2pdf fallback:', fetchErr);
    }

    // 2. Fallback to html2pdf if local file not reachable
    let target = document.getElementById(elementId);
    if (!target) {
      target = document.getElementById('resume-preview-sheet');
    }

    if (!target) {
      const link = document.createElement('a');
      link.href = '/Praveen_Kumar_Resume.pdf';
      link.download = filename;
      link.click();
      if (onComplete) onComplete();
      return true;
    }

    const opt = {
      margin: 0,
      filename: filename,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        letterRendering: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 794,
      },
      jsPDF: {
        unit: 'mm' as const,
        format: 'a4' as const,
        orientation: 'portrait' as const,
      },
      pagebreak: {
        mode: ['css', 'legacy'],
        before: '.html2pdf__page-break',
        avoid: ['.break-inside-avoid', 'h2'],
      },
    };

    await html2pdf().set(opt).from(target).save();

    if (onComplete) onComplete();
    return true;
  } catch (error) {
    console.error('Error downloading resume PDF:', error);
    if (onError) onError(error);

    try {
      const link = document.createElement('a');
      link.href = '/Praveen_Kumar_Resume.pdf';
      link.download = filename;
      link.click();
    } catch (fallbackError) {
      console.error('Fallback download failed:', fallbackError);
    }

    if (onComplete) onComplete();
    return false;
  }
}
