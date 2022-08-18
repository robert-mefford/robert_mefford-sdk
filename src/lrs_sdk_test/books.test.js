
const { getAllBooks, getBookById, getChaptersByBookId, getBooksByRegex } = require('../lrs_sdk/books');

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

  test("getBooksByRegex function test", async () => {
    const res = await getBooksByRegex("name", "/of/i");
    expect(res.length).toBe(2);
    expect(res[0]._id).toBe('5cf5805fb53e011a64671582');
    expect(res[1]._id).toBe('5cf58080b53e011a64671584');
  })
});