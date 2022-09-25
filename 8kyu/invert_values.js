// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []

// my solution

function invert(array) {
  function inverter(x) {
    return x * -1;
  }
  return array.map(inverter);
}
