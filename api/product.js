const fs = require('fs');
const path = require('path');

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'product.json');

  try {
    // Read the file asynchronously
    const data = await fs.promises.readFile(filePath, 'utf8');
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(data);

  } catch (err) {
    console.error('Error reading file:', err);
    res.status(500).json({ error: 'Failed to read product.json' });
  }
}
