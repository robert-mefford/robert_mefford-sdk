const { getAllMovies, getMovieById, getQuotesByMovieId } = require('../lrs_sdk/movies');

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
})