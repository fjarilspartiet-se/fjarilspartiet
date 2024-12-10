import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path: docPath } = req.query;

  console.log('API Request received for path:', docPath);

  if (!docPath || typeof docPath !== 'string') {
    console.log('Invalid path parameter');
    return res.status(400).json({ error: 'Document path is required' });
  }

  try {
    // Remove leading slash and join with process.cwd()
    const filePath = path.join(process.cwd(), 'docs/svenska', docPath);
    
    console.log('Attempting to read file:', filePath);
    console.log('Current working directory:', process.cwd());
    
    if (!fs.existsSync(filePath)) {
      console.log('File not found:', filePath);
      return res.status(404).json({ error: `Document not found: ${filePath}` });
    }

    const content = fs.readFileSync(filePath, 'utf8');
    console.log('File read successfully, length:', content.length);
    
    res.status(200).json({ content });
  } catch (error) {
    console.error('Error reading document:', error);
    res.status(500).json({ error: String(error) });
  }
}
