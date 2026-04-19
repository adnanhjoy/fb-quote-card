declare function html2canvas(
  element: HTMLElement,
  options?: {
    useCORS?: boolean;
    allowTaint?: boolean;
    backgroundColor?: string | null;
    scale?: number;
  }
): Promise<HTMLCanvasElement>;

function mustGetElement<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) {
    throw new Error(`Required DOM element is missing: ${id}`);
  }

  return element as T;
}

const quoteInput = mustGetElement<HTMLTextAreaElement>("quoteInput");
const quotePreview = mustGetElement<HTMLParagraphElement>("quotePreview");
const downloadButton = mustGetElement<HTMLButtonElement>("downloadButton");
const postcard = mustGetElement<HTMLElement>("postcard");

function updatePreview(): void {
  quotePreview.textContent = quoteInput.value.trim();
}

async function downloadCard(): Promise<void> {
  if (document.fonts?.ready) {
    await document.fonts.ready;
  }

  const cardCanvas = await html2canvas(postcard, {
    useCORS: true,
    allowTaint: false,
    backgroundColor: null,
    scale: 3
  });

  const link = document.createElement("a");
  link.href = cardCanvas.toDataURL("image/png");
  link.download = "quote-postcard.png";
  link.click();
}

quoteInput.addEventListener("input", updatePreview);
downloadButton.addEventListener("click", () => {
  void downloadCard();
});

updatePreview();
