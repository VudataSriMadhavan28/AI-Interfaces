const input = document.getElementById("fileInput");
const upload = document.getElementById("uploadBtn");
const nameEl = document.getElementById("fileName");
const analysis = document.getElementById("analysis");
const insights = document.getElementById("insights");
const count = document.getElementById("count");
const reset = document.getElementById("newBtn");

upload.onclick = () => input.click();

input.onchange = () => {
    const file = input.files[0];

    if (!file) return;

    nameEl.textContent = file.name;

    analysis.className = "";

    analysis.innerHTML = `
        <h3>${file.name}</h3>
        <p>
            AI preview generated for a
            ${Math.round(file.size / 1024)} KB file.
            The document appears focused on project
            information and structured content.
        </p>

        <button class="primary" onclick="showInsights()">
            Generate Insights
        </button>
    `;
};

window.showInsights = () => {

    const data = [
        ["Main Topic", "Project planning and execution"],
        ["Priority", "High-impact tasks are clustered around delivery"],
        ["Action", "Review owners, dates and open dependencies"]
    ];

    insights.innerHTML = data.map(item => `
        <div class="insight">
            <strong>${item[0]}</strong>
            <span>${item[1]}</span>
        </div>
    `).join("");

    count.textContent = "3 insights";
};

reset.onclick = () => {

    input.value = "";

    nameEl.textContent = "No file selected";

    analysis.className = "empty";

    analysis.textContent =
        "Upload a file to generate a summary, key topics and action items.";

    insights.innerHTML = "";

    count.textContent = "0 insights";
};