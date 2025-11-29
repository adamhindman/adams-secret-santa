// Pre-generated Secret Santa assignments
// This list is fixed to ensure consistency across sessions.
const assignments = {
  "Adam Hindman": "Kristi Radford",
  "Kristi Radford": "Benjamin Buffington",
  "Benjamin Buffington": "Ashlynn Hoffman",
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

// Simple fuzzy matching function
function fuzzyMatch(str, pattern) {
  const strLower = str.toLowerCase();
  const patternLower = pattern.toLowerCase();

  let patternIdx = 0;
  let strIdx = 0;

  while (patternIdx < patternLower.length && strIdx < strLower.length) {
    if (patternLower[patternIdx] === strLower[strIdx]) {
      patternIdx++;
    }
    strIdx++;
  }

  return patternIdx === patternLower.length;
}

// Calculate fuzzy match score (lower is better)
function fuzzyScore(str, pattern) {
  const strLower = str.toLowerCase();
  const patternLower = pattern.toLowerCase();

  let patternIdx = 0;
  let strIdx = 0;
  let score = 0;

  while (patternIdx < patternLower.length && strIdx < strLower.length) {
    if (patternLower[patternIdx] === strLower[strIdx]) {
      patternIdx++;
      score += strIdx; // Lower index matches get lower scores (better)
    }
    strIdx++;
  }

  if (patternIdx !== patternLower.length) {
    return Infinity; // No match
  }

  return score;
}

nameInput.addEventListener("input", function () {
  const searchText = this.value.trim();

  // Clear result if input is empty
  if (searchText.length === 0) {
    resultDiv.textContent = "";
    return;
  }

  // Find matching names using fuzzy search
  const matches = Object.keys(assignments)
    .filter((name) => fuzzyMatch(name, searchText))
    .map((name) => ({ name, score: fuzzyScore(name, searchText) }))
    .sort((a, b) => a.score - b.score);

  if (matches.length > 0) {
    const giverName = matches[0].name;
    const receiverName = assignments[giverName];
    // Display the message
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
