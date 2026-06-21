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

        // 2. Bento HTML Content with all original data and Apple-style glassmorphism
        const bentoHtml = `
        <header class="max-w-5xl mx-auto px-4 py-8 flex justify-between items-center border-b border-zinc-900">
            <div class="logo-area">
                <span class="text-xl font-bold tracking-tight text-white">DIKI<span class="text-[#00adb5]">.dev</span></span>
            </div>
            <nav class="hidden md:flex gap-6 text-sm text-zinc-400">
                <a href="index.html" class="text-white hover:text-[#00adb5] transition-colors">Home</a>
                <a href="#about-me" class="hover:text-[#00adb5] transition-colors">About</a>
                <a href="#experience" class="hover:text-[#00adb5] transition-colors">Projects</a>
            </nav>
            <div class="lang-switch text-sm flex gap-2">
                <a href="index.html" class="text-[#00adb5] font-bold">Japanese</a>
                <span class="text-zinc-700">/</span>
                <a href="index_eng.html" class="text-zinc-400 hover:text-white transition-colors">English</a>
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
                        <p class="text-lg md:text-xl text-[#00adb5] font-medium mb-6">デベロッパー | フルスタック志望</p>
                    </div>
                    <div class="flex flex-wrap gap-2.5">
                        <span class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-medium">🇲🇲 MYANMAR NATIONAL</span>
                        <span class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-medium">📍 OSAKA, JAPAN</span>
                        <a href="https://github.com/ImDiki" target="_blank" class="bg-black/40 border border-[#00adb5]/30 text-[#00adb5] text-xs px-3.5 py-1.5 rounded-full font-bold hover:bg-[#00adb5] hover:text-black transition-all">GITHUB</a>
                        <a href="MYATTHADARLINN.pdf" download="MYATTHADARLINN_Resume.pdf" class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-bold hover:bg-[#00adb5] hover:text-black transition-all">RESUME (PDF)</a>
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
                    <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">自己紹介</h3>
                    <h2 class="text-xl font-bold text-white mb-4">About Me</h2>
                    <p class="text-sm text-zinc-400 leading-relaxed font-normal">
                        現在コンピュータサイエンスを専攻中の学生です。斬新なアイデアを形にし、誰もが簡単に使えるモダンなシステムを構築して、将来はグローバル企業で活躍するのが夢です。英語と日本語のコミュニケーションが得意です。また、大のコーヒー好きでもあります。趣味は旅行で、淡路島のような自然豊かな場所でリフレッシュしながらコーディングに没頭している時間が、私にとって最高の幸せです。
                    </p>
                </div>

                <!-- MBTI Card (cols 3-4) -->
                <div class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 flex flex-col justify-between hover:border-white/30 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div>
                        <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">性格タイプ</h3>
                        <h2 class="text-xl font-bold text-white mb-3">INFJ (提唱者)</h2>
                        <p class="text-sm text-zinc-400 leading-relaxed font-normal">
                            組織の目標達成を冷静かつ計画的にサポートし、確実なシステム管理と論理的な設計を遂行できる性格タイプです。
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
                    <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">教育背景</h3>
                    <h2 class="text-xl font-bold text-white mb-6">Education Background</h2>
                    <div class="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-zinc-800">
                        <!-- Item 1 -->
                        <div class="relative pl-8">
                            <div class="absolute left-[7px] top-[7px] w-[11px] h-[11px] rounded-full bg-[#00adb5] border border-zinc-900 shadow-[0_0_8px_rgba(0,173,181,0.5)]"></div>
                            <span class="text-xs text-[#00adb5] font-bold block mb-1">2025 - 2028 (卒業予定)</span>
                            <h4 class="text-white text-sm font-semibold mb-0.5">大阪情報コンピュータ専門学校 (OIC)</h4>
                            <p class="text-xs text-zinc-400">専攻：システムエンジニアリング学科</p>
                        </div>
                        <!-- Item 2 -->
                        <div class="relative pl-8">
                            <div class="absolute left-[7px] top-[7px] w-[11px] h-[11px] rounded-full bg-zinc-700 border border-zinc-900"></div>
                            <span class="text-xs text-zinc-500 font-bold block mb-1">2025 - 2029 (卒業予定)</span>
                            <h4 class="text-white text-sm font-semibold mb-0.5">University of the People</h4>
                            <p class="text-xs text-zinc-400">専攻：コンピュータサイエンス学科 (Computer Science)</p>
                        </div>
                        <!-- Item 3 -->
                        <div class="relative pl-8">
                            <div class="absolute left-[7px] top-[7px] w-[11px] h-[11px] rounded-full bg-zinc-700 border border-zinc-900"></div>
                            <span class="text-xs text-zinc-500 font-bold block mb-1">2023 - 2025 (卒業済)</span>
                            <h4 class="text-white text-sm font-semibold mb-0.5">国際語学アカデミー (JPGA)</h4>
                            <p class="text-xs text-zinc-400">専攻：日本語学科</p>
                        </div>
                    </div>
                </div>
                
                <!-- Experience / Gakuchika (cols 1-4) -->
                <div id="experience" class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 hover:border-white/30 hover:scale-[1.005] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">┃ ガクチカ</h3>
                    <h2 class="text-2xl font-bold text-white mb-2">Activities & Achievements</h2>
                    <p class="text-sm text-zinc-500 mb-8">学生時代の取り組みと、チーム開発・マネジメントにおける実践的な経験です。</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <!-- Card 1 -->
                        <div class="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row gap-5 hover:border-[#00adb5]/40 transition-all duration-300 group">
                            <div class="md:w-1/3 h-32 rounded-xl overflow-hidden bg-zinc-850 relative flex-shrink-0">
                                <img src="IMAGES/MF.jpg" alt="MF" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="md:w-2/3 flex flex-col justify-between">
                                <div>
                                    <span class="text-[10px] font-bold text-[#00adb5] tracking-widest block uppercase mb-1">// 2026年2月</span>
                                    <h4 class="text-white font-bold text-sm mb-1">開発チームリーダー｜メディアフロンティア</h4>
                                    <p class="text-xs text-zinc-500 mb-2">プロジェクト: 学生出席管理システム（C# / WPF）</p>
                                    <ul class="text-[11px] text-zinc-400 space-y-1 list-disc pl-3 font-normal">
                                        <li>3名の開発チームを率いて、タイムライン管理、タスク割り当て、システム設計を統括。</li>
                                        <li>管理者用ダッシュボードと学生用ポータルを網羅した堅牢なシステムを構築。</li>
                                        <li>Webカメラを用いた自動出席登録機能を開発し、教室でのチェックインを効率化。</li>
                                    </ul>
                                </div>
                                <div class="mt-4">
                                    <a href="https://youtu.be/ZkTgB_T5_fs" target="_blank" class="bg-black/40 border border-white/10 text-xs text-[#00adb5] px-3 py-1.5 rounded-lg hover:bg-[#00adb5] hover:text-black hover:border-[#00adb5] transition-all font-bold inline-block">📺 MF007T</a>
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
                                    <span class="text-[10px] font-bold text-[#00adb5] tracking-widest block uppercase mb-1">// 2026年3月 〜 現在</span>
                                    <h4 class="text-white font-bold text-sm mb-1">ミャンマーチームリーダー｜East Bridge</h4>
                                    <p class="text-xs text-zinc-500 mb-2">企業概要: KDDI最大のコア代理店であり、国際通信サービスを管理。</p>
                                    <ul class="text-[11px] text-zinc-400 space-y-1 list-disc pl-3 font-normal">
                                        <li>ミャンマー人アルバイトのリーダーに任命され、シフト作成やタスク割り当てを担当。</li>
                                        <li>メインオペレーターとして、ミャンマー人顧客のSIMカード契約やトラブルを対応。</li>
                                        <li>日本人のマネジメント層と外国人顧客の間のコミュニケーションを円滑に仲介。</li>
                                    </ul>
                                </div>
                                <div class="mt-4">
                                    <a href="http://www.eastbridge.co.jp/" target="_blank" class="bg-black/40 border border-white/10 text-xs text-[#00adb5] px-3 py-1.5 rounded-lg hover:bg-[#00adb5] hover:text-black hover:border-[#00adb5] transition-all font-bold inline-block">🌐 企業公式ウェブサイトを見る</a>
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
                                    <span class="text-[10px] font-bold text-[#00adb5] tracking-widest block uppercase mb-1">// 2025年1月</span>
                                    <h4 class="text-white font-bold text-sm mb-1">ゲストスピーカー｜The SOL Campus</h4>
                                    <p class="text-xs text-zinc-500 mb-2">テーマ: 「若者の成功に必要なのは、お金か？教育か？」</p>
                                    <ul class="text-[11px] text-zinc-400 space-y-1 list-disc pl-3 font-normal">
                                        <li>パネリストとして招待され、ライブディベートで論理的な主張を展開。</li>
                                        <li>日本の大学生や、日本で活躍するプロのITエンジニアたちと多様な意見を共有。</li>
                                        <li>プレッシャーのかかる環境下で、高いパブリックスピーキング力を発揮。</li>
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
                                    <span class="text-[10px] font-bold text-[#00adb5] tracking-widest block uppercase mb-1">// 2026年2月</span>
                                    <h4 class="text-white font-bold text-sm mb-1">学生スタッフ｜OSC Osaka</h4>
                                    <p class="text-xs text-zinc-500 mb-2">イベント概要: 日本発のコアなオープンソースコミュニティイベント。</p>
                                    <ul class="text-[11px] text-zinc-400 space-y-1 list-disc pl-3 font-normal">
                                        <li>公式学生スタッフとして、大規模なITイベントの会場設営や来場者誘導をサポート。</li>
                                        <li>多くのオープンソース貢献者や企業開発者と交流し、最新の技術トレンドを吸収。</li>
                                        <li>スピード感が求められるイベント現場で、柔軟なチームワークを発揮。</li>
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
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">C#とWPFを用いてMVVMパターンで構築された、堅牢なコインパーキング管理システム。</p>
                        </a>
                        <!-- Repo item 2 -->
                        <a href="https://github.com/ImDiki/ROCK_PAPER_SCISSOR" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// WPF / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">ROCK_PAPER_SCISSOR</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">C#を使用して開発した、シンプルで直感的なUIのじゃんけんゲーム。</p>
                        </a>
                        <!-- Repo item 3 -->
                        <a href="https://github.com/ImDiki/BDMS_CSharp" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Database / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">BDMS_CSharp</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">C#をベースにリファクタリングを施した、セキュアな献血データ管理システムプロジェクト。</p>
                        </a>
                        <!-- Repo item 4 -->
                        <a href="https://github.com/ImDiki/Student_Attendance_App" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Webcam / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">Student_Attendance_App</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">C#を用いた学生出席管理システム。Webカメラを活用した自動出席登録機能を搭載。</p>
                        </a>
                        <!-- Repo item 5 -->
                        <a href="https://github.com/ImDiki/attendance-mcp-server" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// AI / MCP</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">attendance-mcp-server</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">AIアシスタントとシームレスに連携する出席管理MCPサーバー。</p>
                        </a>
                        <!-- Repo item 6 -->
                        <a href="https://github.com/ImDiki/POS_System" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Business / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">POS_System</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">C#で開発したカフェ向けの高性能POSレジシステム。入力バリデーションや売買データ管理を実装。</p>
                        </a>
                        <!-- Repo item 7 -->
                        <a href="https://github.com/ImDiki/Multilingual-Calculator" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Utility / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">Multilingual-Calculator</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">多言語対応（日本語・英語・ミャンマー語）の電卓アプリケーション。直感的なUIと正確な計算ロジックを提供。</p>
                        </a>
                        <!-- Repo item 8 -->
                        <a href="https://github.com/ImDiki/Accessibility-Calculator.git" target="_blank" class="bg-black/20 backdrop-blur-sm border border-white/10 hover:border-[#00adb5]/40 hover:scale-[1.02] p-5 rounded-2xl transition-all duration-200 block group">
                            <span class="text-[10px] text-zinc-500 font-bold block mb-2">// Accessibility / C#</span>
                            <h4 class="text-white font-bold text-sm mb-2 group-hover:text-[#00adb5] transition-colors">Accessibility-Calculator</h4>
                            <p class="text-[11px] text-zinc-400 leading-relaxed font-normal">アクセシビリティに配慮した電卓アプリ。スクリーンリーダー対応やキーボード操作の最適化を実装。</p>
                        </a>
                    </div>
                </div>

                <!-- Contact / Let's collab (cols 1-4) -->
                <div class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 md:p-12 hover:border-white/30 hover:scale-[1.005] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 class="text-zinc-500 text-xs font-bold uppercase tracking-widest mb-4">Let's collab!</h3>
                            <h2 class="text-3xl font-extrabold text-white mb-4">連絡先</h2>
                            <p class="text-sm text-zinc-400 leading-relaxed mb-6 font-normal">
                                お仕事のご相談、ご質問などございましたら、お気軽にお問い合わせください。メッセージをお待ちしております。
                            </p>
                        </div>
                        <form action="thank.html" method="GET" class="space-y-4 bg-black/20 backdrop-blur-sm border border-white/10 p-6 md:p-8 rounded-2xl">
                            <div>
                                <label for="name" class="block text-xs uppercase text-zinc-500 mb-1.5 font-bold tracking-wider">名前 / Name</label>
                                <input type="text" id="name" name="name" required class="w-full bg-black/40 border border-white/10 focus:border-[#00adb5] rounded-xl p-3 text-sm text-white focus:outline-none transition-all duration-200">
                            </div>
                            <div>
                                <label for="email" class="block text-xs uppercase text-zinc-500 mb-1.5 font-bold tracking-wider">メール / Email</label>
                                <input type="email" id="email" name="email" required class="w-full bg-black/40 border border-white/10 focus:border-[#00adb5] rounded-xl p-3 text-sm text-white focus:outline-none transition-all duration-200">
                            </div>
                            <div>
                                <label for="message" class="block text-xs uppercase text-zinc-500 mb-1.5 font-bold tracking-wider">メッセージ / Message</label>
                                <textarea id="message" name="message" rows="4" required class="w-full bg-black/40 border border-white/10 focus:border-[#00adb5] rounded-xl p-3 text-sm text-white focus:outline-none transition-all duration-200"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-[#00adb5] text-black font-extrabold py-3 px-6 rounded-xl hover:bg-white transition-colors duration-200 shadow-[0_4px_20px_rgba(0,173,181,0.25)] flex justify-center items-center gap-2">
                                <span>送信 / Send message now!</span>
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