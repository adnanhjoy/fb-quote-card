"use strict";
function mustGetElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Required DOM element is missing: ${id}`);
    }
    return element;
}
const quoteInput = mustGetElement("quoteInput");
const quotePreview = mustGetElement("quotePreview");
const downloadButton = mustGetElement("downloadButton");
const postcard = mustGetElement("postcard");
function updatePreview() {
    quotePreview.textContent = quoteInput.value.trim();
}
async function downloadCard() {
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
