const { getAllMovies, getMovieById, getQuotesByMovieId, getMoviesByRegex } = require('../lrs_sdk/movies');

describe("Movie sdk test", () => {
  test("getAllMovies function test", async () => {
    const res = await getAllMovies();
    expect(res.length).toBe(8);
  });

  test("getMovieById function test", async () => {
    const res = await getMovieById("5cd95395de30eff6ebccde56");

    expect(res._id).toBe("5cd95395de30eff6ebccde56");
    expect(res.name).toBe("The Lord of the Rings Series");
  });

  test("getQuotesByMovieId function test", async () => {
    const res = await getQuotesByMovieId("5cd95395de30eff6ebccde56");
    expect(res.length).toBe(0);
  });

  test("getMoviesByRegex function test", async () => {
    const res = await getMoviesByRegex("name","/Return/i");
    expect(res.length).toBe(1);
    expect(res._id).toBe("5cd95395de30eff6ebccde5d");
  })
})