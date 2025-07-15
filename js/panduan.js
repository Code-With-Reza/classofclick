pdfjsLib.GlobalWorkerOptions.workerSrc = "../pdfjs/pdf.worker.js";

const url = "../pdf/buku.pdf";
const container = document.getElementById("pdf-container");

pdfjsLib
  .getDocument(url)
  .promise.then(function (pdfDoc) {
    for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
      pdfDoc.getPage(pageNum).then(function (page) {
        const viewport = page.getViewport({ scale: 1.2 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
          canvasContext: context,
          viewport: viewport,
        };

        page.render(renderContext);
        container.appendChild(canvas);
      });
    }
  })
  .catch(function (error) {
    console.error("PDF gagal dimuat:", error);
  });
