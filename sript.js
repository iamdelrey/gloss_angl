const glossary = [
  {
    term: "Cat",
    definition:
      "A small domesticated carnivorous mammal with soft fur, a short snout, and retractile claws.",
    transcription: "kæt",
    image: "cat.jpg",
  },
  {
    term: "Dog",
    definition:
      "A domesticated carnivorous mammal that typically has a long snout, an acute sense of smell, non-retractable claws, and a barking, howling, or whining voice.",
    transcription: "dɔːɡ",
    image: "dog.jpg",
  },
  // Add more terms here
];

function displayGlossary(terms) {
  const glossaryDiv = document.getElementById("glossary");
  glossaryDiv.innerHTML = "";
  terms.forEach((term) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const image = document.createElement("img");
    image.src = term.image;
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    const title = document.createElement("h3");
    title.textContent = term.term;
    const definition = document.createElement("p");
    definition.textContent = term.definition;
    const transcription = document.createElement("p");
    transcription.textContent = `Transcription: ${term.transcription}`;
    cardBody.appendChild(title);
    cardBody.appendChild(definition);
    cardBody.appendChild(transcription);
    card.appendChild(image);
    card.appendChild(cardBody);
    glossaryDiv.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayGlossary(glossary);

  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTerms = glossary.filter((term) =>
      term.term.toLowerCase().includes(searchTerm)
    );
    displayGlossary(filteredTerms);
  });

  const sortSelect = document.getElementById("sort");
  sortSelect.addEventListener("change", () => {
    const selectedValue = sortSelect.value;
    let sortedTerms;
    if (selectedValue === "alphabetical") {
      sortedTerms = [...glossary].sort((a, b) => a.term.localeCompare(b.term));
    } else if (selectedValue === "chronological") {
      // Implement chronological sorting if needed
    }
    displayGlossary(sortedTerms);
  });
});
