function addMessage(text, type) {

    const box = document.getElementById("chatBox");

    if (!box) {
        return;
    }

    const message = document.createElement("div");

    message.className = "message " + type;

    message.textContent = text;

    box.appendChild(message);

    box.scrollTop = box.scrollHeight;
}


function sendMessage() {

    const input = document.getElementById("userInput");

    if (!input || !input.value.trim()) {
        return;
    }

    let text = input.value.trim();

    addMessage(text, "user");

    input.value = "";

    setTimeout(function () {

        addMessage(
            "AI: I understood your message. This is a sample AI response.",
            "bot"
        );

    }, 400);
}


function loadChat(name) {

    document.getElementById("chatBox").innerHTML =
        '<div class="message bot">You selected ' +
        name +
        '. How can I help?</div>';
}


function setCommand(text) {

    document.getElementById("commandInput").value = text;
}


function runCommand() {

    let value =
        document.getElementById("commandInput").value.trim();

    if (value) {

        document.getElementById("commandResult").textContent =
            "AI completed: " + value;

    } else {

        document.getElementById("commandResult").textContent =
            "Please enter a command.";
    }
}


function aiSearch() {

    let query =
        document.getElementById("searchInput").value.trim();

    let result =
        document.getElementById("searchResult");

    if (!query) {

        result.innerHTML =
            '<div class="card">Please enter a search.</div>';

        return;
    }

    result.innerHTML =
        '<div class="search-result">' +
        '<h3>AI Answer</h3>' +
        '<p>Here is a sample AI answer for <b>' +
        query +
        '</b>.</p>' +
        '<small>AI generated result</small>' +
        '</div>' +

        '<div class="search-result">' +
        '<h3>Related Information</h3>' +
        '<p>More information related to your search can appear here.</p>' +
        '</div>';
}


function generatePrompt() {

    let prompt =
        document.getElementById("promptInput").value.trim();

    let result =
        document.getElementById("promptResult");

    if (prompt) {

        result.textContent =
            "AI Response: " +
            prompt +
            " — This is a sample response from the AI interface.";

    } else {

        result.textContent =
            "Please enter a prompt.";
    }
}


function clearPrompt() {

    document.getElementById("promptInput").value = "";

    document.getElementById("promptResult").textContent =
        "Your AI response will appear here.";
}


function useSuggestion(button) {

    document.getElementById("selectedPrompt").textContent =
        button.textContent;
}


function copyResponse() {

    let text =
        document.getElementById("responseText").textContent;

    navigator.clipboard.writeText(text);

    document.getElementById("actionMessage").textContent =
        "Response copied.";
}


function likeResponse() {

    document.getElementById("actionMessage").textContent =
        "Thanks for your feedback!";
}


function regenerate() {

    document.getElementById("responseText").textContent =
        "This is a new sample AI response generated again.";

    document.getElementById("actionMessage").textContent =
        "Response regenerated.";
}


function summarize() {

    let text =
        document.getElementById("sourceText").value.trim();

    if (text) {

        document.getElementById("summary").textContent =
            "AI Summary: The text explains how AI is used in different fields and how modern AI interfaces make AI tools easier to use.";

    } else {

        document.getElementById("summary").textContent =
            "Please enter text first.";
    }
}