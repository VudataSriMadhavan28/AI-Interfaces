const pageTitles = {
    resume: "Resume Analyzer",
    interview: "Interview Assistant",
    study: "Study Assistant",
    writing: "Writing Assistant",
    translation: "Translation",
    tasks: "Task Planner",
    stylist: "Personal Stylist",
    fitness: "Health & Fitness",
    feedback: "Feedback",
    roadmap: "Learning Roadmap"
};


function showPage(pageId, element) {

    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active-page");
    });

    document.getElementById(pageId).classList.add("active-page");

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");
    });

    element.classList.add("active");

    document.getElementById("pageName").textContent = pageTitles[pageId];

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* RESUME */

function analyzeResume() {

    const score = document.getElementById("resumeScore");

    score.textContent = "...";

    setTimeout(() => {
        score.textContent = "91";
    }, 1200);
}


/* INTERVIEW */

function nextQuestion() {

    const questions = [
        "Why should we hire you?",
        "Tell me about your recent project.",
        "What is your biggest technical challenge?",
        "Where do you see yourself in five years?"
    ];

    const randomQuestion =
        questions[Math.floor(Math.random() * questions.length)];

    document.querySelector(".interviewer h2").textContent =
        randomQuestion;
}


/* STUDY */

function sendStudyMessage() {

    const input = document.getElementById("studyInput");

    if (input.value.trim() === "") {
        return;
    }

    const messages = document.querySelector(".messages");

    const userMessage = document.createElement("div");

    userMessage.className = "message user";
    userMessage.textContent = input.value;

    messages.appendChild(userMessage);

    const aiMessage = document.createElement("div");

    aiMessage.className = "message ai";
    aiMessage.textContent =
        "Great question! I can help you understand this concept step by step.";

    setTimeout(() => {
        messages.appendChild(aiMessage);
        messages.scrollTop = messages.scrollHeight;
    }, 500);

    input.value = "";
}


/* WRITING */

function writingAction(action) {

    const textarea = document.getElementById("writingText");

    if (textarea.value.trim() === "") {

        textarea.value =
            "This is an AI generated writing sample. The assistant can improve, rewrite, summarize and transform your content.";

        return;
    }

    if (action === "Improve") {
        textarea.value =
            "Improved version:\n\n" +
            textarea.value +
            "\n\nThe content has been refined for clarity and readability.";
    }

    if (action === "Summarize") {
        textarea.value =
            "Summary:\n\n" +
            textarea.value.substring(0, 150) +
            "...";
    }

    if (action === "Rewrite") {
        textarea.value =
            "Rewritten version:\n\n" +
            textarea.value;
    }

    if (action === "Professional") {
        textarea.value =
            "Professional version:\n\n" +
            textarea.value;
    }

    if (action === "Grammar") {
        textarea.value =
            textarea.value +
            "\n\n✓ Grammar analysis completed.";
    }
}


function generateWriting() {

    const textarea = document.getElementById("writingText");

    textarea.value =
        "AI is transforming the way people work and learn. " +
        "Modern AI interfaces allow users to interact with intelligent systems " +
        "through natural language, personalized recommendations and adaptive workflows.";
}


/* TRANSLATION */

function translateText() {

    const source = document.getElementById("sourceText").value;

    if (source.trim() === "") {
        document.getElementById("translationResult").textContent =
            "Please enter some text first.";

        return;
    }

    document.getElementById("translationResult").textContent =
        "Translated result: " + source;
}


function swapLanguages() {

    const source = document.getElementById("sourceLanguage");
    const target = document.getElementById("targetLanguage");

    const temp = source.value;

    source.value = target.value;
    target.value = temp;
}


/* FEEDBACK */

function rate(value) {

    document.querySelectorAll(".rating button").forEach(button => {
        button.style.borderColor = "";
    });

    event.currentTarget.style.borderColor = "#6c5ce7";

    console.log("Rating:", value);
}


function submitFeedback() {

    alert("Thank you! Your feedback has been submitted.");
}


/* ROADMAP */

function generateRoadmap() {

    const button = event.currentTarget;

    button.textContent = "Generating...";

    setTimeout(() => {

        button.textContent = "✓ Roadmap Generated";

        alert(
            "Your personalized learning roadmap has been generated."
        );

    }, 1000);
}


/* WORD COUNT */

const writingArea = document.getElementById("writingText");

if (writingArea) {

    writingArea.addEventListener("input", function () {

        const words =
            this.value.trim() === ""
                ? 0
                : this.value.trim().split(/\s+/).length;

        document.querySelector(".word-count span").textContent =
            words + " words";
    });
}


/* TRANSLATION CHARACTER COUNT */

const sourceText = document.getElementById("sourceText");

if (sourceText) {

    sourceText.addEventListener("input", function () {

        const counter =
            this.parentElement.querySelector("span");

        counter.textContent =
            this.value.length + " characters";
    });
}