const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const ts = require('typescript');
const { JSDOM, VirtualConsole } = require('jsdom');
const root = path.resolve(__dirname, '..');
const read = file => fs.readFileSync(path.join(root, file), 'utf8');
const normalize = s => s.replace(/\r\n/g, '\n').trim();
const config = ts.readConfigFile(path.join(root, 'tsconfig.json'), ts.sys.readFile);
const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, root);
const program = ts.createProgram(parsed.fileNames, parsed.options);
const diagnostics = ts.getPreEmitDiagnostics(program);
assert.equal(diagnostics.length, 0, ts.formatDiagnosticsWithColorAndContext(diagnostics, {
 getCurrentDirectory: () => root, getCanonicalFileName: x => x, getNewLine: () => '\n'
}));
// Compare emitted output in memory, without changing files.
program.emit(undefined, (file, expected) => {
 assert.equal(normalize(fs.readFileSync(file, 'utf8')), normalize(expected), `${path.basename(file)} is stale; run npm run build`);
});
const pages = new Map();
const errors = [];
for (const file of fs.readdirSync(root).filter(f => f.endsWith('.html'))) {
 const vc = new VirtualConsole();
 vc.on('jsdomError', error => errors.push(`${file}: ${error.message}`));
 const dom = new JSDOM(read(file), { url: `https://portfolio.test/${file}`, runScripts: 'outside-only', virtualConsole: vc });
 // Redirect pages are checked by their fallback links; jsdom has no navigation.
 for(const script of dom.window.document.querySelectorAll('script[src]')) {
  const src = script.getAttribute('src');
  assert(!/^https?:/.test(src), 'Unexpected external runtime script');
  dom.window.eval(read(src));
 }
 dom.window.document.dispatchEvent(new dom.window.Event('DOMContentLoaded'));
 pages.set(file, dom);
}
for(const [file,dom] of pages) {
 const doc = dom.window.document;
 assert.equal(doc.querySelectorAll('form').length,0,`${file}: contact form needs a real sending service`);
 for(const el of doc.querySelectorAll('[href], [src]')) {
  const value = el.getAttribute('href') ?? el.getAttribute('src');
  const url = new URL(value, `https://portfolio.test/${file}`);
  if(url.protocol==='mailto:') { assert.equal(url.pathname,'myattdlinn@gmail.com'); continue; }
  if(url.origin!=='https://portfolio.test') continue;
  const target = decodeURIComponent(url.pathname.slice(1));
  assert(fs.existsSync(path.join(root,target)),`${file}: missing ${target}`);
  if(url.hash) assert(pages.get(target)?.window.document.getElementById(decodeURIComponent(url.hash.slice(1))),`${file}: missing ${target}${url.hash}`);
 }
 const forbidden = /facial[ -]?recognition|biometric|webcam attendance|automated check.ins|attendance-mcp-server|high-performance|production-ready|enterprise-grade|robust|Python|84%|12\s*(?:\/|algorithms).*week|100%|TOEIC.*(?:pending|結果待ち)|Japanese:\s*B2|自動出席|高性能|セキュア/i;
 assert(!forbidden.test(doc.body.textContent),`${file}: stale claim found`);
 assert(!doc.querySelector('nav.hidden'),`${file}: navigation hidden on mobile`);
}
const ja = pages.get('index.html').window.document;
const en = pages.get('index_eng.html').window.document;
const links = doc => [...doc.querySelectorAll('#works a')].map(a=>a.getAttribute('href'));
assert.deepEqual(links(ja),links(en),'Project links/order differ between languages');
assert.equal(links(en)[0],'https://hakushu.vercel.app/');
assert.equal(en.querySelectorAll('#works article').length,6);
for(const doc of [ja,en]) {
 for(const phrase of ['Myanmar — Native','Japanese — JLPT N2','English — CEFR B2']) assert(doc.querySelector('#languages').textContent.includes(phrase));
 for(const href of ['MYAT_THADARLINN_CV.pdf','mailto:myattdlinn@gmail.com','https://www.linkedin.com/in/myat-thadarlinn']) assert(doc.querySelector(`a[href="${href}"]`),`Missing ${href}`);
 assert(doc.querySelector('.skip-link[href="#main-content"]'));
 assert(!doc.querySelector('a[href*="github.com/ImDiki/Hakushu"]'),'Private repository must not be linked');
}
assert.equal(errors.length,0,errors.join('\n'));
for(const dom of pages.values()) dom.window.close();
console.log('PASS: TS/runtime sync; seven HTML pages; local assets/anchors; project/language parity; contact behavior; stale claims.');
console.log('Visual layout and external service availability require separate checks.');
