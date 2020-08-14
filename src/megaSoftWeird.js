class megaSoftWeird {

  spellChecker(string) {
    let wordBank = ["Hello", "World"]
    let splitSentence = string.split(" ")
    let updatedString = []
    for(let i = 0; i <= splitSentence.length; i++){
      if (splitSentence.includes(wordBank[i])){
        updatedString.push(splitSentence[i])
      }
    }
    console.log(updatedString)
    return updatedString.join(" ")
  } 
}

module.exports = megaSoftWeird;

