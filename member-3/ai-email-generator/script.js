const purpose = document.getElementById("purpose");
const tone = document.getElementById("tone");
const email = document.getElementById("email");
const generate = document.getElementById("generate");
const copy = document.getElementById("copy");

generate.onclick = () => {

    const selectedTone = tone.value.toLowerCase();

    email.innerHTML = `
        <strong>Subject: Confirmation request</strong>

        <p>Hello,</p>

        <p>
            I’m writing to ${purpose.value.toLowerCase()}.
            Please let me know what time works best for you.
        </p>

        <p>
            The email tone has been adjusted to be
            ${selectedTone} and easy to scan.
        </p>

        <p>
            Best regards,<br>
            Your Name
        </p>
    `;
};

copy.onclick = () => {

    navigator.clipboard
        .writeText(email.innerText)
        .then(() => {
            copy.textContent = "Copied!";
        });
};