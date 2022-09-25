// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  if (!str || str === 0) {
    return false;
  } else {
    const a = str.split(" ");
    for (i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
    }
    a.unshift("#");
    const b = a.join().replace(/,/g, "").split("");
    if (b.length > 140) {
      return false;
    } else if (b.length === 1) {
      return false;
    } else {
      return b.join().replace(/,/g, "");
    }
  }
}
