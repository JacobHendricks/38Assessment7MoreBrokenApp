const {timeWord} = require('./timeWord.js');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });

  test("works", () => {
    let text1 = timeWord("23:26")
    expect(text1).toEqual('eleven twenty six pm')
    let text2 = timeWord("10:34")
    expect(text2).toEqual('ten thirty four am')
    let text3 = timeWord("01:00")
    expect(text3).toEqual('one oh clock am')
    let text4 = timeWord("12:09")
    expect(text4).toEqual('twelve oh nine pm')
  })

  test("midnight", () => {
    let midnight = timeWord("00:00")
    expect(midnight).toEqual('midnight')
  })
  test("noon", () => {
    let noon = timeWord("12:00")
    expect(noon).toEqual('noon')
  })



});