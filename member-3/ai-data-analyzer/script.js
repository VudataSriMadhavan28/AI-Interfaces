const analyze = document.getElementById("analyze");
const finding = document.getElementById("finding");
const chart = document.getElementById("chart");

const values = [
    42, 58, 50, 72, 64, 83,
    78, 91, 88, 96, 86, 100
];

chart.innerHTML = values
    .map(value => `
        <div
            class="bar"
            style="height:${value}%">
        </div>
    `)
    .join("");

analyze.onclick = () => {

    finding.innerHTML = `
        <p>
            <b>Revenue increased 14.8%</b>
            compared with the previous period.
        </p>

        <p>
            The strongest movement appears in the
            last four data points, suggesting a
            recent acceleration.
        </p>

        <p>
            <b>AI recommendation:</b>
            inspect the top-performing segment
            and compare acquisition sources.
        </p>
    `;
};