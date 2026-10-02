const prompt = document.getElementById("prompt");
const language = document.getElementById("language");
const code = document.getElementById("code");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");

generate.onclick = () => {

    const p = prompt.value.trim() || "Create a simple function";
    const lang = language.value;

    const templates = {

        JavaScript: `
function solve() {
    // AI-generated solution for: ${p}

    const result = {
        message: "Task completed"
    };

    return result;
}

console.log(solve());
        `,

        Python: `
def solve():
    # AI-generated solution for: ${p}

    result = {
        "message": "Task completed"
    }

    return result

print(solve())
        `,

        C: `
#include <stdio.h>

int main() {

    printf("AI-generated solution for: ${p}\\n");

    return 0;
}
        `
    };

    code.textContent = templates[lang];
};

copy.onclick = () => {

    navigator.clipboard
        .writeText(code.textContent)
        .then(() => {
            copy.textContent = "Copied!";
        });
};