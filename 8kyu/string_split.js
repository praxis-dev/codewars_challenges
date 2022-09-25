// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  const a = x.split("");
  for (i = 0; i < a.length; i++) {
    if (a[i] < 5) {
      a[i] = 0;
    } else {
      a[i] = 1;
    }
  }
  return a.join("");
}

console.log(fakeBin("45385593107843568"));
