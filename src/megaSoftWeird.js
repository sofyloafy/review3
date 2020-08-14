class megaSoftWeird {

  spellChecker(string) {
    let wordBank = ["Hello", "World"]
    let splitSentence = string.split(" ")
    splitSentence.some(element => wordBank.includes(element))
    if (splitSentence.some(element => wordBank.includes(element)) === true){
      return string
    }
  }
}

module.exports = megaSoftWeird;

