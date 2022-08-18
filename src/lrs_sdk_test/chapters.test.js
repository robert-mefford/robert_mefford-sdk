
const { getAllChapters, getChapterById, getChaptersByRegex } = require('../lrs_sdk/chapters');

describe("chapter sdk test", () => {

  test("getAllChapters function test", async () => {
    const res = await getAllChapters();
    expect(res.length).toBe(62);
  });

  test("getChapterById function test", async () => {
    const res = await getChapterById("6091b6d6d58360f988133bc5");
    expect(res._id).toBe("6091b6d6d58360f988133bc5");
    expect(res.chapterName).toBe("Many Partings");
    expect(res.book).toBe("5cf58080b53e011a64671584");
  });

  test("getChaptersByRegex function test", async () => {
    const res = await getChaptersByRegex("chapterName", "/Knife/i");
    expect(res.length).toBe(1);
    expect(res._id).toBe("6091b6d6d58360f988133b95");
    expect(res.book).toBe("5cf5805fb53e011a64671582");
  })
});