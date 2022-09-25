// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function duplicateEncode(word) {
  const lowercaseArray = word.toLowerCase().split("");
  const occurencesArray = [];

  for (i = 0; i < lowercaseArray.length; i++) {
    const occurences = lowercaseArray.filter(
      (x) => x == lowercaseArray[i]
    ).length;
    occurencesArray.push(occurences);
  }
  for (i = 0; i < occurencesArray.length; i++) {
    if (occurencesArray[i] === 1) {
      occurencesArray[i] = "(";
    } else {
      occurencesArray[i] = ")";
    }
  }
  return occurencesArray.join().replace(/,/g, "");
}
