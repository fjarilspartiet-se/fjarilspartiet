import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path: docPath } = req.query;

  if (!docPath || typeof docPath !== 'string') {
    return res.status(400).json({ error: 'Document path is required' });
  }

  try {
    // Remove leading slash and decode the path
    const decodedPath = decodeURIComponent(docPath.replace(/^\//, ''));
    const filePath = path.join(process.cwd(), decodedPath);
    
    // Read the file
    const content = fs.readFileSync(filePath, 'utf8');
    
    res.status(200).json({ content });
  } catch (error) {
    console.error('Error reading document:', error);
    res.status(404).json({ error: 'Document not found' });
  }
}
