const form = document.getElementById("form");
const q = document.getElementById("question");
const messages = document.getElementById("messages");
const clear = document.getElementById("clear");

form.onsubmit = (e) => {

    e.preventDefault();

    const text = q.value.trim();

    if (!text) return;

    messages.innerHTML += `
        <div class="message user">
            <strong>You</strong>
            <p>${text}</p>
        </div>
    `;

    setTimeout(() => {

        messages.innerHTML += `
            <div class="message ai">
                <strong>AI</strong>
                <p>
                    Based on <b>Product Brief.pdf</b>,
                    the document indicates that this topic
                    is a key part of the project plan.
                    This demo response represents an
                    AI-generated answer with document context.
                </p>
            </div>
        `;

    }, 300);

    q.value = "";
};

clear.onclick = () => {

    messages.innerHTML = `
        <div class="message ai">
            <strong>AI</strong>
            <p>
                I'm ready. Ask me anything about
                the Product Brief.
            </p>
        </div>
    `;
};