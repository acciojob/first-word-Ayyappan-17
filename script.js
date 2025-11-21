function firstWord(s) {
  if (s === "") return "";        // empty string → return empty

  // Trim leading spaces first
  s = s.trimStart();

  // Find index of first space
  const idx = s.indexOf(" ");

  // If no space found → return entire string
  if (idx === -1) return s;

  // Otherwise return substring up to first space
  return s.substring(0, idx);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
