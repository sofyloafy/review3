let MegaSoftWeird = require('../src/megaSoftWeird')
let megaSoftWeird = new MegaSoftWeird

describe("#MegaSoftWeird", () => {

  test('it should return a string unchanged if in array', () =>{
    expect(megaSoftWeird.spellChecker("Hello")).toBe("Hello")
    
  })

})