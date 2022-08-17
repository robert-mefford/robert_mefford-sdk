
const { getAllBooks, getBookById, getChaptersByBookId } = require('../lrs_sdk/books');

describe("book sdk test", () => {

  test("getAllBooks function test", async () => {
    const res = await getAllBooks();
    expect(res.length).toBe(3);
  });

  test("getBookById function test", async () => {
    const res = await getBookById("5cf58077b53e011a64671583");
    expect(res._id).toBe("5cf58077b53e011a64671583");
    expect(res.name).toBe("The Two Towers");
  })

  test("getChaptersByBookId function test", async () => {
    const res = await getChaptersByBookId("5cf58077b53e011a64671583");
    expect(res.length).toBe(21);
  })
});