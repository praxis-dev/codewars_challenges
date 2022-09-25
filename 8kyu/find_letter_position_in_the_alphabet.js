// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter) {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x));
  const lower = alphabet.map((element) => {
    return element.toLowerCase();
  });
  return `Position in the alphabet: ${lower.indexOf(letter) + 1}`;
}

console.log(position("b"));
