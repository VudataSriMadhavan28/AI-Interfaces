const btn = document.getElementById("summarize");
const notes = document.getElementById("notes");
const summary = document.getElementById("summary");

btn.onclick = () => {

    summary.innerHTML = `
        <div>
            <b>Overview</b>
            <p>
                The team discussed launch readiness,
                quality assurance and demo preparation.
            </p>
        </div>

        <div>
            <b>Decisions</b>
            <p>
                QA testing will be completed before
                the Friday demonstration.
            </p>
        </div>

        <div>
            <b>Action Items</b>
            <p>
                Finalize content · Assign QA owner ·
                Confirm demo schedule
            </p>
        </div>
    `;
};