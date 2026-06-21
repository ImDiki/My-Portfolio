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
        <header class="max-w-5xl mx-auto px-4 py-8 flex justify-between items-center border-b border-zinc-900">
            <div class="logo-area">
                <span class="text-xl font-bold tracking-tight text-white">DIKI<span class="text-[#00adb5]">.dev</span></span>
            </div>
            <nav class="hidden md:flex gap-6 text-sm text-zinc-400">
                <a href="index.html" class="hover:text-[#00adb5] transition-colors">Home</a>
                <a href="#about-me" class="hover:text-[#00adb5] transition-colors">About</a>
                <a href="#experience" class="hover:text-[#00adb5] transition-colors">Projects</a>
            </nav>
            <div class="lang-switch text-sm flex gap-2">
                <a href="index.html" class="text-zinc-400 hover:text-white transition-colors">Japanese</a>
                <span class="text-zinc-700">/</span>
                <a href="index_eng.html" class="text-[#00adb5] font-bold">English</a>
            </div>
        </header>

        <main class="max-w-5xl mx-auto px-4 py-8 space-y-6">
            <!-- Bento Grid Section -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <!-- Profile Card (cols 1-3) -->
                <div class="md:col-span-3 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-white/30 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div>
                        <span class="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-4">WELCOME TO MY PORTFOLIO</span>
                        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">MYAT THADAR LINN</h1>
                        <p class="text-lg md:text-xl text-[#00adb5] font-medium mb-6">Developer | Aspiring Full Stack Engineer</p>
                    </div>
                    <div class="flex flex-wrap gap-2.5">
                        <span class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-medium">🇲🇲 MYANMAR NATIONAL</span>
                        <span class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-medium">📍 OSAKA, JAPAN</span>
                        <a href="https://github.com/ImDiki" target="_blank" class="bg-black/40 border border-[#00adb5]/30 text-[#00adb5] text-xs px-3.5 py-1.5 rounded-full font-bold hover:bg-[#00adb5] hover:text-black transition-all">GITHUB</a>
                        <a href="resume.pdf" target="_blank" class="bg-black/40 border border-green-500/30 text-green-400 text-xs px-3.5 py-1.5 rounded-full font-bold hover:bg-green-500 hover:text-black transition-all">RESUME (PDF)</a>
                    </div>
                </div>

                <!-- Avatar Card (col 4) -->
                <div class="md:col-span-1 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-4 flex flex-col justify-between items-center hover:border-white/30 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 min-h-[220px]">
                    <div class="relative w-full h-full rounded-2xl overflow-hidden group">
                        <img src="IMAGES/2.jpg" alt="Profile" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <div class="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1.5 border border-zinc-800">
                            <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span class="text-[10px] text-zinc-300 font-bold tracking-wider">LIVE</span>
                        </div>
                    </div>
                </div>
                
                <!-- About Me Card (cols 1-2) -->
                <div id="about-me" class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 hover:border-white/30 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Biography</h3>
                    <h2 class="text-xl font-bold text-white mb-4">About Me</h2>
                    <p class="text-sm text-zinc-400 leading-relaxed font-normal">
                        I am a Computer Science student driven by the dream of transforming innovative ideas into modern, user-friendly systems. My ultimate goal is to build a global career as a software engineer where I can solve complex technical challenges. Highly proficient in both English and Japanese communication, I thrive in intercultural environments. I am also a true coffee enthusiast. In my free time, I love traveling—especially escaping to places like Awajishima, where I can relax and completely lose myself in writing code.
                    </p>
                </div>

                <!-- MBTI Card (cols 3-4) -->
                <div class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 flex flex-col justify-between hover:border-white/30 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div>
                        <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Personality Type</h3>
                        <h2 class="text-xl font-bold text-white mb-3">INFJ (Advocate)</h2>
                        <p class="text-sm text-zinc-400 leading-relaxed font-normal">
                            A strategic and methodical type focused on helping organizations achieve their goals through calm, logical system architecture and reliable execution.
                        </p>
                    </div>
                    <div class="mt-6 bg-black/20 border border-dashed border-white/10 p-4 rounded-xl flex items-center gap-3">
                        <span class="bg-[#00adb5] text-black font-extrabold px-2.5 py-0.5 text-xs rounded">INFJ</span>
                        <span class="text-xs text-zinc-500">// Calm & Rational planner</span>
                    </div>
                </div>

                <!-- Skills Card (cols 1-2) -->
                <div class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 hover:border-white/30 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">CREDIBILITY & SKILLS</h3>
                    <h2 class="text-xl font-bold text-white mb-6">Skills & Competencies</h2>
                    <div class="space-y-4">
                        <div class="skill-category">
                            <span class="text-xs text-zinc-500 block mb-1.5">Backend</span>
                            <div class="flex flex-wrap gap-1.5">
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 hover:border-purple-500 transition-colors">C#</span>
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 hover:border-blue-500 transition-colors">Python</span>
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 hover:border-red-500 transition-colors">SQL</span>
                            </div>
                        </div>
                        <div class="skill-category">
                            <span class="text-xs text-zinc-500 block mb-1.5">Web Dev</span>
                            <div class="flex flex-wrap gap-1.5">
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 hover:border-orange-500 transition-colors">HTML</span>
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 hover:border-blue-400 transition-colors">CSS</span>
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 hover:border-yellow-500 transition-colors">JS</span>
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 hover:border-cyan-400 transition-colors">React</span>
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 hover:border-white transition-colors">Next.js</span>
                            </div>
                        </div>
                        <div class="skill-category">
                            <span class="text-xs text-zinc-500 block mb-1.5">OOAD & Modeling</span>
                            <div class="flex flex-wrap gap-1.5">
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">UML Modeling</span>
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Astah Pro</span>
                            </div>
                        </div>
                        <div class="skill-category">
                            <span class="text-xs text-zinc-500 block mb-1.5">Tools</span>
                            <div class="flex flex-wrap gap-1.5">
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Visual Studio</span>
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">VS Code</span>
                            </div>
                        </div>
                        <div class="skill-category">
                            <span class="text-xs text-zinc-500 block mb-1.5">Languages</span>
                            <div class="flex flex-wrap gap-1.5">
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 font-sans">English: B2 (IELTS/TOEIC)</span>
                                <span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10 font-sans">Japanese: B2 (JLPT)</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Education Card (cols 3-4) -->
                <div class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 hover:border-white/30 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Education</h3>
                    <h2 class="text-xl font-bold text-white mb-6">Education Background</h2>
                    <div class="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
                        <!-- Item 1 -->
                        <div class="relative pl-8">
                            <div class="absolute left-[7px] top-[7px] w-[11px] h-[11px] rounded-full bg-[#00adb5] border border-zinc-900 shadow-[0_0_8px_rgba(0,173,181,0.5)]"></div>
                            <span class="text-xs text-[#00adb5] font-bold block mb-1">2025 - 2028 (Expected Graduation)</span>
                            <h4 class="text-white text-sm font-semibold mb-0.5">Osaka Information and Computer College (OIC)</h4>
                            <p class="text-xs text-zinc-400">Major: System Engineering Department</p>
                        </div>
                        <!-- Item 2 -->
                        <div class="relative pl-8">
                            <div class="absolute left-[7px] top-[7px] w-[11px] h-[11px] rounded-full bg-zinc-700 border border-zinc-900"></div>
                            <span class="text-xs text-zinc-500 font-bold block mb-1">2025 - 2029 (Expected Graduation)</span>
                            <h4 class="text-white text-sm font-semibold mb-0.5">University of the People</h4>
                            <p class="text-xs text-zinc-400">Major: Computer Science Degree Program</p>
                        </div>
                        <!-- Item 3 -->
                        <div class="relative pl-8">
                            <div class="absolute left-[7px] top-[7px] w-[11px] h-[11px] rounded-full bg-zinc-700 border border-zinc-900"></div>
                            <span class="text-xs text-zinc-500 font-bold block mb-1">2023 - 2025 (Graduated)</span>
                            <h4 class="text-white text-sm font-semibold mb-0.5">Japan Language Academy (JPGA)</h4>
                            <p class="text-xs text-zinc-400">Major: Japanese Language Program</p>
                        </div>
                    </div>
                </div>
                
                <!-- Experience / Gakuchika (cols 1-4) -->
                <div id="experience" class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 hover:border-white/30 hover:scale-[1.005] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">┃ Experience</h3>
                    <h2 class="text-2xl font-bold text-white mb-2">Activities & Achievements</h2>
                    <p class="text-sm text-zinc-500 mb-8">A showcase of my leadership, team development, and practical management experiences during my studies.</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Card 1 -->
                        <div class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-5 hover:border-[#00adb5]/40 transition-all duration-300 group">
                            <div class="md:w-1/3 h-32 rounded-xl overflow-hidden bg-zinc-850 relative flex-shrink-0">
                                <img src="IMAGES/MF.jpg" alt="MF" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="md:w-2/3 flex flex-col justify-between">
                                <div>
                                    <span class="text-[10px] font-bold text-[#00adb5] tracking-widest block uppercase mb-1">// Feb 2026</span>
                                    <h4 class="text-white font-bold text-sm mb-1">Development Team Leader | Media Frontier Exhibition</h4>
                                    <p class="text-xs text-zinc-500 mb-2">Project: Student Attendance Management System (C# / WPF)</p>
                                    <ul class="text-[11px] text-zinc-400 space-y-1 list-disc pl-3 font-normal">
                                        <li>Led a 3-member development team, overseeing timeline management, task delegation, and core system architecture.</li>
                                        <li>Built a robust, comprehensive system featuring an admin dashboard and a dedicated student portal.</li>
                                        <li>Developed an automated check-in feature using Webcams to streamline and optimize classroom attendance tracking.</li>
                                    </ul>
                                </div>
                                <div class="mt-4">
                                    <a href="https://www.youtube.com/watch?v=F0f-90iB_6M" target="_blank" class="bg-black/40 border border-white/10 text-xs text-[#00adb5] px-3 py-1.5 rounded-lg hover:bg-[#00adb5] hover:text-black hover:border-[#00adb5] transition-all font-bold inline-block">📺 View Project Demo</a>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Card 2 -->
                        <div class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-5 hover:border-[#00adb5]/40 transition-all duration-300 group">
                            <div class="md:w-1/3 h-32 rounded-xl overflow-hidden bg-zinc-850 relative flex-shrink-0">
                                <img src="IMAGES/EB.jpg" alt="EB" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="md:w-2/3 flex flex-col justify-between">
                                <div>
                                    <span class="text-[10px] font-bold text-[#00adb5] tracking-widest block uppercase mb-1">// Mar 2026 ~ Present</span>
                                    <h4 class="text-white font-bold text-sm mb-1">Myanmar Team Leader | East Bridge Co., Ltd.</h4>
                                    <p class="text-xs text-zinc-500 mb-2">Company Profile: KDDI's largest core agency, managing international telecom services.</p>
                                    <ul class="text-[11px] text-zinc-400 space-y-1 list-disc pl-3 font-normal">
                                        <li>Appointed as leader of the Myanmar part-time staff, managing shift scheduling and daily task assignments.</li>
                                        <li>Served as the primary operator handling SIM card contracts and technical troubleshooting for Myanmar customers.</li>
                                        <li>Bridged communication gaps effectively between Japanese management and foreign clientele to ensure smooth operations.</li>
                                    </ul>
                                </div>
                                <div class="mt-4">
                                    <a href="http://www.eastbridge.co.jp/" target="_blank" class="bg-black/40 border border-white/10 text-xs text-[#00adb5] px-3 py-1.5 rounded-lg hover:bg-[#00adb5] hover:text-black hover:border-[#00adb5] transition-all font-bold inline-block">🌐 Visit Official Website</a>
                                </div>
                            </div>
                        </div>

                        <!-- Card 3 -->
                        <div class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-5 hover:border-[#00adb5]/40 transition-all duration-300 group">
                            <div class="md:w-1/3 h-32 rounded-xl overflow-hidden bg-zinc-850 relative flex-shrink-0">
                                <img src="IMAGES/Panel.jpg" alt="Panel" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="md:w-2/3 flex flex-col justify-between">
                                <div>
                                    <span class="text-[10px] font-bold text-[#00adb5] tracking-widest block uppercase mb-1">// Jan 2025</span>
                                    <h4 class="text-white font-bold text-sm mb-1">Guest Speaker | The SOL Campus Panel Discussion</h4>
                                    <p class="text-xs text-zinc-500 mb-2">Debate Theme: "What is more essential for youth success: Wealth or Education?"</p>
                                    <ul class="text-[11px] text-zinc-400 space-y-1 list-disc pl-3 font-normal">
                                        <li>Invited as a featured panelist, presenting structured and logical arguments during a live debate.</li>
                                        <li>Exchanged diverse perspectives and collaborated with Japanese university students and professional IT engineers.</li>
                                        <li>Demonstrated strong public speaking, critical thinking, and adaptability under a high-pressure environment.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Card 4 -->
                        <div class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-5 hover:border-[#00adb5]/40 transition-all duration-300 group">
                            <div class="md:w-1/3 h-32 rounded-xl overflow-hidden bg-zinc-850 relative flex-shrink-0">
                                <img src="IMAGES/OSC.jpg" alt="OSC" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="md:w-2/3 flex flex-col justify-between">
                                <div>
                                    <span class="text-[10px] font-bold text-[#00adb5] tracking-widest block uppercase mb-1">// Feb 2026</span>
                                    <h4 class="text-white font-bold text-sm mb-1">Student Staff | Open Source Conference (OSC) Osaka</h4>
                                    <p class="text-xs text-zinc-500 mb-2">Event Profile: A premier open-source community event in Japan.</p>
                                    <ul class="text-[11px] text-zinc-400 space-y-1 list-disc pl-3 font-normal">
                                        <li>Supported venue setup and attendee guidance as an official student staff member for a large-scale IT conference.</li>
                                        <li>Networked with numerous open-source contributors and corporate developers to analyze modern technology trends.</li>
                                        <li>Exhibited reliable teamwork and agility in a fast-paced event environment.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Repositories (cols 1-4) -->
                <div class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 hover:border-white/30 hover:scale-[1.005] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">┃ MY GITHUB REPOSITORIES & PROJECTS</h3>
                    <h2 class="text-2xl font-bold text-white mb-6">Repositories & Open Source Projects</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <!-- Repo item 1 -->
                        <a href="https://github.com/ImDiki/CoinParkingSystem" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// MVVM / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">CoinParkingSystem</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">A robust coin parking management system built with C# and WPF, leveraging the MVVM architectural pattern.</p>
                        </a>
                        <!-- Repo item 2 -->
                        <a href="https://github.com/ImDiki/ROCK_PAPER_SCISSOR" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// WPF / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">ROCK_PAPER_SCISSOR</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">A classic Rock-Paper-Scissors game developed using C#, featuring a clean and intuitive user interface.</p>
                        </a>
                        <!-- Repo item 3 -->
                        <a href="https://github.com/ImDiki/BDMS_CSharp" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Database / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">BDMS_CSharp</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">A secure Blood Donor Management System project, refactored and optimized using C# as the core language.</p>
                        </a>
                        <!-- Repo item 4 -->
                        <a href="https://github.com/ImDiki/Student_Attendance_App" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Webcam / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">Student_Attendance_App</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">A student attendance tracking application developed in C#, featuring automated check-ins via webcam integration.</p>
                        </a>
                        <!-- Repo item 5 -->
                        <a href="https://github.com/ImDiki/attendance-mcp-server" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// AI / MCP</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">attendance-mcp-server</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">An attendance management MCP server, designed for seamless AI assistant integration.</p>
                        </a>
                        <!-- Repo item 6 -->
                        <a href="https://github.com/ImDiki/POS_System" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Business / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">POS_System</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">A high-performance cafe POS register system engineered in C#, featuring input validation and transaction data logging.</p>
                        </a>
                        <!-- Repo item 7 -->
                        <a href="https://github.com/ImDiki/Multilingual-Calculator" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Utility / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">Multilingual-Calculator</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal font-sans">A multilingual calculator application supporting English, Japanese, and Burmese, built with focus on accurate calculation logic.</p>
                        </a>
                        <!-- Repo item 8 -->
                        <a href="https://github.com/ImDiki/Accessibility-Calculator.git" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Accessibility / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">Accessibility-Calculator</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal font-sans">An accessibility-focused calculator application featuring screen reader compatibility and optimized keyboard navigation support.</p>
                        </a>
                    </div>
                </div>

                <!-- Contact / Let's collab (cols 1-4) -->
                <div class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 md:p-12 hover:border-white/30 hover:scale-[1.005] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Let's collab!</h3>
                            <h2 class="text-3xl font-extrabold text-white mb-4">Contact Me</h2>
                            <p class="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                                Feel free to reach out for collaborations, questions, or just a chat. I'll get back to you as soon as possible!
                            </p>
                        </div>
                        <form action="thank.html" method="GET" class="space-y-4 bg-black/20 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl">
                            <div>
                                <label for="name" class="block text-xs uppercase text-zinc-500 mb-1.5 font-bold tracking-wider">Name</label>
                                <input type="text" id="name" name="name" required class="w-full bg-black/40 border border-white/10 focus:border-[#00adb5] rounded-xl p-3 text-sm text-white focus:outline-none transition-all duration-200">
                            </div>
                            <div>
                                <label for="email" class="block text-xs uppercase text-zinc-500 mb-1.5 font-bold tracking-wider">Email</label>
                                <input type="email" id="email" name="email" required class="w-full bg-black/40 border border-white/10 focus:border-[#00adb5] rounded-xl p-3 text-sm text-white focus:outline-none transition-all duration-200">
                            </div>
                            <div>
                                <label for="message" class="block text-xs uppercase text-zinc-500 mb-1.5 font-bold tracking-wider">Message</label>
                                <textarea id="message" name="message" rows="4" required class="w-full bg-black/40 border border-white/10 focus:border-[#00adb5] rounded-xl p-3 text-sm text-white focus:outline-none transition-all duration-200"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-[#00adb5] text-black font-extrabold py-3 px-6 rounded-xl hover:bg-white transition-colors duration-200 shadow-[0_4px_20px_rgba(0,173,181,0.25)] flex justify-center items-center gap-2">
                                <span>Send message now!</span>
                                <span>→</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </main>

        <footer class="max-w-5xl mx-auto px-4 py-8 text-center text-xs text-zinc-600 border-t border-zinc-900">
            <p>&copy; 2026 MYAT THADAR LINN (DIKI). All Rights Reserved.</p>
        </footer>
        `;

        // 3. Set the innerHTML of the body to our Bento structure
        document.body.innerHTML = bentoHtml;
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderBento);
    } else {
        renderBento();
    }
})();
