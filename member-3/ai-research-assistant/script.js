const query = document.getElementById("query");
const research = document.getElementById("research");
const results = document.getElementById("results");

research.onclick = () => {

    const q = query.value;

    const sections = [
        [
            "Overview",
            "The research question centers on how conversational AI can reduce repetitive work and improve access to information."
        ],
        [
            "Key Findings",
            "AI assistants can support drafting, summarization, search and task guidance while keeping users in control of final decisions."
        ],
        [
            "Open Questions",
            "Important considerations include accuracy, privacy, human review and integration with existing workflows."
        ]
    ];

    results.innerHTML = sections.map((section, index) => `
        <article class="result">

            <div class="meta">
                ${
                    index === 0
                        ? "Synthesis"
                        : index === 1
                        ? "Finding"
                        : "Next question"
                }
            </div>

            <h2>${section[0]}</h2>

            <p>${section[1]}</p>

            <div class="sources">
                <span>Source review</span>
                <span>AI synthesis</span>
                <span>${q}</span>
            </div>

        </article>
    `).join("");
};