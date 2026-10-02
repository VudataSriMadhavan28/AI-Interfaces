function showResult(id, message) {
    let result = document.getElementById(id);
    result.innerHTML = message;
    result.style.display = "block";
}

function recommend() {
    showResult(
        "result",
        "<h3>AI Recommendations</h3><p>1. Learn HTML and CSS</p><p>2. Practice JavaScript</p><p>3. Build small projects</p>"
    );
}

function generateInsight() {
    showResult(
        "result",
        "<h3>AI Insight</h3><p>Your data shows a positive improvement compared to the previous period.</p>"
    );
}

function generateContent() {
    let topic = document.getElementById("topic").value;

    if (topic == "") {
        alert("Please enter a topic.");
        return;
    }

    showResult(
        "result",
        "<h3>Generated Content</h3><p>Here is AI-generated content about <b>" +
        topic +
        "</b>. This is a simple demonstration of an AI content generator interface.</p>"
    );
}

function summarize() {
    let text = document.getElementById("document").value;

    if (text == "") {
        alert("Please enter some text.");
        return;
    }

    showResult(
        "result",
        "<h3>Summary</h3><p>" +
        text.substring(0, 150) +
        "...</p>"
    );
}

function queryAI() {
    let query = document.getElementById("query").value;

    if (query == "") {
        alert("Please enter a question.");
        return;
    }

    showResult(
        "result",
        "<h3>AI Answer</h3><p>You asked: <b>" +
        query +
        "</b></p><p>This is a sample AI response for the interface demonstration.</p>"
    );
}

function askData() {
    let question = document.getElementById("dataQuestion").value;

    if (question == "") {
        alert("Please ask a question.");
        return;
    }

    showResult(
        "result",
        "<h3>Data Answer</h3><p>Based on the available data, the answer to your question is displayed here.</p>"
    );
}

function createChart() {
    showResult(
        "result",
        "<h3>Generated Chart</h3>" +
        "<div class='chart'>" +
        "<div class='bar' style='height:80px'></div>" +
        "<div class='bar' style='height:140px'></div>" +
        "<div class='bar' style='height:190px'></div>" +
        "<div class='bar' style='height:120px'></div>" +
        "<div class='bar' style='height:220px'></div>" +
        "</div>"
    );
}

function generateReport() {
    showResult(
        "result",
        "<h3>AI Report</h3>" +
        "<p><b>Introduction:</b> This report provides a simple overview of the given information.</p>" +
        "<p><b>Analysis:</b> The information shows useful patterns and trends.</p>" +
        "<p><b>Conclusion:</b> The results can be used for better decision making.</p>"
    );
}

function sendMessage() {
    let input = document.getElementById("chatInput");
    let chat = document.getElementById("chat");

    if (input.value == "") {
        return;
    }

    chat.innerHTML +=
        "<div class='message user'>" +
        input.value +
        "</div>";

    chat.innerHTML +=
        "<div class='message ai'>AI: I understand your question. This is a sample AI Copilot response.</div>";

    input.value = "";

    chat.scrollTop = chat.scrollHeight;
}

function autocomplete() {
    let input = document.getElementById("autoInput");
    let suggestions = document.getElementById("suggestions");

    let text = input.value.toLowerCase();

    suggestions.innerHTML = "";

    if (text == "") {
        return;
    }

    let words = [
        "Artificial Intelligence",
        "Artificial Intelligence in Education",
        "Artificial Intelligence in Healthcare",
        "Artificial Intelligence in Business"
    ];

    words.forEach(function(word) {
        if (word.toLowerCase().includes(text)) {
            suggestions.innerHTML +=
                "<div class='suggestion' onclick='selectSuggestion(this)'>" +
                word +
                "</div>";
        }
    });
}

function selectSuggestion(element) {
    document.getElementById("autoInput").value = element.innerText;
    document.getElementById("suggestions").innerHTML = "";
}
