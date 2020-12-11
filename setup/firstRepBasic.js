const word = 'academind!'

// We want to find the first repeating character
// First naive approach might involve nested for loops:

const findFirstRep = (str) => {
  for (let i = 0; i < str.length; i++) {
    for (let j = 1 + 1; i < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i]
      }
    }
  }
}

console.log(findFirstRep(word))

// Time complexity here would be O(n^2). We shouldn't need to do this.
