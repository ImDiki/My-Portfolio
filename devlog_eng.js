"use strict";
(() => {
    // Publish dated entries only after the author confirms their evidence.
    const devLogEntries = [];
    const renderTimeline = () => {
        const container = document.getElementById("devlog-container");
        if (!container)
            return;
        let html = '<p class="bg-black/30 border border-white/10 rounded-3xl p-8 text-zinc-300">No development notes published yet. Please see the projects page for current work.</p>';
        devLogEntries.forEach((entry) => {
            const tagBadges = entry.tags
                .map(tag => `<span class="bg-[#00adb5]/10 border border-[#00adb5]/30 text-[#00adb5] text-[10px] px-2.5 py-1 rounded-full font-bold uppercase">${tag}</span>`)
                .join(" ");
            const detailsList = entry.details
                .map(detail => `<li class="relative pl-5 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-[#00adb5] before:rounded-full font-normal text-zinc-300 text-sm leading-relaxed">${detail}</li>`)
                .join("\n");
            let metricsHtml = "";
            if (entry.metrics && entry.metrics.length > 0) {
                metricsHtml = `
                <div class="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-6">
                    ${entry.metrics.map(m => `
                        <div>
                            <span class="text-[10px] text-zinc-500 font-bold block uppercase tracking-wider mb-1">// ${m.label}</span>
                            <span class="text-white font-extrabold text-lg">${m.value}</span>
                        </div>
                    `).join("")}
                </div>
                `;
            }
            html += `
            <!-- Timeline Card -->
            <div class="bg-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/30 hover:scale-[1.005] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                    <div class="flex items-center gap-3">
                        <span class="text-sm font-extrabold text-[#00adb5] tracking-wider">${entry.date}</span>
                        <span class="text-zinc-600">|</span>
                        <span class="bg-white/5 border border-white/10 text-zinc-400 text-[10px] px-2.5 py-1 rounded-full font-bold tracking-wider">${entry.category}</span>
                    </div>
                    <div class="flex flex-wrap gap-1.5">
                        ${tagBadges}
                    </div>
                </div>
                <h3 class="text-xl font-bold text-white mb-3">${entry.topic}</h3>
                <p class="text-sm text-zinc-400 leading-relaxed font-normal mb-4">${entry.summary}</p>
                <ul class="space-y-2.5">
                    ${detailsList}
                </ul>
                ${metricsHtml}
            </div>
            `;
        });
        container.innerHTML = html;
    };
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", renderTimeline);
    }
    else {
        renderTimeline();
    }
})();
