// pages/api/extract.js

import pdfParse from 'pdf-parse'; // Only required here in Node.js environment

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { file } = req.body;

    if (!file) {
      return res.status(400).json({ error: 'No file provided' });
    }

    const buffer = Buffer.from(file, 'base64');  // Convert base64 to buffer
    const data = await pdfParse(buffer);         // Extract text using pdf-parse

    return res.status(200).json({ text: data.text }); // Return extracted text
  } catch (err) {
    console.error('PDF Parse Error:', err);
    return res.status(500).json({ error: err.message }); // Return error if anything goes wrong
  }
}
