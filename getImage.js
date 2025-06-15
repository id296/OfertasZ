import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { url } = req.query;

  if (!url) return res.status(400).json({ error: 'Falta URL' });

  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const image = $('meta[property="og:image"]').attr('content');

    res.status(200).json({ image });
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener imagen' });
  }
}
