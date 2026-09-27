# MYAT THADARLINN — Portfolio

Personal portfolio of MYAT THADARLINN (DIKI), a System Engineering and Computer Science student in Osaka, Japan, seeking software-development internships and junior developer roles.

Japanese/English student developer portfolio with project summaries, education, work, CV and direct contact links. The existing dark/teal layout uses locally built Tailwind CSS. DevLog entries remain unpublished pending verification.

Live website: https://imdiki.github.io/My-Portfolio/

## Local development

Requires a current Node.js LTS release and npm.

```sh
npm ci
npm run build
npm run check
npm start
```

Open http://127.0.0.1:4173/ (Japanese) or http://127.0.0.1:4173/index_eng.html (English). On Windows PowerShell, use npm.cmd if execution policy blocks npm.ps1.

Edit portfolio.ts, portfolio_eng.ts, devlog.ts and devlog_eng.ts, then build. The build regenerates their runtime JavaScript and tailwind.css; include these assets when publishing. portfolio-accessibility.css provides focus, mobile navigation and reduced-motion refinements. Outfit uses the existing Google Fonts dependency with system font fallbacks.

The check command compares TypeScript output in memory, executes pages with jsdom, checks local assets and anchors, project/language parity, contact behavior and known stale claims. Visual browser QA and external link checks are separate.

## Content sources

Personal, education and work information follows the current September 2026 CV. Project descriptions follow verified implementation facts. Keep Japanese and English facts equivalent; do not infer features from dependencies or older descriptions.

Featured order: Hakushu, Student Attendance App, Coin Parking System, POS System, Attendance MCP Server, Portfolio. Student Management System is supporting coursework. Hakushu was developed by the Byte Me team for OIC NovaHack 2026. My role was Project Team Leader; the team received the みんなにつたわる賞 recognition. [Live demo](https://hakushu.vercel.app/). Its private source is not linked, and technical claims remain conservative until the source audit is complete.

Recruiter-facing CV: MYAT_THADARLINN_CV.pdf, copied unchanged from MYAT_THADARLINN_RESUME_0926.pdf. The old MYATTHADARLINN.pdf remains untouched and unlinked; do not use it as the factual source.

## Contact

- Email: [myattdlinn@gmail.com](mailto:myattdlinn@gmail.com)
- GitHub: https://github.com/ImDiki
- LinkedIn: https://www.linkedin.com/in/myat-thadarlinn

This static site opens direct contact links; it does not send messages or claim successful delivery.
