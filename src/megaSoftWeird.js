class megaSoftWeird {

  spellChecker(string) {
    let wordBank = ["Hello", "World", "there"]
    let splitSentence = string.split(" ")
    let updatedString = []
    for(var i = 0; i < splitSentence.length; i++){
      if (wordBank.includes(splitSentence[i])){
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

