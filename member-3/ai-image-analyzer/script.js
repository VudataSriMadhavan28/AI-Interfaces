const input = document.getElementById("imageInput");
const choose = document.getElementById("choose");
const preview = document.getElementById("preview");
const status = document.getElementById("status");
const results = document.getElementById("results");

choose.onclick = () => input.click();

input.onchange = () => {

    const file = input.files[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    preview.innerHTML = `
        <img src="${url}" alt="Selected preview">
    `;

    status.textContent = "Analyzed";

    results.innerHTML = `
        <div>
            <b>Objects</b>
            <span>Person, device, table</span>
        </div>

        <div>
            <b>Scene</b>
            <span>Indoor workspace</span>
        </div>

        <div>
            <b>Text</b>
            <span>Detected 3 text regions</span>
        </div>

        <div>
            <b>Confidence</b>
            <span>94%</span>
        </div>
    `;
};