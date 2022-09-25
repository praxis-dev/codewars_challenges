// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {
  const x = s.split("").filter(function (value, index, arr) {
    return value != "!";
  });
  return x.join("");
}
console.log(removeExclamationMarks("Hello World!"));
