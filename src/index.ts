import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';
import del from 'del';
import fetch from 'node-fetch';

const ua = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.3';
const defaults = {
  dst: './dist',
  header: null,
  footer: null,
  headers: {
    'user-agent': ua
  }
};

const toBuf = (str) => {
  if (!str) return null;
  return Buffer.from(str);
};

async function url2file(inUrl: string, opts: any = {}) {
  const { dst, ...options } = opts;
  const urlinst = new URL(inUrl);
  const filename = urlinst.pathname === '/' ? 'index.html' : urlinst.pathname.substr(1);
  const file = path.join(opts.dst, filename);
  const dirname = path.dirname(file);
  // make sure the directory exists
  mkdirp.sync(dirname);
  // del the file if it exists
  del.sync(file);
  const res = await fetch(inUrl, options);
  const data = await res.buffer();
  const headerBuf = toBuf(opts.header);
  const footerBuf = toBuf(opts.footer);
  const buf = Buffer.concat([headerBuf, data, footerBuf].filter(Boolean));
  await fs.writeFileSync(file, buf);
  return file;
}

export default async (inTarget, inOptions?): Promise<any> => {
  const opts = Object.assign({}, defaults, inOptions);
  const urls = Array.isArray(inTarget) ? inTarget : [inTarget];
  for (const url of urls) {
    await url2file(url, opts);
  }
};
