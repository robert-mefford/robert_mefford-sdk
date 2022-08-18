const { getAllQuotes, getQuoteById } = require('../lrs_sdk/quotes');

describe("chapter sdk test", () => {

  test("getAllQuotes function test", async () => {
    const res = await getAllQuotes();
    console.log(res[10]);
    expect(res.length).toBe(1000);
  });

  test("getQuoteById function test", async () => {
    const res = await getQuoteById("6091b6d6d58360f988133bc5");
    expect(res._id).toBe("6091b6d6d58360f988133bc5");
    expect(res.chapterName).toBe("Many Partings");
    expect(res.book).toBe("5cf58080b53e011a64671584");
  });
});