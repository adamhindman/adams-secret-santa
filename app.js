// Pre-generated Secret Santa assignments
// This list is fixed to ensure consistency across sessions.
const assignments = {
  "Adam Hindman": "Kristi Radford",
  "Kristi Radford": "Ben Buffington",
  "Ben Buffington": "Ashlynn Hoffman",
  "Ashlynn Hoffman": "Lanny Hindman",
  "Lanny Hindman": "Justin Hoffman",
  "Justin Hoffman": "Linda Hindman",
  "Linda Hindman": "Jake Radford",
  "Jake Radford": "Kate Buffington",
  "Kate Buffington": "Daniel Radford",
  "Daniel Radford": "Adam Hindman",
};

const nameInput = document.getElementById("nameInput");
const resultDiv = document.getElementById("result");

nameInput.addEventListener("input", function () {
  const searchText = this.value.trim();

  // Clear result if input is empty
  if (searchText.length === 0) {
    resultDiv.textContent = "";
    return;
  }

  // Find a matching name in the keys of assignments.
  // We check if the input string is a substring of any giver's name.
  const giverName = Object.keys(assignments).find((name) =>
    name.toLowerCase().includes(searchText.toLowerCase()),
  );

  if (giverName) {
    const receiverName = assignments[giverName];
    // Display the message
    // [user name entered (matched name)] is buying a gift for [corresponding name]
    resultDiv.innerHTML = `<strong>${giverName}</strong> is buying a gift for <strong>${receiverName}</strong>`;
  } else {
    // Show contact message if no match is found
    resultDiv.textContent = "Name not found. Please contact Adam.";
  }
});

// Create animated Christmas emojis
const emojiContainer = document.querySelector(".emoji-container");
const christmasEmojis = [
  "🎅",
  "❄️",
  "⛄",
  "🎄",
  "🎁",
  "⭐",
  "🔔",
  "🦌",
  "🤶",
  "✨",
];

// Create 10 floating emojis
for (let i = 0; i < 10; i++) {
  const emoji = document.createElement("div");
  emoji.className = "emoji";
  emoji.textContent = christmasEmojis[i % christmasEmojis.length];

  // Randomize horizontal position
  emoji.style.left = Math.random() * 100 + "%";

  // Randomize animation delay
  emoji.style.animationDelay = Math.random() * 5 + "s";

  // Randomize animation duration
  emoji.style.animationDuration = 8 + Math.random() * 6 + "s";

  emojiContainer.appendChild(emoji);
}
