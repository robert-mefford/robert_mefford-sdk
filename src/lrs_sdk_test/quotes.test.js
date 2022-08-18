const { getAllQuotes, getQuoteById, getQuoteByRegex } = require('../lrs_sdk/quotes');

describe("chapter sdk test", () => {

  test("getAllQuotes function test", async () => {
    const res = await getAllQuotes();
    expect(res.length).toBe(2390);
  }, 100000);

  test("getQuoteById function test", async () => {
    const res = await getQuoteById("5cd96e05de30eff6ebcce7f3");
    expect(res._id).toBe("5cd96e05de30eff6ebcce7f3");
    expect(res.dialog).toBe("Pull it in! Go on, go on, go on, pull it in!");
    expect(res.movie).toBe('5cd95395de30eff6ebccde5d');
    expect(res.character).toBe('5cd99d4bde30eff6ebccfe9e');
  });

  test("getQuoteByRegex function test", async () => {
    const res = await getQuoteByRegex("dialog", "/cursed/i");
    expect(res.length).toBe(3);
  });
});