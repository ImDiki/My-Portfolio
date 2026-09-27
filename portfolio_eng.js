"use strict";
(() => {
    const renderBento = () => {
        // 1. Inject Outfit font dynamically
        const fontLink = document.createElement("link");
        fontLink.rel = "stylesheet";
        fontLink.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap";
        document.head.appendChild(fontLink);
        // Apply Outfit font and dark theme to body
        document.body.className = "bg-[#09090b] text-[#cbd5e1] min-h-screen selection:bg-[#00adb5] selection:text-black font-sans";
        document.body.style.fontFamily = "'Outfit', sans-serif";
        // 2. Bento HTML Content with all English data and Apple-style glassmorphism
        const bentoHtml = `
        <header class="site-header max-w-5xl mx-auto px-4 py-8 flex flex-wrap gap-5 justify-between items-center border-b border-zinc-900">
            <div class="logo-area">
                <span class="text-xl font-bold tracking-tight text-white">DIKI<span class="text-[#00adb5]">.dev</span></span>
            </div>
            <nav aria-label="Main navigation" class="main-nav flex flex-wrap gap-6 text-sm text-zinc-400">
                <a href="index_eng.html" class="text-white hover:text-[#00adb5] transition-colors">Home</a>
                <a href="#about-me" class="hover:text-[#00adb5] transition-colors">About</a>
                <a href="#works" class="hover:text-[#00adb5] transition-colors">Projects</a>
                <a href="devlog_eng.html" class="hover:text-[#00adb5] transition-colors">DevLog</a>
            </nav>
            <div class="lang-switch text-sm flex gap-2">
                <a href="index.html" class="text-zinc-400 hover:text-white transition-colors">Japanese</a>
                <span class="text-zinc-700">/</span>
                <a href="index_eng.html" class="text-[#00adb5] font-bold">English</a>
            </div>
        </header>

        <a class="skip-link" href="#main-content">Skip to content</a><main id="main-content" class="max-w-5xl mx-auto px-4 py-8 space-y-6">
            <!-- Bento Grid Section -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <!-- Profile Card (cols 1-3) -->
                <div class="md:col-span-3 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-white/30  hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div>
                        <span class="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-4">WELCOME TO MY PORTFOLIO</span>
                        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">MYAT THADARLINN</h1>
                        <p class="text-lg md:text-xl text-[#00adb5] font-medium mb-6">Student Developer | Seeking Internship / Junior Roles</p>
                    </div>
                    <div class="flex flex-wrap gap-2.5">
                        <span class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-medium">🇲🇲 MYANMAR NATIONAL</span>
                        <span class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-medium">📍 OSAKA, JAPAN</span>
                        <a href="https://github.com/ImDiki" target="_blank" rel="noopener noreferrer" class="bg-black/40 border border-[#00adb5]/30 text-[#00adb5] text-xs px-3.5 py-1.5 rounded-full font-bold hover:bg-[#00adb5] hover:text-black transition-all">GITHUB</a>
                        <a href="MYAT_THADARLINN_CV.pdf" target="_blank" rel="noopener noreferrer" class="bg-black/40 border border-green-500/30 text-green-400 text-xs px-3.5 py-1.5 rounded-full font-bold hover:bg-green-500 hover:text-black transition-all">RESUME (PDF)</a>
                    </div>
                </div>

                <!-- Avatar Card (col 4) -->
                <div class="md:col-span-1 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-4 flex flex-col justify-between items-center hover:border-white/30  hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 min-h-[220px]">
                    <div class="relative w-full h-full rounded-2xl overflow-hidden group">
                        <img src="IMAGES/2.png" alt="MYAT THADARLINN" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">

                    </div>
                </div>

                <section id="about-me" class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">About Me</h2><p class="text-sm text-zinc-400 leading-relaxed">I am a student in Osaka studying System Engineering at OIC and Computer Science at the University of the People. I am learning through C# desktop projects and full-stack web development. I am seeking software development internships and junior developer or IT/software engineering roles in Japan.</p></section>
                <section id="languages" class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">Language Qualifications</h2><ul class="text-sm text-zinc-400 leading-relaxed space-y-3"><li>Myanmar — Native</li><li>Japanese — JLPT N2</li><li>English — CEFR B2</li></ul></section>
                <section id="skills" class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">Technical Skills</h2><p class="text-sm text-zinc-400 leading-relaxed mb-4">Technologies used in coursework and learning projects.</p><div class="mb-4"><h3 class="text-sm text-white mb-2">Desktop & data</h3><div class="flex flex-wrap gap-2"><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">C#</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">.NET / WPF</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">XAML</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">SQL Server LocalDB</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Java / Swing</span></div></div><div class="mb-4"><h3 class="text-sm text-white mb-2">Web & full-stack development</h3><div class="flex flex-wrap gap-2"><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">HTML</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">CSS</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">JavaScript</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">TypeScript</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Next.js</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Supabase</span></div></div><div class="mb-4"><h3 class="text-sm text-white mb-2">Version control</h3><div class="flex flex-wrap gap-2"><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Git</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">GitHub</span></div></div></section>
                <section id="education" class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">Education</h2>
 <div class="space-y-6 text-sm text-zinc-400 leading-relaxed"><div><p class="text-[#00adb5]">Mar 2025 – Mar 2027 (expected)</p><h3 class="text-white font-semibold">Osaka Information &amp; Computer Science College (OIC)</h3><p>System Engineering</p></div>
 <div><p class="text-[#00adb5]">Mar 2025 – Mar 2028 (expected)</p><h3 class="text-white font-semibold">University of the People</h3><p>B.S. Computer Science</p><p class="mt-2">President’s List — Term 5, 2025–2026</p></div></div></section>
                <section id="experience" class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">Work Experience</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-400 leading-relaxed"><div><p class="text-[#00adb5]">Mar 2026 – Present</p><h3 class="text-white font-semibold">Osaka Castle Road Train</h3><p>Road Train Staff / Conductor (Part-Time)</p><p>株式会社マックスコーポレーション</p><p class="mt-2">Assisted passengers and supported daily operations, communicating with visitors and station staff.</p></div><div><p class="text-[#00adb5]">Mar 2025 – Feb 2026</p><h3 class="text-white font-semibold">East Bridge</h3><p>International Student Support &amp; Operations Staff</p><p class="mt-2">Led a Myanmar part-time team, coordinated shifts, supported international students with SIM cards and mobile plans, and communicated with Japanese management.</p></div></div></section>
                <section id="works" class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">Selected Learning Projects</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-5"><article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">Byte Me / OIC NovaHack 2026</p><h3 class="text-white font-bold text-lg mb-3">Hakushu</h3><p class="text-sm text-zinc-400 leading-relaxed">A Byte Me team project for OIC NovaHack 2026. My role was Project Team Leader. The team received the 「みんなにつたわる賞」 recognition.</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://hakushu.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Hakushu — Live demo">Live demo ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">C# / .NET 8 / WPF / XAML / SQL Server LocalDB</p><h3 class="text-white font-bold text-lg mb-3">Student Attendance App</h3><p class="text-sm text-zinc-400 leading-relaxed">A student desktop project that records attendance from scanned or manually entered student codes. Includes Student, Teacher and Administrator views, attendance statistics, and teacher/class management. A webcam captures registration photos.</p><p class="text-sm text-zinc-400 leading-relaxed mt-3">Local database setup is required.</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/Student_Attendance_App" target="_blank" rel="noopener noreferrer" aria-label="Student Attendance App — GitHub">View source ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">C# / WPF / XAML / MVVM</p><h3 class="text-white font-bold text-lg mb-3">Coin Parking System</h3><p class="text-sm text-zinc-400 leading-relaxed">A learning project with 15 parking slots, vehicle entry and exit, fee calculation, payment handling, receipt generation, and income/receipt text-file output.</p><p class="text-sm text-zinc-400 leading-relaxed mt-3">Uses an MVVM-style structure.</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/CoinParkingSystem" target="_blank" rel="noopener noreferrer" aria-label="Coin Parking System — GitHub">View source ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">C# / .NET 8 / WPF / SQL Server LocalDB</p><h3 class="text-white font-bold text-lg mb-3">POS System</h3><p class="text-sm text-zinc-400 leading-relaxed">A learning project with product-code lookup, a cart, quantities and totals, cash/cashless payment flows, change calculation, transaction storage, and receipt display/text export. Sessions use a staff ID.</p><p class="text-sm text-zinc-400 leading-relaxed mt-3">Local setup is required: Data/POSDATABASE.mdf and its schema are not distributed.</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/POS_System" target="_blank" rel="noopener noreferrer" aria-label="POS System — GitHub">View source ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">C# / .NET 8 / SQL Server LocalDB</p><h3 class="text-white font-bold text-lg mb-3">Attendance MCP Server</h3><p class="text-sm text-zinc-400 leading-relaxed">A small learning prototype using the attendance app’s local database. Processes stdin JSON messages for initialization, tool discovery and invocation; get_student_info performs a parameterized SQL student lookup.</p><p class="text-sm text-zinc-400 leading-relaxed mt-3">An experiment with MCP-style JSON-RPC interaction.</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/AttendanceMCPServer" target="_blank" rel="noopener noreferrer" aria-label="Attendance MCP Server — GitHub">View source ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">HTML / CSS / TypeScript / JavaScript</p><h3 class="text-white font-bold text-lg mb-3">Portfolio</h3><p class="text-sm text-zinc-400 leading-relaxed">A static portfolio with Japanese and English pages for my background, projects and contact information.</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/My-Portfolio" target="_blank" rel="noopener noreferrer" aria-label="Portfolio — GitHub">View source ↗</a></article></div><div class="mt-6 border-t border-white/10 pt-6"><h3 class="text-white font-semibold mb-2">Supporting Coursework — Student Management System</h3><p class="text-sm text-zinc-400 leading-relaxed">A Java Swing assignment for student records, course enrollment and grade management using in-memory Java collections.</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-3" href="https://github.com/ImDiki/StudentManagementSystem" target="_blank" rel="noopener noreferrer">View Java assignment source ↗</a></div></section>
                <section id="contact" class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">Contact</h2><p class="text-sm text-zinc-400 leading-relaxed mb-5">For internship and junior role enquiries, please contact me by email.</p><div class="flex flex-wrap gap-5"><a class="inline-block text-[#00adb5] underline underline-offset-4" href="mailto:myattdlinn@gmail.com">myattdlinn@gmail.com</a><a class="inline-block text-[#00adb5] underline underline-offset-4" href="https://www.linkedin.com/in/myat-thadarlinn" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a class="inline-block text-[#00adb5] underline underline-offset-4" href="https://github.com/ImDiki" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></section>

            </div>
        </main>

        <footer class="max-w-5xl mx-auto px-4 py-8 text-center text-xs text-zinc-600 border-t border-zinc-900">
            <p>&copy; 2026 MYAT THADARLINN (DIKI). All Rights Reserved.</p>
        </footer>
        `;
        // 3. Set the innerHTML of the body to our Bento structure
        document.body.innerHTML = bentoHtml;
    };
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderBento);
    }
    else {
        renderBento();
    }
})();
