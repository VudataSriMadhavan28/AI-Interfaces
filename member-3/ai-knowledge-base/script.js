const q = document.getElementById("query");
const ask = document.getElementById("ask");
const answer = document.getElementById("answer");

const run = () => {

    const text = q.value.trim() || "your question";

    answer.innerHTML = `
        <small>AI ANSWER · 92% CONFIDENCE</small>

        <h2>Answer for "${text}"</h2>

        <p>
            Based on the connected knowledge base,
            the most relevant guidance is available
            in the Employee Handbook and Product
            Documentation.
        </p>

        <p>
            This demo shows how an AI search result
            can combine a direct answer with confidence
            and source context.
        </p>

        <p>
            <b>Related documents:</b>
            Employee Handbook · Product Documentation ·
            Support Policies
        </p>
    `;
};

ask.onclick = run;

document
    .querySelectorAll(".suggestions button")
    .forEach(button => {

        button.onclick = () => {
            q.value = button.dataset.q;
            run();
        };

    });