// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {
  const a = dna.split("");
  for (i = 0; i < a.length; i++) {
    if (a[i] === "A") {
      a[i] = "T";
    } else if (a[i] === "T") {
      a[i] = "A";
    } else if (a[i] === "C") {
      a[i] = "G";
    } else if (a[i] === "G") {
      a[i] = "C";
    }
  }
  return a.join("");
}
console.log(DNAStrand("ATTGC"));
