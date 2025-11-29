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
  const searchText = this.value.trim().toLowerCase();

  // Clear result if input is too short or empty
  if (searchText.length < 2) {
    resultDiv.textContent = "";
    return;
  }

  // Find a matching name in the keys of assignments.
  // We check if the input string is a substring of any giver's name.
  const giverName = Object.keys(assignments).find((name) =>
    name.toLowerCase().includes(searchText),
  );

  if (giverName) {
    const receiverName = assignments[giverName];
    // Display the message
    // [user name entered (matched name)] is buying a gift for [corresponding name]
    resultDiv.innerHTML = `<strong>${giverName}</strong> is buying a gift for <strong>${receiverName}</strong>`;
  } else {
    // Optional: clear or show a "not found" message.
    // Clearing is often cleaner for partial matches that haven't resolved yet.
    resultDiv.textContent = "Searching...";
  }
});
