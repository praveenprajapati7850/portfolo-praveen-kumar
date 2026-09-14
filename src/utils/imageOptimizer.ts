/**
 * Client-side utility to resize and compress uploaded images before storing them in state/localStorage.
 * This prevents QuotaExceededError in browser localStorage (which is limited to ~5MB total).
 */
export async function compressImageFile(
  file: File,
  maxWidth = 1000,
  maxHeight = 800,
  quality = 0.82
): Promise<string> {
  return new Promise((resolve) => {
    // If not an image, fallback to raw reader
    if (!file.type.startsWith('image/')) {
      const fallbackReader = new FileReader();
      fallbackReader.onload = () => resolve(fallbackReader.result as string);
      fallbackReader.onerror = () => resolve('');
      fallbackReader.readAsDataURL(file);
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;

        if (width > maxWidth || height > maxHeight) {
          const ratio = Math.min(maxWidth / width, maxHeight / height);
          width = Math.round(width * ratio);
          height = Math.round(height * ratio);
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          resolve(e.target?.result as string);
          return;
        }

        // Draw image smoothly onto canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Compress to JPEG or PNG
        const mimeType = file.type === 'image/png' ? 'image/jpeg' : file.type;
        const compressedDataUrl = canvas.toDataURL(mimeType, quality);
        resolve(compressedDataUrl);
      };

      img.onerror = () => {
        resolve(e.target?.result as string);
      };

      img.src = e.target?.result as string;
    };

    reader.onerror = () => resolve('');
    reader.readAsDataURL(file);
  });
}
