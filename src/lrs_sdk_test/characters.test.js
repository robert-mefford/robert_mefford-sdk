const { getAllCharacters, getCharacterById, getQuotesByCharacterId, getCharacterByRegex } = require('../lrs_sdk/characters');

describe("Characters sdk test", () => {
  test("getAllCharacters function test", async () => {
    const res = await getAllCharacters();
    expect(res.length).toBe(933);
  });

  test("getCharacterById function test", async () => {
    const res = await getCharacterById("5cd99d4bde30eff6ebccfc22");
    expect(res._id).toBe('5cd99d4bde30eff6ebccfc22');
    expect(res.gender).toBe('Male');
    expect(res.birth).toBe('TA 2985');
    expect(res.name).toBe('Bard II');
  });

  test("getQuotesByCharacterId function test", async () => {
    const res = await getQuotesByCharacterId("5cd99d4bde30eff6ebccfea0");
    expect(res.length).toBe(216);
  });

  test("getCharacterByRegex function test", async () => {
    const res = await getCharacterByRegex("name", "/foot/i");
    expect(res.length).toBe(11);
  })
})