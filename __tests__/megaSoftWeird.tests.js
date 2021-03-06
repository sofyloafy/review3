let MegaSoftWeird = require('../src/megaSoftWeird')
let megaSoftWeird = new MegaSoftWeird

describe("#MegaSoftWeird", () => {

  test('it should return a string unchanged if in array', () =>{
    expect(megaSoftWeird.spellChecker("Hello")).toBe("Hello")

  })

  test('it should return a string unchanged if in array', () =>{
    expect(megaSoftWeird.spellChecker("Hello World")).toBe("Hello World")
    
  })

  test('it should return a word with ~ either side if not present in array', () =>{
    expect(megaSoftWeird.spellChecker("Hellp World")).toBe("~Hellp~ World")
    
  })


  test('it should return a word with ~ either side if not present in array', () =>{
    expect(megaSoftWeird.spellChecker("Hellp there World")).toBe("~Hellp~ there World")
    
  })

  test('it should return a word with ~ either side if not present in array', () =>{
    expect(megaSoftWeird.spellChecker("Hellp thene")).toBe("~Hellp~ ~thene~")
    
  })

  test('it should return a word with ~ either side if not present in array', () =>{
    expect(megaSoftWeird.spellChecker("Hellp World thene")).toBe("~Hellp~ World ~thene~")
    
  })

  test('it should return a word with ~ either side if not present in array', () =>{
    expect(megaSoftWeird.spellChecker("Hellp thene World")).toBe("~Hellp~ ~thene~ World")
    
  })

})