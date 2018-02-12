export const dataCleaner = {

  onlyLetters: (input) => {
    return input.replace(/[^a-z\s]/gi, '').split(' ')
  },

  allLowerCase: (words) => {
    return words.map(word => word.toLowerCase())
  },

  uniqueWords: (formattedWords) => {
    let unique = {}
    formattedWords.forEach(word => {
      unique[`${word}`] ? unique[`${word}`] += 1 : unique[`${word}`] = 1
    })
    return unique
  },
}
