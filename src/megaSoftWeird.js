class megaSoftWeird {

  spellChecker(string) {
    let wordBank = ["Hello", "World"]
    let splitSentence = string.split(" ")
    let updatedString = []
    for(var i = 0; i < splitSentence.length; i++){
      if (splitSentence.includes(wordBank[i])){
        updatedString.push(splitSentence[i])
      }
      else {
        updatedString.push(`~${splitSentence[i]}~`)
      }
    }
    return updatedString.join(" ")
  } 
}

module.exports = megaSoftWeird;

