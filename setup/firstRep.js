// To fix our implementation of firstRepBasic in a better way,
// we're going to use objects to demonstrate why we need them
// & how they help us
const word = 'burrger!'

const findFirstRep = str => {
  const table = {}
  for (const char of str) {
    if (table[char]) {
      return char
    }
    table[char] = 1
  }
}

console.log(findFirstRep(word))

// This gets us down to O(n) - which really improves our time complexity
