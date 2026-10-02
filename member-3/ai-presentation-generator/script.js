const topic = document.getElementById("topic");
const slides = document.getElementById("slides");
const deck = document.getElementById("deck");
const generate = document.getElementById("generate");

function render() {

    const numberOfSlides = parseInt(slides.value);

    const titles = [
        "Why It Matters",
        "Current Landscape",
        "Key Applications",
        "Benefits and Risks",
        "Future Outlook",
        "Implementation Roadmap",
        "Conclusion",
        "Next Steps",
        "Use Cases",
        "Final Takeaway"
    ];

    deck.innerHTML = Array
        .from({ length: numberOfSlides }, (_, i) => `
            <article class="slide">

                <small>SLIDE ${i + 1}</small>

                <h2>
                    ${i === 0 ? topic.value : titles[i - 1]}
                </h2>

                <p>
                    ${
                        i === 0
                        ? "Opening context and the core idea."
                        : `AI-generated talking points for ${topic.value}. Add examples, visuals and speaker notes here.`
                    }
                </p>

            </article>
        `)
        .join("");
}

generate.onclick = render;

render();