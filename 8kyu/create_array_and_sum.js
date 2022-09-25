// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8

var summation = function (num) {
  const a = Array.from({ length: num }, (_, i) => i + 1).reduce(
    (a, b) => a + b,
    0
  );
  return a;
};
