// import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist';
// import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs';
// GlobalWorkerOptions.workerSrc = workerSrc;


// export async function extractTextFromPDF(file) {
//     const arrayBuffer = await file.arrayBuffer();
//     const pdf = await getDocument({ data: arrayBuffer }).promise;
  
//     let fullText = '';
  
//     for (let i = 1; i <= pdf.numPages; i++) {
//       const page = await pdf.getPage(i);
//       const content = await page.getTextContent();
//       const strings = content.items.map(item => item.str);
//       fullText += strings.join(' ') + '\n';
//     }
  
//     return fullText;
//   }