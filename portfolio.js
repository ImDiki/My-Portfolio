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
        // 2. Bento HTML Content with all original data and Apple-style glassmorphism
        const bentoHtml = `
        <header class="site-header max-w-5xl mx-auto px-4 py-8 flex flex-wrap gap-5 justify-between items-center border-b border-zinc-900">
            <div class="logo-area">
                <span class="text-xl font-bold tracking-tight text-white">DIKI<span class="text-[#00adb5]">.dev</span></span>
            </div>
            <nav aria-label="メインナビゲーション" class="main-nav flex flex-wrap gap-6 text-sm text-zinc-400">
                <a href="index.html" class="text-white hover:text-[#00adb5] transition-colors">Home</a>
                <a href="#about-me" class="hover:text-[#00adb5] transition-colors">About</a>
                <a href="#works" class="hover:text-[#00adb5] transition-colors">Projects</a>
                <a href="devlog.html" class="hover:text-[#00adb5] transition-colors">DevLog</a>
            </nav>
            <div class="lang-switch text-sm flex gap-2">
                <a href="index.html" class="text-[#00adb5] font-bold">Japanese</a>
                <span class="text-zinc-700">/</span>
                <a href="index_eng.html" class="text-zinc-400 hover:text-white transition-colors">English</a>
            </div>
        </header>

        <a class="skip-link" href="#main-content">本文へ移動</a><main id="main-content" class="max-w-5xl mx-auto px-4 py-8 space-y-6">
            <!-- Bento Grid Section -->
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <!-- Profile Card (cols 1-3) -->
                <div class="md:col-span-3 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:border-white/30  hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                    <div>
                        <span class="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-4">WELCOME TO MY PORTFOLIO</span>
                        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3">MYAT THADARLINN</h1>
                        <p class="text-lg md:text-xl text-[#00adb5] font-medium mb-6">学生・ソフトウェア開発者｜インターン・ジュニア職を志望</p>
                    </div>
                    <div class="flex flex-wrap gap-2.5">
                        <span class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-medium">🇲🇲 MYANMAR NATIONAL</span>
                        <span class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-medium">📍 OSAKA, JAPAN</span>
                        <a href="https://github.com/ImDiki" target="_blank" rel="noopener noreferrer" class="bg-black/40 border border-[#00adb5]/30 text-[#00adb5] text-xs px-3.5 py-1.5 rounded-full font-bold hover:bg-[#00adb5] hover:text-black transition-all">GITHUB</a>
                        <a href="MYAT_THADARLINN_CV.pdf" download="MYAT_THADARLINN_CV.pdf" class="bg-black/40 border border-white/10 text-zinc-300 text-xs px-3.5 py-1.5 rounded-full font-bold hover:bg-[#00adb5] hover:text-black transition-all">RESUME (PDF)</a>
                    </div>
                </div>

                <!-- Avatar Card (col 4) -->
                <div class="md:col-span-1 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-4 flex flex-col justify-between items-center hover:border-white/30  hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300 min-h-[220px]">
                    <div class="relative w-full h-full rounded-2xl overflow-hidden group">
                        <img src="IMAGES/2.jpg" alt="MYAT THADARLINN" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">

                    </div>
                </div>

                <section id="about-me" class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">自己紹介</h2><p class="text-sm text-zinc-400 leading-relaxed">大阪を拠点に、OICでシステムエンジニアリング、University of the Peopleでコンピュータサイエンスを学んでいます。C#のデスクトップアプリやWeb開発の学習に取り組んでいます。日本でソフトウェア開発のインターン、ジュニア開発者、ジュニアIT・ソフトウェアエンジニア職を志望しています。</p></section>
                <section id="languages" class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">語学資格</h2><ul class="text-sm text-zinc-400 leading-relaxed space-y-3"><li>Myanmar — Native</li><li>Japanese — JLPT N2</li><li>English — CEFR B2</li></ul></section>
                <section id="skills" class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">技術スキル</h2><p class="text-sm text-zinc-400 leading-relaxed mb-4">授業・学習プロジェクトで使用している技術です。</p><div class="mb-4"><h3 class="text-sm text-white mb-2">デスクトップ・データ</h3><div class="flex flex-wrap gap-2"><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">C#</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">.NET / WPF</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">XAML</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">SQL Server LocalDB</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Java / Swing</span></div></div><div class="mb-4"><h3 class="text-sm text-white mb-2">Web・フルスタック開発</h3><div class="flex flex-wrap gap-2"><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">HTML</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">CSS</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">JavaScript</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">TypeScript</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Next.js</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Supabase</span></div></div><div class="mb-4"><h3 class="text-sm text-white mb-2">バージョン管理</h3><div class="flex flex-wrap gap-2"><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">Git</span><span class="bg-black/20 text-zinc-300 text-xs px-3 py-1 rounded-md border border-white/10">GitHub</span></div></div></section>
                <section id="education" class="md:col-span-2 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">学歴</h2>
 <div class="space-y-6 text-sm text-zinc-400 leading-relaxed"><div><p class="text-[#00adb5]">2025年3月 ～ 2027年3月（修了予定）</p><h3 class="text-white font-semibold">大阪情報コンピュータ専門学校 (OIC)</h3><p>システムエンジニアリング</p></div>
 <div><p class="text-[#00adb5]">2025年3月 ～ 2028年3月（卒業予定）</p><h3 class="text-white font-semibold">University of the People</h3><p>コンピュータサイエンス学士課程 (B.S. Computer Science)</p><p class="mt-2">President’s List — Term 5, 2025–2026</p></div></div></section>
                <section id="experience" class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">職歴</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-zinc-400 leading-relaxed"><div><p class="text-[#00adb5]">2026年3月 ～ 現在</p><h3 class="text-white font-semibold">Osaka Castle Road Train</h3><p>ロードトレインスタッフ・車掌（アルバイト）</p><p>株式会社マックスコーポレーション</p><p class="mt-2">乗客の案内や日々の運行業務を補助し、来場者・駅スタッフとの連絡に対応。</p></div><div><p class="text-[#00adb5]">2025年3月 ～ 2026年2月</p><h3 class="text-white font-semibold">East Bridge</h3><p>留学生支援・運営スタッフ</p><p class="mt-2">ミャンマー人アルバイトチームをまとめ、シフト調整、留学生のSIMカード・携帯プランの案内、日本人管理者との連絡を担当。</p></div></div></section>
                <section id="works" class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">主な学習プロジェクト</h2><div class="grid grid-cols-1 md:grid-cols-2 gap-5"><article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">Byte Me / OIC NovaHack 2026</p><h3 class="text-white font-bold text-lg mb-3">Hakushu</h3><p class="text-sm text-zinc-400 leading-relaxed">Byte Meチームで制作したチームプロジェクト。プロジェクトチームリーダーを担当し、「みんなにつたわる賞」を受賞しました。</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://hakushu.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Hakushu — デモ">デモを見る ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">C# / .NET 8 / WPF / XAML / SQL Server LocalDB</p><h3 class="text-white font-bold text-lg mb-3">Student Attendance App</h3><p class="text-sm text-zinc-400 leading-relaxed">スキャナーまたは手入力による学生コードで出席を記録する学習用デスクトップアプリ。学生・教師・管理者向け画面、出席統計、教師・クラス管理を実装しています。登録時の写真撮影にWebカメラを使用しています。</p><p class="text-sm text-zinc-400 leading-relaxed mt-3">動作にはローカルデータベースの設定が必要です。</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/Student_Attendance_App" target="_blank" rel="noopener noreferrer" aria-label="Student Attendance App — GitHub">ソースコードを見る ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">C# / WPF / XAML / MVVM</p><h3 class="text-white font-bold text-lg mb-3">Coin Parking System</h3><p class="text-sm text-zinc-400 leading-relaxed">15台分の駐車枠を管理する学習プロジェクト。入出庫、駐車料金計算、精算処理、領収書生成、売上・領収書のテキスト出力を実装しています。</p><p class="text-sm text-zinc-400 leading-relaxed mt-3">MVVM形式の構成です。</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/CoinParkingSystem" target="_blank" rel="noopener noreferrer" aria-label="Coin Parking System — GitHub">ソースコードを見る ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">C# / .NET 8 / WPF / SQL Server LocalDB</p><h3 class="text-white font-bold text-lg mb-3">POS System</h3><p class="text-sm text-zinc-400 leading-relaxed">商品コード検索、カート、数量・合計計算、現金・キャッシュレス精算フロー、釣銭計算、取引保存、領収書表示・テキスト出力を備えた学習プロジェクト。スタッフIDでセッションを開始します。</p><p class="text-sm text-zinc-400 leading-relaxed mt-3">Data/POSDATABASE.mdf とスキーマは同梱されていないため、ローカル設定が必要です。</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/POS_System" target="_blank" rel="noopener noreferrer" aria-label="POS System — GitHub">ソースコードを見る ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">C# / .NET 8 / SQL Server LocalDB</p><h3 class="text-white font-bold text-lg mb-3">Attendance MCP Server</h3><p class="text-sm text-zinc-400 leading-relaxed">出席管理アプリのローカルDBを利用する小規模な学習用プロトタイプ。標準入力のJSONメッセージから初期化、ツール一覧・呼び出しを処理し、get_student_info がパラメーター付きSQLで学生情報を検索します。</p><p class="text-sm text-zinc-400 leading-relaxed mt-3">MCP形式のJSON-RPC連携を試すプロトタイプです。</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/AttendanceMCPServer" target="_blank" rel="noopener noreferrer" aria-label="Attendance MCP Server — GitHub">ソースコードを見る ↗</a></article>
<article class="bg-black/20 border border-white/10 p-6 rounded-2xl"><p class="text-xs text-[#00adb5] mb-3">HTML / CSS / TypeScript / JavaScript</p><h3 class="text-white font-bold text-lg mb-3">Portfolio</h3><p class="text-sm text-zinc-400 leading-relaxed">日本語・英語の自己紹介、プロジェクト、連絡先を掲載する静的ポートフォリオサイト。</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-4" href="https://github.com/ImDiki/My-Portfolio" target="_blank" rel="noopener noreferrer" aria-label="Portfolio — GitHub">ソースコードを見る ↗</a></article></div><div class="mt-6 border-t border-white/10 pt-6"><h3 class="text-white font-semibold mb-2">その他の課題制作 — Student Management System</h3><p class="text-sm text-zinc-400 leading-relaxed">Java Swingの課題作品。メモリ上のJavaコレクションを使用し、学生管理、履修登録、成績管理を行います。</p><a class="inline-block text-[#00adb5] underline underline-offset-4 mt-3" href="https://github.com/ImDiki/StudentManagementSystem" target="_blank" rel="noopener noreferrer">Java課題のソースコードを見る ↗</a></div></section>
                <section id="contact" class="md:col-span-4 bg-black/30 backdrop-blur-sm border border-white/15 rounded-3xl p-8"><h2 class="text-xl font-bold text-white mb-4">連絡先</h2><p class="text-sm text-zinc-400 leading-relaxed mb-5">インターン・ジュニア職についてのご連絡は、メールでお願いいたします。</p><div class="flex flex-wrap gap-5"><a class="inline-block text-[#00adb5] underline underline-offset-4" href="mailto:myattdlinn@gmail.com">myattdlinn@gmail.com</a><a class="inline-block text-[#00adb5] underline underline-offset-4" href="https://www.linkedin.com/in/myat-thadarlinn" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a class="inline-block text-[#00adb5] underline underline-offset-4" href="https://github.com/ImDiki" target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></section>

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
